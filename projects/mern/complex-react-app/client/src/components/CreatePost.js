import React, { useState, useContext } from "react";
import Page from "./Page";
import axios from "axios";
import { Redirect } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

export default function CreatePost() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [wasSuccessful, setWasSuccessful] = useState(false);
  const dispatch = useContext(DispatchContext);
  const { user } = useContext(StateContext);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/create-post", {
        title,
        body,
        token: user.token,
      });
      console.log("New post was created!");
      setWasSuccessful(response.data);
    } catch (error) {
      console.log("There was a problem!");
      console.log(error.message);
    }
  }

  if (wasSuccessful) {
    dispatch({
      type: "flashMessage",
      value: "Congrats, you created a new post.",
    });
    return <Redirect to={`/post/${wasSuccessful}`} />;
  }

  return (
    <Page title="Create New Post">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
            onChange={(e) => setBody(e.currentTarget.value)}
          ></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>
    </Page>
  );
}
