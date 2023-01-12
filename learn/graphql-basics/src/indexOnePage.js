import { GraphQLServer } from 'graphql-yoga';
import uuidv4 from 'uuid/v4';

//DummyUserData
let users = [
  {
    id: '1',
    name: 'Mucahid',
    email: 'mucahidyazar@gmail.com',
    age: 28
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@gmail.com',
    age: 20
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@gmail.com',
    age: 45
  },
]

//DummyPostData
let posts = [
  {
    id: '11',
    title: 'Javascript',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo qui iste a quam eveniet pariatur!',
    published: false,
    author: '1'
  },
  {
    id: '12',
    title: 'HTML',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo qui iste a quam eveniet pariatur!',
    published: true,
    author: '1'
  },
  {
    id: '13',
    title: 'CSS',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo qui iste a quam eveniet pariatur!',
    published: true,
    author: '2'
  }
]

//DummyCommentData
let comments = [
  {
    id: '102',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: '1',
    post: '11'
  },
  {
    id: '103',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: '2',
    post: '11'
  },
  {
    id: '104',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: '2',
    post: '12'
  },
  {
    id: '105',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: '3',
    post: '13'
  }
]


// Type definitions (schema)
// Custom type lar CreateUserInput gibi createUser gibi argument olarak referans edilemezler cunku inputTypelar sadece SCALAR TYPES lar olabilir.
// InputTypeslar herhangi bir isim yazilarak data gibi sonrada : isaretini koyduktan sonra kullanilirlar.
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments: [Comment!]!
    me: User!
    post: Post!
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!,
    deleteUser(id: ID!): User!,
    createPost(data: CreatePostInput!): Post!,
    deletePost(id: ID!): Post!,
    createComment(data: CreateCommentInput!): Comment!,
    deleteComment(id: ID!): Comment!
  }

  input CreateUserInput {
    name: String!,
    email: String!,
    age: Int
  }

  input CreatePostInput {
    title: String!,
    body: String!,
    published: Boolean!,
    author: ID!
  }

  input CreateCommentInput {
    text: String!,
    author: ID!,
    post: ID!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }
`

// Resolvers
const resolvers = {
  Query: {
    users: (parent, args, ctx, info) => {
      if(!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase())
      })
    },
    posts: (parent, args, ctx, info) => {
      if(!args.query) {
        return posts;
      }

      return posts.filter(post => {
        const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase());
        const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      })
    },
    comments: (parent, args, ctx, info) => {
      return comments
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
  },

  Mutation: {
    createUser: (parent, args, ctx, info) => {
      const emailTaken = users.some(user => user.email === args.data.email);
      if(emailTaken) {
        throw new Error('Email taken');
      };
      const user = {
        id: uuidv4(),
        ...args.data
      };
      users.push(user);
      return user;
    },
    deleteUser:(parent, args, ctx, info) => {
      //findIndex ile eslesme olursa pozitif bir sayi olarak indexlerden birisi olacak
      //findIndex ile eslesme olmazsa negatif 1 olacak
      const userIndex = users.findIndex((user) => user.id === args.id);
      if(userIndex === -1) {
        throw new Error('User not found');
      }
      //SPLICE
      //Ilk argument silmeye baslamak istediginiz index sirasi,
      //Ikinci argument kac tane silmek istediginiz.
      const deletedUsers = users.splice(userIndex, 1);
      
      //Ve burada biz userla baglantili post ve commentsleride silmemiz lazim. Cunku onlarla birlikte donen nullable User! custom typelar oldugu icin commentleri ve postlari alirken hata alabiliriz.
      //Deleting Posts of the USER and users' comments of posts
      posts = posts.filter(post => {
        const match = post.author === args.id;
        if(match) {
          comments = comments.filter(comment => comment.post !== post.id)
        }
        return !match;
      });
      //Deleting comments of the deleting user
      comments = comments.filter(comment => comment.author !== args.id);

      return deletedUsers[0];
    },
    createPost:(parent, args, ctx, info) => {
      const userExists = users.some(user => user.id === args.data.author);
      if(!userExists) {
        throw new Error('User not found!');
      };
      const post = {
        id: uuidv4(),
        ...args.data
      };
      posts.push(post);
      return post;
    },
    deletePost: (parent, args, ctx, info) => {
      const postIndex = posts.findIndex(post => post.id === args.id);
      if(postIndex === -1) {
        throw new Error("Post not found");
      }
      const deletedPost = posts.splice(postIndex, 1);
      
      posts = posts.filter(post => {
        const match = post.id === args.id;
        if(match) {
          comments = comments.filter(comment => comment.post !== args.id)
        }
        return !match;
      });
      comments = comments.filter(comment => comment.post !== args.id);
      return deletedPost[0];
    },
    createComment:(parent, args, ctx, info) => {
      const userExist = users.some(user => user.id === args.data.author);
      const postExist = posts.some(post => post.id === args.data.post);
      const postPublished = posts.some(post => post.published === true);
      if(!userExist){
        throw new Error('User not found');
      } else if(!postExist) {
        throw new Error('Post not found');
      } else if(!postPublished) {
        throw new Error('Post not published');
      };
      const comment = {
        id: uuidv4(),
        ...args.data
      };
      comments.push(comment);
      return comment;
    },
    deleteComment: (parent, args, ctx, info) => {
      const commentIndex = comments.findIndex(comment => comment.id === args.id);
      if(commentIndex === -1) {
        throw new Error('Comment not found');
      }
      const deletedComment = comments.splice(commentIndex, 1);
      return deletedComment[0];
    }
  },

  //Eger alanlarimizdan birisi yukaridaki gibi SCALAR type degilse CUSTOM TYPE icinde bu alanlarimizi belirlememiz lazim.
  //Yani author mesela bir obje donecegi icin bize asagidaki gibi Custom type tanimlanip icinde donecek ama id title body ise string yani scalar type dondugu icin yukarida tanimlanabilir.
  //Aslinda author posts FIIELDS inin icinde yukarida fakat orada bulamayinca buraya gelecek ve buraya geldiginde her bir post sirasiyla gelecek.
  //Ve buradaki parent herbir post'un sirasiyla yerini alacak. ve partent ile asagidaki gibi post.author post.id post.body. post.title post.published gibi yerlerini alabilir olacagiz.
  Post: {
    author: (parent, args, ctx, info) => {
      return users.find(user => {
        return user.id === parent.author
      })
    },
    comments: (parent, args, ctx, info) => comments.filter(comment => comment.post === parent.id)
  },

  User: {
    posts: (parent, args, ctx, info) => posts.filter(post => post.author === parent.id),
    comments: (parent, args, ctx, info) => comments.filter(comment => comment.author === parent.id)
  },

  Comment: {
    author: (parent, args, ctx, info) => users.find(user => user.id === parent.author),
    post: (parent, args, ctx, info) => posts.find(post => post.id === parent.post)
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is up!');
});