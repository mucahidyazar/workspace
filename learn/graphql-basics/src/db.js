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
    published: true,
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
    post: '11'
  },
  {
    id: '105',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    author: '3',
    post: '13'
  }
]

const db = {
  users,
  posts,
  comments
}

export { db as default }