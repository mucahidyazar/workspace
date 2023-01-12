import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it fnished? ${completed}
    `);

    logTodo(id, title, completed);
  })
  .catch(err => {
    const error = err.message;
    console.log(error);
  });

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it fnished? ${completed}
    `);
};
