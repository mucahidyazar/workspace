import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import ReactTooltip from "react-tooltip";
import LoadingDotIcon from "./LoadingDotIcon";

export default function HeaderLoggenIn() {
  const dispatch = useContext(DispatchContext);
  const { user, unreadChatCount } = useContext(StateContext);

  function handleLogout() {
    dispatch({ type: "logout" });
    dispatch({
      type: "flashMessage",
      value: "You have successfully logged out.",
    });
  }

  function handleSearchIcon(e) {
    e.preventDefault();
    dispatch({ type: "openSearch" });
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a
        href="#"
        className="text-white mr-2 header-search-icon"
        onClick={handleSearchIcon}
        data-for="search"
        data-tip="Search"
      >
        <i className="fas fa-search"></i>
      </a>
      <ReactTooltip place="bottom" id="search" className="custom-tooltip" />{" "}
      <span
        className={
          "mr-2 header-chat-icon " +
          (unreadChatCount ? "text-danger" : "text-white")
        }
        data-for="chat"
        data-tip="Chat"
        onClick={() => dispatch({ type: "toggleChat" })}
      >
        <i className="fas fa-comment"></i>
        {unreadChatCount ? (
          <span className="chat-count-badge text-white">
            {unreadChatCount < 10 ? unreadChatCount : "9+"}
          </span>
        ) : (
          ""
        )}
      </span>{" "}
      <ReactTooltip place="bottom" id="chat" className="custom-tooltip" />
      <Link
        to={`/profile/${user.username}`}
        className="mr-2"
        data-for="profile"
        data-tip="Profile"
      >
        <img
          className="small-header-avatar"
          style={{ width: 32, height: 32 }}
          src={user.avatar}
        />
      </Link>
      <ReactTooltip place="bottom" id="profile" className="custom-tooltip" />{" "}
      <Link className="btn btn-sm btn-success mr-2" to="/create-post">
        Create Post
      </Link>
      <button className="btn btn-sm btn-secondary" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}
