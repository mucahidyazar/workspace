import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./details.scss";
import Content from "../../views/layouts/Content";
import Layout from "../../views/layouts/Layout";
import Navigation from "../../views/components/Navigations";

function Details({ match }) {
  const todoId = match.params.id;

  const [user, setUser] = useState(null);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchTodo = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${todoId}`
      );
      setTodo(data);
    };
    fetchTodo();
  }, [todoId]);

  useEffect(() => {
    if (todo !== null) {
      const fetchUser = async () => {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${todo.userId}`
        );
        setUser(data);
      };
      fetchUser();
    }
  }, [todo]);

  return (
    <Layout>
      <div className="details">
        <Content>
          {user !== null && (
            <section className="todoDetail">
              <div className="todoTop">
                <div className="todoAuthor">
                  <h2 className="authorName">Leanne Graham</h2>
                  <h3 className="authorCity">Gwenborough</h3>
                  <div className="authorDetail">
                    <div className="authorDetailItem">
                      <p>Username</p>
                      <p>{user.name}</p>
                    </div>
                    <div className="authorDetailItem">
                      <p>Email</p>
                      <p>{user.email}</p>
                    </div>
                    <div className="authorDetailItem">
                      <p>Phone</p>
                      <p>{user.phone}</p>
                    </div>
                    <div className="authorDetailItem">
                      <p>Website</p>
                      <a href={user.website}>{user.website}</a>
                    </div>
                    <div className="authorDetailItem">
                      <p>Company</p>
                      <p>{user.company.name}</p>
                    </div>
                  </div>
                </div>
                <div className="todoMap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6120.471422648843!2d32.805317!3d39.913741!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc2aa9871063f3e8!2sAkplaza!5e0!3m2!1str!2str!4v1599146964957!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="mapTitle"
                  ></iframe>
                </div>
              </div>
              <div className="todoBottom">
                <div className="todoBottomText">{todo.body}</div>
                <a href="https://www.google.com">Show More</a>
              </div>
            </section>
          )}
        </Content>
        <Navigation />
      </div>
    </Layout>
  );
}

export default withRouter(Details);
