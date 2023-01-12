export const templates = [
  {
    id: 1,
    type: 'template',
    name: 'Site Reliability',
    background: '/static/assets/img/background-1.jpg',
  },
  {
    id: 2,
    type: 'template',
    name: 'Kanban Template',
    background: '/static/assets/img/background-2.jpg',
  },
  {
    id: 3,
    type: 'template',
    name: 'Agile Sprint Board',
    background: '/static/assets/img/background-3.jpg',
  },
  {
    id: 4,
    type: 'template',
    name: 'Sprint Retrospectives',
    background: '/static/assets/img/background-4.jpg',
  },
  {
    id: 5,
    type: 'template',
    name: 'Simple Project Board',
    background: '/static/assets/img/background-5.jpg',
  },
  {
    id: 6,
    type: 'template',
    name: 'Remote Team Hub',
    background: '/static/assets/img/background-6.jpg',
  },
]

export const recentlyViewed = [
  {
    id: 7,
    type: 'personal',
    name: 'Design',
    background: '/static/assets/img/background-7.jpg',
  },
  {
    id: 2,
    type: 'template',
    name: 'Kanban Template',
    background: '/static/assets/img/background-2.jpg',
  },
  {
    id: 3,
    type: 'template',
    name: 'Agile Sprint Board',
    background: '/static/assets/img/background-3.jpg',
  },
  {
    id: 8,
    type: 'personal',
    name: 'UI/UX Assets - Roadmap',
    background: '/static/assets/img/background-8.jpg',
  },
  {
    id: 5,
    type: 'template',
    name: 'Simple Project Board',
    background: '/static/assets/img/background-5.jpg',
  },
  {
    id: 9,
    type: 'personal',
    name: 'Remote Team Hub',
    background: '/static/assets/img/background-9.jpg',
  },
]

export const personal = [
  {
    id: 1,
    type: 'personal',
    name: 'Web Development',
    background: '/static/assets/img/background-1.jpg',
    lists: [
      {
        id: 1,
        name: 'todo',
        notes: [
          {
            id: 1,
            title: 'Wash the dishes',
            description: 'You need to wash the dishes before tomorrow night',
          },
          {
            id: 2,
            title: 'Go to swim',
            description: 'You need to wash the dishes before tomorrow night',
          },
        ],
      },
      {
        id: 2,
        name: 'doing',
        notes: [
          {
            id: 3,
            title: 'Go to take the car',
            description: 'You need to wash the dishes before tomorrow night',
          },
        ],
      },
      {
        id: 3,
        name: 'done',
        notes: [],
      },
    ],
  },
  {
    id: 11,
    type: 'personal',
    name: 'Design',
    background: '/static/assets/img/background-4.jpg',
    lists: [],
  },
  {
    id: 12,
    type: 'personal',
    name: 'Photoshop',
    background: '/static/assets/img/background-6.jpg',
    lists: [],
  },
]

export const backgrounds = [
  {
    id: 1,
    type: 'image',
    background: '/static/assets/img/background-1.jpg',
  },
  {
    id: 2,
    type: 'image',
    background: '/static/assets/img/background-2.jpg',
  },
  {
    id: 3,
    type: 'image',
    background: '/static/assets/img/background-3.jpg',
  },
  {
    id: 4,
    type: 'image',
    background: '/static/assets/img/background-4.jpg',
  },
  {
    id: 5,
    type: 'image',
    background: '/static/assets/img/background-5.jpg',
  },
  {
    id: 6,
    type: 'linear',
    background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
  },
  {
    id: 7,
    type: 'linear',
    background: 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)',
  },
  {
    id: 8,
    type: 'linear',
    background: 'linear-gradient(to right, #ad5389, #3c1053)',
  },
  {
    id: 9,
    type: 'linear',
    background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
  },
]

export const boards = [
  {
    tasks: {
      'task-1': {
        id: 'task-1',
        content: 'Take out the garbage',
        description: 'You need to take out the garbage',
      },
      'task-2': {
        id: 'task-2',
        content: 'Watch my favorite show',
        description: 'You need to wath that TV show before you sleep',
      },
      'task-3': {
        id: 'task-3',
        content: 'Charge my phone',
        description: 'Charge before you go out',
      },
      'task-4': {
        id: 'task-4',
        content: 'Cook dinner',
        description: 'Or get a order',
      },
    },
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      },
      'list-2': {
        id: 'list-2',
        title: 'Doing',
        taskIds: [],
      },
      'list-3': {
        id: 'list-3',
        title: 'Done',
        taskIds: [],
      },
    },
    listOrder: ['list-1', 'list-2', 'list-3'],
  },
]
