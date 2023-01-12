/* eslint-disable prettier/prettier */
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const connectDB = require('./config/db');
import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import { ApolloServer } from 'apollo-server-express';
import { mainTypeDefs } from './graphql/typeDefs/main';
import Query from './graphql/resolvers/Query';
import Mutation from './graphql/resolvers/Mutation';

const startServer = () => {

  const app = express();
  const server = new ApolloServer({
    typeDefs: mainTypeDefs,
    resolvers: {
      Query,
      Mutation
    }
  });

  server.applyMiddleware({app});

  const PORT = process.env.PORT || 7000;

  connectDB();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/', (req, res) => {
    res.send('Server is open');
  });

  app.listen(PORT, () => {
    console.log('Server is started on the port ' + PORT);
  });

}

startServer();