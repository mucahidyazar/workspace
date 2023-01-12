const { forwardTo } = require("prisma-binding");
const { hasPermission } = require("../utils");
const { request } = require("../db");

const Query = {
  items: forwardTo("db"),
  item: forwardTo("db"),
  itemsConnection: forwardTo("db"),
  // async items(parent, args, ctx, info) {
  //   // ctx.db.query generated deki prisma.graphql icindeki Query'dan geliyor.
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
  me: (parent, args, ctx, info) => {
    // check if there is a current user ID
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId,
        },
      },
      info
    );
  },

  async users(parent, args, ctx, info) {
    // check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in");
    }

    // check if the user has the permissions to query all the users
    hasPermission(ctx.request.user, ["ADMIN", "PERMISSIONUPDATE"]);

    // if they do, query all  the users
    return ctx.db.query.users({}, info);
  },

  async order(parent, args, ctx, info) {
    // make sure they are logged in
    if (!ctx.request.userId) {
      throw new Error("You are'nt logged in");
    }
    // query the current order
    const order = await ctx.db.query.order(
      {
        where: { id: args.id },
      },
      info
    );
    // check if the have permissions to see this order
    const ownsOrder = order.user.id === ctx.request.userId;
    const hasPermissionToSeeOrder = ctx.request.user.permissions.includes(
      "ADMIN"
    );
    if (!ownsOrder || !hasPermission) {
      throw new Error("You can't see this budd");
    }
    // return the order
    return order;
  },

  async orders(parent, args, ctx, info) {
    // make sure they are logged in
    const userId = await ctx.request.userId;
    if (!userId) {
      throw new Error("You are'nt logged in");
    }
    //
    return ctx.db.query.orders(
      {
        where: {
          user: {
            id: userId,
          },
        },
      },
      info
    );
  },
};

module.exports = Query;
