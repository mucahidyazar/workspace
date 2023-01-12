import React, { useState } from "react";
import axios from "axios";
import "./todoItem.scss";
import Button from "../Button";
import { Link } from "react-router-dom";
import Case from "../Modals/Case";

function TodoItem({ todo, handlerEdit }) {
  const [statue, setStatue] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);

  const handlerDelete = () => {
    setDeleteModal(true);
  };

  const handlerDeleteNo = () => {
    setDeleteModal(false);
    setStatue(null);
  };

  const deleteTodo = async () => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${todo.id}`
    );
    if (response.status === 200) {
      setStatue("Todo basarili bir sekilde silindi!");
    }
    setDeleteModal(false);
  };

  return (
    <div className="todo">
      <div className="todoContent">
        <p className="todoOrder">{todo.id}</p>
        <p className="todoText">{todo.title}</p>
      </div>
      <div className="todoButtons">
        <Button type="primary">
          <Link to={`/details/${todo.id}`}>Details</Link>
        </Button>
        <Button type="success" onClick={() => handlerEdit(todo)}>
          Edit
        </Button>
        <Button type="danger" onClick={handlerDelete}>
          Delete
        </Button>
      </div>
      {deleteModal && (
        <Case yes={deleteTodo} no={handlerDeleteNo}>
          Are you sure to delete this todo?
        </Case>
      )}
      {statue && <Case yes={handlerDeleteNo}>{statue}</Case>}
    </div>
  );
}

export default TodoItem;
