import uuidv4 from 'uuid/v4';

const Mutation = {
  createUser: (parent, args, { db }, info) => {
    const emailTaken = db.users.some(user => user.email === args.data.email);
    if(emailTaken) {
      throw new Error('Email taken');
    };
    const user = {
      id: uuidv4(),
      ...args.data
    };
    db.users.push(user);
    return user;
  },
  deleteUser:(parent, args, { db }, info) => {
    //findIndex ile eslesme olursa pozitif bir sayi olarak indexlerden birisi olacak
    //findIndex ile eslesme olmazsa negatif 1 olacak
    const userIndex = db.users.findIndex((user) => user.id === args.id);
    if(userIndex === -1) {
      throw new Error('User not found');
    }
    //SPLICE
    //Ilk argument silmeye baslamak istediginiz index sirasi,
    //Ikinci argument kac tane silmek istediginiz.
    const deletedUsers = db.users.splice(userIndex, 1);
    
    //Ve burada biz userla baglantili post ve commentsleride silmemiz lazim. Cunku onlarla birlikte donen nullable User! custom typelar oldugu icin commentleri ve postlari alirken hata alabiliriz.
    //Deleting Posts of the USER and users' comments of posts
    posts = db.posts.filter(post => {
      const match = post.author === args.id;
      if(match) {
        comments = db.comments.filter(comment => comment.post !== post.id)
      }
      return !match;
    });
    //Deleting comments of the deleting user
    comments = db.comments.filter(comment => comment.author !== args.id);

    return deletedUsers[0];
  },
  updateUser:(parent, args, { db }, info) => {
    const { id, data } = args;
    const user = db.users.find(user => user.id === id);
    if(!user) {
      throw new Error('User not found');
    }
    if(typeof data.email === 'string') {
      const emailTaken = db.users.some(user => user.email === data.email);
      if(emailTaken) {
        throw new Error('Email taken');
      };
      user.email = data.email
    }
    if(typeof data.name === 'string') {
      user.name = data.name
    }
    if(typeof data.age !== 'undefined') {
      user.age = data.age
    }
    return user;
  },
  createPost:(parent, args, { db, pubsub }, info) => {
    const userExists = db.users.some(user => user.id === args.data.author);
    if(!userExists) {
      throw new Error('User not found!');
    };
    const post = {
      id: uuidv4(),
      ...args.data
    };
    db.posts.push(post);
    if(args.data.published) {
      pubsub.publish('post', {
        post: {
          //MUTATION kisminda yazan CREATED yaygin kullanim sekli buyuk harfle yazilmasi
          //isterseniz istediginiz ismi yapacaginiz isleme gore buyuk veya kucuk harfle yazabilirsiniz.
          //Peki niye post: post degil de post objeye esitleniyor. esitlendigi { mutation, data } aslinda schema.graphqlde post subscriptionunun donmesini istedigimiz type in gerekliligidir. Oradan kontrol edebilirsiniz.
          mutation: 'CREATED',
          data: post
        }
      });
    }
    return post;
  },
  deletePost: (parent, args, { db, pubsub }, info) => {
    const postIndex = db.posts.findIndex(post => post.id === args.id);
    if(postIndex === -1) {
      throw new Error("Post not found");
    }
    //Onceden adi deletedPost du
    //Bir array oldugunu bildigimiz icin, icindekileri [] acip sirasiyla isimlendirebilirdik
    //Icindede 1 tane item oldugunu bildigimizden asagidaki gibi post oalrak isimlendirdik.
    const [post] = db.posts.splice(postIndex, 1);
    
    db.comments = db.comments.filter(comment => comment.post !== args.id);

    if(post.published) {
      pubsub.publish('post', {
        post: {
          mutation: 'DELETED',
          data: post
        }
      });
      console.log('Deneme');
      console.log(post);
    };

    return post;
  },
  updatePost: (parent, args, { db, pubsub }, info) => {
    const { id, data } = args;
    const post = db.posts.find(post => post.id === id);
    const originalPost = { ...post };
    if(!post) {
      throw new Error('Post not found');
    }
    if(typeof data.title === "string") {
      post.title = data.title;
    }
    if(typeof data.body === "string") {
      post.body = data.body;
    }
    if(typeof data.published === "boolean") {
      post.published = data.published;
      if(originalPost.published && !post.published) {
        // deleted
        pubsub.publish('post', {
          post: {
            mutation: 'DELETED',
            data: originalPost
          }
        });
      } else if(!originalPost.published && post.published) {
        // created
        pubsub.publish('post', {
          post: {
            mutation: 'CREATED',
            data: post
          }
        });
      }
    } else if(post.published) {
      //updated
        pubsub.publish('post', {
          post: {
            mutation: 'UPDATED',
            data: post
          }
        });
    }
    return post;
  },
  createComment:(parent, args, { db, pubsub }, info) => {
    const userExist = db.users.some(user => user.id === args.data.author);
    const postExist = db.posts.some(post => post.id === args.data.post);
    const postPublished = db.posts.some(post => post.published === true);
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
    db.comments.push(comment);
    pubsub.publish(`comment ${args.data.post}`, {
      comment: {
        mutation: "CREATED",
        data: comment
      }
    });
    return comment;
  },
  deleteComment: (parent, args, { db, pubsub }, info) => {
    const commentIndex = db.comments.findIndex(comment => comment.id === args.id);
    if(commentIndex === -1) {
      throw new Error('Comment not found');
    }
    const deletedComment = db.comments.splice(commentIndex, 1);
    pubsub.publish(`comment ${deletedComment[0].post}`, {
      comment: {
        mutation: 'DELETED',
        data: deletedComment[0]
      }
    });
    return deletedComment[0];
  },
  updateComment: (parent, { id, data }, { db, pubsub }, info) => {
    const comment = db.comments.find(comment => comment.id === id);
    if(!comment) {
      throw new Error('Comment not found');
    };
    comment.text = data.text;
    pubsub.publish(`comment ${comment.post}`, {
      comment: {
        mutation: 'UPDATED',
        data: comment
      }
    });
    return comment;
  }
};

export default Mutation;