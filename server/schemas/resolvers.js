const { User, Priority } = require("../models")
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate("priorities");
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("priorities");
        },
        priorities: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Priority.find(params);
        },
        priority: async (parent, { priorityId }) => {
            return Priority.findOne({ _id: priorityId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate("priorities");
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        addPriority: async (parent, { priorityText }, context) => {
            if (context.user) {
                const priority = await Priority.create({
                    priorityText,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { priorities: priority._id } }
                );

                return Priority;
            }
            throw AuthenticationError;
        },
        addTask: async (parent, { priorityId, taskText }, context) => {
            if (context.user) {
                return Priority.findOneAndUpdate(
                    { _id: priorityId },
                    {
                        $addToSet: {
                            tasks: { taskText },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
        },
        removePriority: async (parent, { priorityId }, context) => {
            if (context.user) {
                const priority = await Priority.findOneAndDelete({
                    _id: priorityId,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { priorities: priority._id } }
                );

                return priority;
            }
            throw AuthenticationError;
        },
        removeTask: async (parent, { priorityId, taskId }, context) => {
            if (context.user) {
                return Priority.findOneAndUpdate(
                    { _id: priorityId },
                    {
                        $pull: {
                            tasks: {
                                _id: taskId,
                            },
                        },
                    },
                    { new: true }
                );
            }
            throw AuthenticationError;
        },
    },
};


module.exports = resolvers;