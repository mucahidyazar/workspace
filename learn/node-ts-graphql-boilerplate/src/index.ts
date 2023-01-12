import "reflect-metadata";
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from "typeorm";
import { ResolverMap } from './types/ResolverType';
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";

const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    user: async(_, { id }) => {
      const user = await User.findOne({ where: { id }, relations: [ "profile" ] });
      return user;
    },
    users: async() => {
      const users = await User.find({ relations: [ "profile" ] });
      return users;
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      const profile = await Profile.save(Profile.create(args.profile));
      const user = await User.save(
        User.create({
          ...args,
          profile
        })
      );
      return user;
    },
    updateUser: (_, { id, ...args }) => {
      try {
        User.update(id, args)
      } catch(err) {
        console.error(err);
        return false;
      }
      return true;
    },
    deleteUser: (_, { id }) => {
      try {
        User.delete(id)
      } catch(err) {
        console.error(err);
        return false;
      }
      return true;
    }
  }
}

const server = new GraphQLServer({ typeDefs: './schema.graphql', resolvers });

//Database ile baglantiyi saglar sornada graphqlserverini baslatiriz.
createConnection().then(()=> {
  server.start(() => console.log('Server is running on localhost:4000'));
});