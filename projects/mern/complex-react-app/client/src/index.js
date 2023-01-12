import React, { useState, useReducer, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./index.css";

// My Components
import About from "./components/About";
//import CreatePost from "./components/CreatePost";
//import Chat from "./components/Chat";
import EditPost from "./components/EditPost";
import FlashMessages from "./components/FlashMessages";
import Header from "./components/Header";
import Home from "./components/Home";
import HomeGuest from "./components/HomeGuest";
import NotFound from "./components/NotFound";
//import Search from "./components/Search";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Terms from "./components/Terms";

import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

import axios from "axios";
import { useEffect } from "react";
import LoadingDotIcon from "./components/LoadingDotIcon";
axios.defaults.baseURL = "https://complex-react-app-server.herokuapp.com";

const CreatePost = React.lazy(() => import("./components/CreatePost"));
const ViewSinglePost = React.lazy(() => import("./components/ViewSinglePost"));
const Search = React.lazy(() => import("./components/Search"));
const Chat = React.lazy(() => import("./components/Chat"));

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("complexappToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("complexappToken"),
      username: localStorage.getItem("complexappUsername"),
      avatar: localStorage.getItem("complexappAvatar"),
    },
    isSearchOpen: false,
    isChatOpen: false,
    unreadChatCount: 0,
  };

  function ourReducer(state, action) {
    switch (action.type) {
      case "login":
        return {
          ...state,
          loggedIn: true,
          user: action.data,
        };
      case "logout":
        return {
          ...state,
          loggedIn: false,
          flashMessages: state.flashMessages,
        };
      case "flashMessage":
        return {
          ...state,
          flashMessages: state.flashMessages.concat(action.value),
        };
      case "openSearch":
        return {
          ...state,
          isSearchOpen: true,
        };
      case "closeSearch":
        return {
          ...state,
          isSearchOpen: false,
        };
      case "toggleChat":
        return {
          ...state,
          isChatOpen: !state.isChatOpen,
        };
      case "closeChat":
        return {
          ...state,
          isChatOpen: false,
        };
      case "incrementUnreadChatCount":
        return {
          ...state,
          unreadChatCount: state.unreadChatCount++,
        };
      case "clearUnreadChatCount":
        return {
          ...state,
          unreadChatCount: 0,
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("complexappToken", state.user.token);
      localStorage.setItem("complexappUsername", state.user.username);
      localStorage.setItem("complexappAvatar", state.user.avatar);
    } else {
      localStorage.removeItem("complexappToken");
      localStorage.removeItem("complexappUsername");
      localStorage.removeItem("complexappAvatar");
    }
  }, [state.loggedIn]);

  //Check if token has expired or not
  useEffect(() => {
    if (state.loggedIn) {
      // Send axios request here
      const ourRequest = axios.CancelToken.source();

      async function fetchResults() {
        try {
          const response = await axios.post(
            "/checkToken",
            { token: state.user.token },
            {
              cancelToken: ourRequest.token,
            }
          );
          if (!response.data) {
            dispatch({ type: "logout" });
            dispatch({
              type: "flashMessage",
              value: "Your session has expired. Please log in again.",
            });
          }
        } catch (error) {
          console.log("There was a problem or the request was cancelled!");
          console.log(error.message);
        }
      }
      fetchResults();

      return () => ourRequest.cancel();
    }
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Suspense fallback={<LoadingDotIcon />}>
            <Switch>
              <Route path="/profile/:username">
                <Profile />
              </Route>
              <Route path="/" exact>
                {state.loggedIn ? <Home /> : <HomeGuest />}
              </Route>
              <Route path="/post/:id" exact>
                <ViewSinglePost />
              </Route>
              <Route path="/post/:id/edit" exact>
                <EditPost />
              </Route>
              <Route path="/create-post">
                <CreatePost />
              </Route>
              <Route path="/about-us">
                <About />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
          <CSSTransition
            timeout={330}
            in={state.isSearchOpen}
            classNames="search-overlay"
            unmountOnExit
          >
            <div className="search-overlay">
              <Suspense fallback="">
                <Search />
              </Suspense>
            </div>
          </CSSTransition>
          <Footer />
          <Suspense fallback="">{state.loggedIn && <Chat />}</Suspense>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(<Main />, document.querySelector("#root"));
