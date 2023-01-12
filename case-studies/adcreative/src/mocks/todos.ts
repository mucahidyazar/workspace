export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  date: string;
}

export const todos: ITodo[] = [
  { id: '0001', title: 'Todo 1', completed: true, date: '2020-12-01' },
  {
    id: '0002',
    title: 'Todo 2',
    completed: false,
    date: '2020-11-02'
  },
  { id: '0003', title: 'Todo 3', completed: true, date: '2020-10-03' },
  { id: '0004', title: 'Todo 4', completed: false, date: '2020-09-04' }
];
