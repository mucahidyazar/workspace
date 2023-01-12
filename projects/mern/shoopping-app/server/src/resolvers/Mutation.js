const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { transport, makeANiceEmail } = require("../mail");
const { hasPermission } = require("../utils");
const stripe = require("../stripe");

const Mutations = {
  async createItem(parent, args, ctx, info) {
    // ctx.db.mutation generated deki prisma.graphql icindeki Mutation'dan geliyor.
    // TODO: Check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to do that!");
    }

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args,
          user: {
            connect: {
              id: ctx.request.userId,
            },
          },
        },
      },
      info //mutation'in guncelledigi veya olusturdugu datayi nasil geri return yapacagini bilmesini saglar.
    );

    return item;
  },

  async updateItem(parent, args, ctx, info) {
    // first take a copy of the update
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },

  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // find the item
    //const item = await ctx.db.query.item({ where }, info);
    //Asagidaki aslinda yukaridaki ile ayni sadece spesifik secim yapiyoruz.
    const item = await ctx.db.query.item({ where }, `{ id title user { id } }`);
    // check if they own that item or have the permissions
    //TODO
    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.user.permissions.some((permission) =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem || !hasPermission) {
      throw new Error("You don't have permission to do that!");
    }
    // delete it
    return ctx.db.mutation.deleteItem({ where }, info);
  },

  async signUp(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 8);
    // create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          // name: args.name,
          // email: args.email,
          // password: args.password
          ...args,
          password,
          permissions: { set: ["USER"] }, //Bu alan enum oldugu icin bu sekilde set edilerek ayarlanmali
        },
      },
      info
    );
    // create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // we set the jwt as cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true, //chrome extension ve javascriptle cookieye mudahaleyi onler
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // we return the user to the browser
    return user;
  },

  async signIn(parent, { email, password }, ctx, info) {
    // check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) throw new Error(`No such user found for email ${email}`);
    // check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid password");
    // generate the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cokkie with the token
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, //1 year cookie
    });
    // return the user
    return user;
  },

  signOut(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Good bye!" };
  },

  async requestReset(parent, args, ctx, info) {
    // check if this is a real user
    const user = await ctx.db.query.user({ where: { email: args.email } });
    if (!user) throw new Error(`No such user found for email ${args.email}`);

    // set a reset token and expiry on that user
    const resetToken = (await promisify(randomBytes)(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry },
    });
    // email them that reset token
    const mailRes = await transport.sendMail({
      from: "mucahidyazar@gmail.com",
      to: user.email,
      subject: "Your password reset token",
      html: makeANiceEmail(`Your password reset token is here! 
        \n\n <a href="${
          process.env.FRONTEND_URL
        }/reset?resetToken=${resetToken}">Click here to reset</a>
      `),
    });

    // return the message
    return { message: "Thanks!" };
  },

  async resetPassword(parent, args, ctx, info) {
    // check if the passwords match
    if (args.password !== args.confirmPassword)
      throw new Error("Paswords don't match!");
    // check if its a legit reset token

    // check if its expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000,
      },
    });
    if (!user) throw new Error("This token is either invalid or expired!");
    // hash their new password
    const password = await bcrypt.hash(args.password, 8);
    // save the new password to the user and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });
    // generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    // set the jwt cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // return the new user
    return updatedUser;
  },

  async updatePermissions(parent, args, ctx, info) {
    // check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }
    // query the current user
    const currentUser = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info
    );
    // check if they have permissions to do this
    hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);
    // update the permissions
    return ctx.db.mutation.updateUser(
      {
        data: {
          //Normalde permissions: args.permissions yeterli olurdu.
          //Ama PRISMA'daki ENUM kullanimi yuzunden burasi set ile ayarlaniyor
          permissions: {
            set: args.permissions,
          },
        },
        where: {
          //Sadece kendi kullanicimizin permissionslarini degistirmeyecegimiz icin ctx.request.userId diyemeyiz. O yuzden bunu mutationun icinden godnermeliyiz.
          id: args.userId,
        },
      },
      info
    );
  },

  async addToCart(parent, args, ctx, info) {
    // make sure they are signed in
    const userId = ctx.request.userId;
    if (!userId) throw new Error("You must be signed in soon");
    // query the users current cart
    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id },
      },
    });

    // check if that item is already in their cart and increment by if it is
    if (existingCartItem) {
      console.log("This item is already in their cart");
      return await ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 },
        },
        info
      );
    }

    // if its not, create a fresh CartItem for that user
    return await ctx.db.mutation.createCartItem(
      {
        data: {
          user: { connect: { id: userId } },
          item: { connect: { id: args.id } },
        },
      },
      info
    );
  },

  async removeFromCart(parent, args, ctx, info) {
    // find the cart item
    // make sure we found an item
    const item = await ctx.db.query.cartItem(
      { where: { id: args.id } },
      `{ id, user { id } }`
    );
    if (!item) throw new Error("No cart item found!");
    // make sure they own that cart item
    if (item.user.id !== ctx.request.userId) {
      throw new Error("Cheatin huhhhhh!");
    }
    // delete that cart item
    return ctx.db.mutation.deleteCartItem({ where: { id: item.id } }, info);
  },

  async createOrder(parent, args, ctx, info) {
    // query the current user and make sure they are signed in
    const userId = ctx.request.userId;
    if (!userId) {
      throw new Error("You must be logged in to complete this order!");
    }
    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
        id
        name
        email
        cart 
        { 
          id 
          quantity 
          item {
            title
            price
            id
            description
            image
            largeImage
          }
          }
        }`
    );
    // recalculate the total for the price
    const amount = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.price * cartItem.quantity,
      0
    ); //0=> start with 0
    console.log(`Going to charge for a total of ${amount}`);

    // create the stripe charge (turn token into money $$$)
    const charge = await stripe.charges.create({
      amount,
      currency: "USD",
      source: args.token,
    });

    // convert the cartItems to OrderItems
    const orderItems = user.cart.map((cartItem) => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } },
      };

      delete orderItem.id;
      return orderItem;
    });

    // create the order
    const order = await ctx.db.mutation.createOrder({
      data: {
        total: charge.amount,
        charge: charge.id,
        // Burada prismadaki create sayesinde user.cart'daki tum siparisleri orderItems metoduyla calistirip create yapip order icindeki itemslara kaydedecek
        items: { create: orderItems },
        user: { connect: { id: userId } },
      },
    });
    // clean up - clear the users cart, delete cartItems
    //buradada carItemIds ile user in cart kismindaki itemlarin tum idleri alinir
    //ve daha sonra deleteManyCartItems ile cartItemIds icinde olan tum id ler databasede cartItems lar kismindan silniir.
    const cartItemIds = user.cart.map((cartItem) => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds,
      },
    });
    // return the order to client
    return order;
  },
};

module.exports = Mutations;
