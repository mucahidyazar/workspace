const Subscription = {
  comment: {
    subscribe: (parent, { postId }, { db, pubsub }, info) => {
      const post = db.posts.find(post => post.id === postId && post.published);
      if(!post) {
        throw new Error('Post not found');
      };
      return pubsub.asyncIterator(`comment ${postId}`); //"comment 44" Dynamic comment channel olusturmak icin
      //Artik tek yapmamiz gereken dogru zamanda publish etmek. Comment icin publish etmek icin en iyi zaman ve yer mutation daki commentin olusturuldugu zamandir.
    }
  },
  post: {
    subscribe: (parent, args, { pubsub }, info) => {
      return pubsub.asyncIterator('post');
    }
  }
}

export default Subscription;