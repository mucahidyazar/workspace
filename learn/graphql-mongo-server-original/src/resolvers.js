import { Cat } from "./models/Cat"

export const resolvers = {
  Query: {
    hello: () => 'Hello',
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: (parent, args, ctx, info) => {
      const kitty = new Cat({ name: args.name});
      kitty.save().then(() => console.log("meow"));
      return kitty;
    }
  }
}

