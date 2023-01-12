const resolvers = {
  Query: {
    async products(parent, args, ctx, info) {
      return await ctx.prisma.products();
    },
    async categories(parent, args, ctx, info) {
      return (ctx.categories = await ctx.prisma.categories());
    },
    async categoryByName(parent, args, ctx, info) {
      const isCategoryExists = await ctx.prisma.$exists.category({
        name: args.name,
      });

      if (!isCategoryExists) {
        throw new Error("Category not found");
      }

      return (category = await ctx.prisma.category({ name: args.name }));
    },
    async productsByCategory(parent, args, ctx, info) {
      const isCategoryExists = await ctx.prisma.$exists.category({
        id: args.categoryId,
      });

      if (!isCategoryExists) {
        throw new Error("Category not found");
      }

      const products = await ctx.prisma
        .category({ id: args.categoryId })
        .products();
      return products;
    },
  },
  Mutation: {
    async createProduct(parent, args, ctx, info) {
      const category = ctx.prisma.$exists.category({ id: args.categoryId });

      if (!category) {
        throw new Error("Category not found");
      }

      const product = await ctx.prisma.createProduct({
        name: args.name,
        price: args.price,
        isStock: args.isStock,
        category: {
          connect: {
            id: args.categoryId,
          },
        },
      });

      return product;
    },

    async createCategory(parent, args, ctx, info) {
      const category = await ctx.prisma.createCategory({
        name: args.name,
      });
      return category;
    },
  },
  Product: {
    category(parent, args, ctx, info) {
      //category--> product.category
      return ctx.prisma.product({ id: parent.id }).category();
    },
  },
  Category: {
    products(parent, args, ctx, info) {
      return ctx.prisma.category({ id: parent.id }).products();
    },
  },
};

module.exports = resolvers;
