const { expressMiddleware } = require("@apollo/server/express4");
const { typeDefs, resolvers } = require('./schemas');
const { ApolloServer } = require("@apollo/server");
const { authMiddleware } = require("./utils/auth");
const db = require('./config/connection');
const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;


// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({ typeDefs, resolvers });

const startApolloServer = async () => {
  try {
    await server.start();
  
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server, { context: authMiddleware }));
  
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));
  
      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }
  
    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });
  }
  catch (error) {
    console.error('Error starting Apollo Server:', error);
  }
};

startApolloServer();