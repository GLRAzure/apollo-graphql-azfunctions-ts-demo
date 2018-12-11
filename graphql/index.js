"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_azure_functions_1 = require("apollo-server-azure-functions");
// Construct a schema, using GraphQL schema language
const typeDefs = apollo_server_azure_functions_1.gql `
  type Query {
    hello: String
  }
`;
// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        hello: () => "world"
    }
};
const server = new apollo_server_azure_functions_1.ApolloServer({ typeDefs, resolvers });
module.exports = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});
