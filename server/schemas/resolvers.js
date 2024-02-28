const { User, Priority, Category } = require("../models")
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate("priorities");
        },
        priorities: async (parent, { username, category }) => {
            const params = username ? { username } : {};
            
            if (category) {
                params.category = category;
            }
            return Priority.find(params).populate("category");
        },
        priority: async (parent, { priorityId }) => {
            return Priority.findOne({ _id: priorityId }).populate("category");
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate("priorities");
            }
            throw AuthenticationError;
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
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
        addPriority: async (parent, args, context) => {
            if (context.user) {
                const priority = await Priority.findOneAndUpdate({
                    args,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { priorities: priority._id } }
                );

                return priority;
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
    },
};



    module.exports = resolvers;