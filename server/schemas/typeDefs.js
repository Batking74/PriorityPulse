const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        Priorities: [Priority]!
    }

    type Priority {
        _id: ID
        title: String
        priorityText: String
        isCompleted: Boolean
        dueDate: String
        category: Category
        tasks: [String]
    }

    type Category {
        _id: ID
        name: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        categories: [Category]
        user(username: String!): User
        priorities(username: String): [Priority]
        priority(priorityID: ID!): Priority
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPriority(title: String, priorityText:String, isCompleted: Boolean, dueDate: String, category: [ID!], tasks: [String]): Priority
        removePriority(priorityId: ID!): Priority
    }
`


module.exports = typeDefs;