const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./GraphQL/resolvers");
const { prisma } = require("../prisma/generated/prisma-client");

const server = new GraphQLServer({
  typeDefs: "./src/GraphQL/schema.graphql",
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log("Listen to localhost:4000"));
