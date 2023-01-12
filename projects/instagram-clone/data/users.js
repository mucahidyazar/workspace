/* eslint-disable prettier/prettier */
export default [
  {
    id: 1,
    username: "mucahidyazar",
    email: "mucahidyazar@gmail.com",
    dialCode: "+90",
    phone: "5534088244",
    fullName: "Mucahid Yazar",
    birthday: "31-10-1991",
    age: 28,
    countryCode: "TR",
    countryName: "Turkey",
    savePassword: true,
    private: true,
    profilePhoto: require('../assets/images/profile/1/1.jpg'),
    album: [
      require('../assets/images/profile/1/1.jpg'),
      require('../assets/images/profile/1/2.jpg'),
      require('../assets/images/profile/1/3.jpg'),
    ],
    followers: [
      {
        id: 2, //the user id who follow you
        followDate: new Date(2018, 11, 24, 10, 33, 30),
      },
    ],
    following: [
      {
        id: 1, //the user id who you follow
        followDate: new Date(2018, 11, 24, 10, 33, 30),
      },
    ],
    posts: [
      {
        id: 1,
        postImageUrl: require('../assets/images/profile/1/1.jpg'),
        postDate: new Date(2018, 11, 24, 10, 33, 30),
        likes: [
          {
            userId: 1,
            date: new Date(2018, 11, 25, 10, 33, 30),
          }
        ]
      },
      {
        id: 2,
        postImageUrl: require('../assets/images/profile/1/2.jpg'),
        postDate: new Date(2018, 12, 24, 15, 33, 30),
        likes: [
          {
            userId: 2,
            date: new Date(2018, 12, 24, 18, 53, 30),
          }
        ]
      },
      {
        id: 3,
        postImageUrl: require('../assets/images/profile/1/3.jpg'),
        postDate: new Date(2019, 1, 24, 1, 30, 30),
        likes: [
          {
            userId: 2,
            date: new Date(2020, 1, 1, 5, 58, 30),
          }
        ]
      },
    ],
    tagPosts: [],
    savedPosts: [],
  },
  {
    id: 2,
    username: "bayramyazar",
    email: "bayramyazar@gmail.com",
    dialCode: "+90",
    phone: "5316277371",
    fullName: "Bayram Yazar",
    birthday: "31-10-1961",
    age: 58,
    countryCode: "TR",
    countryName: "Turkey",
    savePassword: true,
    private: false,
    profilePhoto: require('../assets/images/profile/1/4.jpg'),
    album: [
      require('../assets/images/profile/1/4.jpg'),
      require('../assets/images/profile/1/5.jpg'),
      require('../assets/images/profile/1/6.jpg'),
    ],
    followers: [
      {
        id: 1, //the user id who follow you
        followDate: new Date(2018, 11, 24, 10, 33, 30),
      },
    ],
    following: [
      {
        id: 2, //the user id who you follow
        followDate: new Date(2018, 11, 24, 10, 33, 30),
      },
    ],
    posts: [
      {
        id: 1,
        postImageUrl: require('../assets/images/profile/1/4.jpg'),
        postDate: new Date(2018, 11, 24, 10, 33, 30),
        likes: [
          {
            userId: 1,
            date: new Date(2018, 11, 25, 10, 33, 30),
          }
        ]
      },
      {
        id: 2,
        postImageUrl: require('../assets/images/profile/1/5.jpg'),
        postDate: new Date(2018, 12, 24, 15, 33, 30),
        likes: [
          {
            userId: 2,
            date: new Date(2018, 12, 24, 18, 53, 30),
          }
        ]
      },
      {
        id: 3,
        postImageUrl: require('../assets/images/profile/1/6.jpg'),
        postDate: new Date(2019, 1, 24, 1, 30, 30),
        likes: [
          {
            userId: 2,
            date: new Date(2020, 1, 1, 5, 58, 30),
          }
        ]
      },
    ],
    tagPosts: [],
    savedPosts: [],
  },
];