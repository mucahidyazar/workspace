import React, { useContext, useEffect } from "react";
import axios from "axios";
import Page from "./Page";
import StateContext from "../StateContext";
import { useParams, NavLink, Switch, Route } from "react-router-dom";
import ProfilePosts from "./ProfilePosts";
import { useImmer } from "use-immer";
import ProfileFollowers from "./ProfileFollowers";
import ProfileFollowing from "./ProfileFollowing";

export default function Profile() {
  const { user, loggedIn } = useContext(StateContext);
  const { username } = useParams();
  const [state, setState] = useImmer({
    followActionLoading: false,
    startFollowingRequestCount: 0,
    stopFollowingRequestCount: 0,
    profileData: {
      profileUsername: "...",
      profileAvatar: "https://gravatar.com/avatar/placeholder?s=128",
      isFollowing: false,
      counts: { postCount: "", followerCount: "", followingCount: "" },
    },
  });

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await axios.post(
          `/profile/${username}`,
          {
            token: user.token,
          },
          { cancelToken: ourRequest.token }
        );
        setState((draft) => {
          draft.profileData = response.data;
        });
      } catch (error) {
        console.log("There was a problem!");
        console.log(error.message);
      }
    }
    fetchData();

    return () => {
      ourRequest.cancel();
    };
  }, [username]);

  useEffect(() => {
    if (state.startFollowingRequestCount) {
      setState((draft) => {
        draft.followActionLoading = true;
      });

      const ourRequest = axios.CancelToken.source();

      async function fetchData() {
        try {
          const response = await axios.post(
            `/addFollow/${state.profileData.profileUsername}`,
            {
              token: user.token,
            },
            { cancelToken: ourRequest.token }
          );
          setState((draft) => {
            draft.profileData.isFollowing = true;
            draft.profileData.counts.followerCount++;
            draft.followActionLoading = false;
          });
        } catch (error) {
          console.log("There was a problem!");
          console.log(error.message);
        }
      }
      fetchData();

      return () => {
        ourRequest.cancel();
      };
    }
  }, [state.startFollowingRequestCount]);

  useEffect(() => {
    if (state.stopFollowingRequestCount) {
      setState((draft) => {
        draft.followActionLoading = true;
      });

      const ourRequest = axios.CancelToken.source();

      async function fetchData() {
        try {
          const response = await axios.post(
            `/removeFollow/${state.profileData.profileUsername}`,
            {
              token: user.token,
            },
            { cancelToken: ourRequest.token }
          );
          setState((draft) => {
            draft.profileData.isFollowing = false;
            draft.profileData.counts.followerCount--;
            draft.followActionLoading = false;
          });
        } catch (error) {
          console.log("There was a problem!");
          console.log(error.message);
        }
      }
      fetchData();

      return () => {
        ourRequest.cancel();
      };
    }
  }, [state.stopFollowingRequestCount]);

  function startFollowing() {
    setState((draft) => {
      draft.startFollowingRequestCount++;
    });
  }

  function stopFollowing() {
    setState((draft) => {
      draft.stopFollowingRequestCount++;
    });
  }

  return (
    <Page title="Profile Screen">
      <h2>
        <img className="avatar-small" src={state.profileData.profileAvatar} />{" "}
        {state.profileData.profileUsername}
        {loggedIn &&
          !state.profileData.isFollowing &&
          user.username != state.profileData.profileUsername &&
          state.profileData.profileUsername != "..." && (
            <button
              className="btn btn-primary btn-sm ml-2"
              onClick={startFollowing}
              disabled={state.followActionLoading}
            >
              Follow <i className="fas fa-user-plus"></i>
            </button>
          )}
        {loggedIn &&
          state.profileData.isFollowing &&
          user.username != state.profileData.profileUsername &&
          state.profileData.profileUsername != "..." && (
            <button
              className="btn btn-danger btn-sm ml-2"
              onClick={stopFollowing}
              disabled={state.followActionLoading}
            >
              Unfollow <i className="fas fa-user-plus-times"></i>
            </button>
          )}
      </h2>

      <div className="profile-nav nav nav-tabs pt-2 mb-4">
        <NavLink
          exact
          to={`/profile/${state.profileData.profileUsername}`}
          className="nav-item nav-link"
        >
          Posts: {state.profileData.counts.postCount}
        </NavLink>
        <NavLink
          to={`/profile/${state.profileData.profileUsername}/followers`}
          className="nav-item nav-link"
        >
          Followers: {state.profileData.counts.followerCount}
        </NavLink>
        <NavLink
          to={`/profile/${state.profileData.profileUsername}/following`}
          className="nav-item nav-link"
        >
          Following: {state.profileData.counts.followingCount}
        </NavLink>
      </div>

      <Switch>
        <Route exact path="/profile/:username">
          <ProfilePosts />
        </Route>
        <Route path="/profile/:username/followers">
          <ProfileFollowers />
        </Route>
        <Route path="/profile/:username/following">
          <ProfileFollowing />
        </Route>
      </Switch>
    </Page>
  );
}
