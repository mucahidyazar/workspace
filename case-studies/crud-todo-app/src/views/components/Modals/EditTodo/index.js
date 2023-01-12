import React, { useState } from "react";
import axios from "axios";
import "./styles.scss";
import Button from "../../Button";
import Case from "../Case";

function EditTodo({ todo, setShowModal }) {
  const [data, setData] = useState({
    title: todo.title,
    body: todo.body,
  });

  const [statue, setStatue] = useState(null);

  const handlerUpdate = async () => {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${todo.id}`,
      data
    );
    if (response.status === 200) {
      setStatue("Guncelleme islemi basarili bir sekilde gerceklesti!");
    }
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="edit">
      <div className="editHeader">
        <p>Duzenle</p>
        <button onClick={() => setShowModal(null)}>x</button>
      </div>
      <div className="editBody">
        <div className="editBodyTitle">
          <p>Title</p>
          <input
            name="title"
            type="text"
            placeholder={data.title}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="editBodyBody">
          <p>Body</p>
          <textarea
            type="text"
            name="body"
            placeholder={data.body}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </div>
      <div className="editButtons">
        <Button type="primary" onClick={handlerUpdate}>
          Guncelle
        </Button>
      </div>
      {statue !== null && <Case yes={setShowModal}>{statue}</Case>}
    </section>
  );
}

export default EditTodo;
