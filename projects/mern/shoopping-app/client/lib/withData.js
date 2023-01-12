import withApollo from "next-with-apollo";
import ApolloClient from "apollo-boost";
import { endpoint, prodEndpoint } from "../config";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

const LOCAL_STATE_QUERY = gql`
  query LOCAL_STATE_QUERY {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation TOGGLE_CART_MUTATION {
    toggleCart @client
  }
`;

//headers authentication islemi icin gerekli olacak
//uri ise client uri ini aliyor
//request'te ise her request isleminde setContext ile fetOptions'a credentials: include ediyoruz
//ve yine setContext'e headers i gonderiyoruz
function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === "development" ? endpoint : prodEndpoint,
    request: (operation) => {
      operation.setContext({
        fetchOptions: {
          credentials: "include",
        },
        headers,
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart(_, variables, client) {
            // read the cartOpen value from the cache
            const { cartOpen } = client.cache.readQuery({
              query: LOCAL_STATE_QUERY,
            });
            // write  the cart State to the opposite
            const data = {
              data: { cartOpen: !cartOpen },
            };
            client.cache.writeData(data);
            return data;
          },
        },
      },
      defaults: {
        cartOpen: false,
      },
    },
  });
}

export default withApollo(createClient);
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
