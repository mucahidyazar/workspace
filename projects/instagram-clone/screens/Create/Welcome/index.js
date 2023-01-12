/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
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

const CREATE_USER = gql`
  mutation (
    $fullName: String!
    $email: String!
    $birthday: String!
    $password: String!
  ) {
    createUser(
      fullName: $fullName
      email: $email
      birthday: $birthday
      password: $password
    ) {
      fullName
      email
      birthday
      password
    }
  }
`;

const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`

const Welcome = props => {

  const [newAccountInfos, setNewAccountInfos] = useState(props.navigation.getParam('newAccountInfos'));

  const { loading, error, usersData, refetch, networkStatus } = useQuery(GET_USERS, {
    notifyOnNetworkStatusChange: true
  });
  useEffect(() => {
    client
      .query({
        query: gql`
          query GetLaunch {
            launch(id: 56) {
              id
              mission {
                name
              }
            }
          }
        `
      })
      .then(result => console.log(result));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);


  const [createUser, {data}] = useMutation(CREATE_USER);
  const setRegisterHandler = () => {
    createUser({variables: {
      fullName: newAccountInfos.fullName,
      email: newAccountInfos.email,
      birthday: newAccountInfos.birthday,
      password: newAccountInfos.password,
    }});
  };

  return (
    //STEP 3 - WELCOME SCREEN
    <View style={styles.welcomePage}>
    <View style={styles.welcomePageBody}>
      <Text center dark style={{textTransform: 'uppercase'}}>Welcome to Instagram,</Text>
      <Text dark center>{newAccountInfos.fullName}</Text>
      <Text light center>Find people to follow and start sharing photos. You can change your username anytime.</Text>
      <View style={styles.welcomePageButtons}>
        <Button name="Next" color onPress={setRegisterHandler} />
        <Button name="Change Username" />
      </View>
    </View>
    <View style={styles.welcomePageFooter}>
      <Text light center>By clicking Next, you agree to our <Text dark>Terms, Data, Polict</Text> and <Text dark>Cookies Policy</Text></Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: '5%',
  },
  welcomePage: {
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    height: '100%',
  },
  welcomePageBody: {
    height: '90%',
    justifyContent: 'center',
  },
  welcomePageButtons: {
    paddingVertical: '10%',
  },
  welcomePageFooter: {
    height: '10%',
  },
});

export default Welcome;