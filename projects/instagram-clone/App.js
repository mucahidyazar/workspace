/* eslint-disable prettier/prettier */
import React from 'react';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:7000/graphql"
});
const client = new ApolloClient({
  cache,
  link,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
