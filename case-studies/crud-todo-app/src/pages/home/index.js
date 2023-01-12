import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.scss";
import Content from "../../views/layouts/Content";
import TodoItem from "../../views/components/TodoItem";
import Layout from "../../views/layouts/Layout";
import Navigation from "../../views/components/Navigations";
import EditTodo from "../../views/components/Modals/EditTodo";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const handlerEdit = (todo) => {
    setShowModal(todo);
  };

  const [showModal, setShowModal] = useState(null);

  return (
    <Layout>
      <div className="home">
        <Content>
          <section className="todos">
            {todos &&
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} handlerEdit={handlerEdit} />
              ))}
          </section>
          {showModal !== null && (
            <EditTodo todo={showModal} setShowModal={setShowModal} />
          )}
        </Content>
        <Navigation />
      </div>
    </Layout>
  );
};

export default Home;
