const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        Priorities: [Priority]!
    }

    type Priority {
        _id: ID
        priorityText: String
        completed: bolean
        category: String
        Tasks: [Task]
    }

    type Task {
        _id: ID
        taskText: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        priorities(username: String): [Priority]
        priority(priorityID: ID!): Priority
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPriority(priorityText: String!): Priority
        addTask(priorityId: ID!, taskText: String!): Priority
        removePriority(priorityId: ID!): Priority
        removeTask(priorityId: ID!, TaskId: ID!): Priority
    }
`


module.exports = typeDefs;