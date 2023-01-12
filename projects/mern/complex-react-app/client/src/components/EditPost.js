import React, { useState, useEffect, useReducer, useContext } from "react";
import Page from "./Page";
import axios from "axios";
import { useParams, Link, Redirect } from "react-router-dom";
import LoadingDotIcon from "./LoadingDotIcon";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";
import NotFound from "./NotFound";

export default function EditPost() {
  const { user } = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const initialState = {
    title: {
      value: "",
      hasErrors: false,
      message: "",
    },
    body: {
      value: "",
      hasErrors: false,
      message: "",
    },
    isFetching: true,
    isSaving: false,
    id: useParams().id,
    sendCount: 0,
    notFound: false,
    permissionProblem: false,
  };

  function OurReducer(state, action) {
    switch (action.type) {
      case "fetchComplete":
        if (user.username !== action.value.author.username) {
          return {
            ...state,
            permissionProblem: true,
          };
        } else {
          return {
            ...state,
            title: {
              ...state.title,
              value: action.value.title,
            },
            body: {
              ...state.body,
              value: action.value.body,
            },
            isFetching: false,
          };
        }
      case "titleChange":
        return {
          ...state,
          title: {
            ...state.title,
            hasErrors: false,
            value: action.value,
          },
        };
      case "bodyChange":
        return {
          ...state,
          body: {
            ...state.body,
            hasErrors: false,
            value: action.value,
          },
        };
      case "submitRequest":
        console.log("a");
        if (!state.title.hasErrors || !state.body.hasErrors) {
          return {
            ...state,
            sendCount: state.sendCount + 1,
          };
        } else {
          appDispatch({
            type: "flashMessage",
            value: "Please fill all the areas!",
          });
        }
      case "saveRequestStarted":
        return {
          ...state,
          isSaving: true,
        };
      case "saveRequestFnished":
        return {
          ...state,
          isSaving: false,
        };
      case "titleRules":
        console.log(!action.value.trim());
        if (!action.value.trim()) {
          return {
            ...state,
            title: {
              ...state.title,
              hasErrors: true,
              message: "You must provide a title.",
            },
          };
        }
      case "bodyRules":
        console.log(!action.value.trim());
        if (!action.value.trim()) {
          return {
            ...state,
            body: {
              ...state.body,
              hasErrors: true,
              message: "You must provide a body.",
            },
          };
        }
      case "notFound":
        return {
          ...state,
          notFound: true,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(OurReducer, initialState);

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: "titleRules", value: state.title.value });
    dispatch({ type: "bodyRules", value: state.body.value });
    dispatch({ type: "submitRequest" });
  }

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${state.id}`, {
          cancelToken: ourRequest.token,
        });
        if (response.data) {
          dispatch({ type: "fetchComplete", value: response.data });
        } else {
          dispatch({ tpye: "notFound" });
        }
      } catch (error) {
        console.log("There was a problem!");
        console.log(error.message);
      }
    }
    fetchPost();

    return () => {
      ourRequest.cancel();
    };
  }, []);

  useEffect(() => {
    if (state.sendCount > 0) {
      dispatch({ type: "saveRequestStarted" });
      const ourRequest = axios.CancelToken.source();

      async function fetchPost() {
        try {
          const response = await axios.post(
            `/post/${state.id}/edit`,
            {
              title: state.title.value,
              body: state.body.value,
              token: user.token,
            },
            {
              cancelToken: ourRequest.token,
            }
          );
          dispatch({ type: "saveRequestFnished" });
          appDispatch({ type: "flashMessage", value: "Post was updated!" });
        } catch (error) {
          console.log("There was a problem!");
          console.log(error.message);
        }
      }
      fetchPost();

      return () => {
        ourRequest.cancel();
      };
    }
  }, [state.sendCount]);

  if (state.notFound) {
    return <NotFound />;
  }

  if (state.permissionProblem) {
    appDispatch({
      type: "flashMessage",
      value: "You do not have permission to edit that post!",
    });
    return <Redirect to="/" />;
  }

  if (state.isFetching) {
    return (
      <Page title="...">
        <LoadingDotIcon />
      </Page>
    );
  }

  return (
    <Page title="Edit Post">
      <Link to={`/post/${state.id}`} className="small font-weight-bold">
        &laquo; Back to post permalink
      </Link>
      <form onSubmit={submitHandler} className="mt-2">
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
            value={state.title.value}
            onChange={(e) =>
              dispatch({ type: "titleChange", value: e.target.value })
            }
            onBlur={(e) =>
              dispatch({ type: "titleRules", value: e.target.value })
            }
          />
          {state.title.hasErrors && (
            <div className="alert alert-danger small liveValidateMessage">
              {state.title.message}
            </div>
          )}
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
            value={state.body.value}
            onChange={(e) =>
              dispatch({ type: "bodyChange", value: e.target.value })
            }
            onBlur={(e) =>
              dispatch({ type: "bodyRules", value: e.target.value })
            }
          />
          {state.body.hasErrors && (
            <div className="alert alert-danger small liveValidateMessage">
              {state.body.message}
            </div>
          )}
        </div>

        <button className="btn btn-primary" disabled={state.isSaving}>
          Save Updates
        </button>
      </form>
    </Page>
  );
}
