/* eslint-disable prettier/prettier */
import { gql } from 'apollo-server-express';

export const mainTypeDefs = gql`
  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(
      password: String!
      email: String!
      fullName: String!
      birthday: String!
    ): User!
  }

  type User {
    id: String!
    username: String!
    password: String!
    email: String!
    dialCode: String!
    phone: String!
    fullName: String!
    birthday: String!
    age: Int!
    countryCode: String!
    countryName: String!
    savePassword: Boolean!
    private: Boolean!
    profilePhoto: String!
    album: [String!]
    followers: [String!]
    following: [String!]
    posts: [String!]
    tagPosts: [String!]
    savedPosts: [String!]
  }
`