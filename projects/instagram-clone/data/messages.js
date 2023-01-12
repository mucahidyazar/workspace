/* eslint-disable prettier/prettier */
export default [
  {
    id: 1,
    from: 1,
    to: 2,
    isRequest: true,
    messages: [
      // userId: 1 => User yourselft
      // userId: 2 => The other person that you sent message
      {
        userId: 2,
        message: 'Hey',
        date: 5,
      }
    ],
  },
  {
    id: 2,
    from: 1,
    to: 2,
    isRequest: false,
    messages: [
      {
        userId: 2,
        message: 'Hey',
        date: 5,
      },
      {
        userId: 1,
        message: 'Hey',
        date: 5,
      },
      {
        userId: 2,
        message: 'Whats up????',
        date: 5,
      },
    ],
  },
  {
    id: 3,
    from: 2,
    to: 1,
    isRequest: false,
    messages: [
      {
        userId: 1,
        message: 'Hey',
        date: 5,
      },
      {
        userId: 2,
        message: 'Hey',
        date: 5,
      },
      {
        userId: 1,
        message: 'Whats up????',
        date: 5,
      },
      {
        userId: 2,
        message: 'Good',
        date: 5,
      },
      {
        userId: 2,
        message: 'Whats about you?',
        date: 5,
      },
    ],
  },
  {
    id: 3,
    from: 2,
    to: 1,
    isRequest: true,
    messages: [
      {
        userId: 1,
        message: 'Hey',
        date: 5,
      },
      {
        userId: 1,
        message: 'Whats up????',
        date: 1,
      },
    ],
  },
];