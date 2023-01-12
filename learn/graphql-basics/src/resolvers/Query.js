export default {
  users: (parent, args, { db }, info) => {
    if(!args.query) {
      return db.users;
    }
    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase())
    })
  },
  posts: (parent, args, { db }, info) => {
    if(!args.query) {
      return db.posts;
    }

    return db.posts.filter(post => {
      const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
      const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
    })
  },
  comments: (parent, args, { db }, info) => {
    return db.comments
  },
  me: () => ({
    id: 'abc123',
    name: 'Mucahid Yazar',
    email: 'mucahidyazar@gmail.com',
    age: 28
  }),
  post: () => ({
    id: '000001',
    title: 'GraphQL 101',
    body: '',
    published: false,
  })
}