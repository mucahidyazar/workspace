import { Cat } from "../../models/Cat";

export default {
  createCat: (parent, args, ctx, info) => {
    const kitty = new Cat({ name: args.name});
    kitty.save().then(() => console.log("meow"));
    return kitty;
  }
}