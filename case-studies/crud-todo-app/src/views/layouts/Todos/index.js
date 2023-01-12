import React, { useEffect, useState } from "react";
import "./todos.scss";
import axios from "axios";
import TodoItem from "../../components/TodoItem";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <section className="todos">
      {todos && todos.map((todo) => <TodoItem key={todos.id} todo={todo} />)}
    </section>
  );
}

export default Todos;
