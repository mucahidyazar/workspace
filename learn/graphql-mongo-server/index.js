import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { typeDefs } from './graphql/typeDefs/schema';
import Query from './graphql/resolvers/Query';
import Mutation from './graphql/resolvers/Mutation';

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation
    }
  });

  server.applyMiddleware({app});

  //async awaitin sebebi mongodbye baglanma sozu veriyoruz app.listen calisip server baslamadan once.
  await mongoose.connect('mongodb://localhost:27017/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.listen({ port: 4000 }, () => {
    console.log('Server ready at localhost:4000');
  });
}

startServer();