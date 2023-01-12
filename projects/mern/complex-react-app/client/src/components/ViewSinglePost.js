import React, { useState, useEffect, useContext } from "react";
import Page from "./Page";
import axios from "axios";
import { useParams, Link, Redirect } from "react-router-dom";
import LoadingDotIcon from "./LoadingDotIcon";
import ReactMarkdown from "react-markdown";
import ReactTooltip from "react-tooltip";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

export default function ViewSinglePost() {
  const { user, loggedIn } = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const { id } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const [post, setPost] = useState();

  const [deleteAttemptCount, setDeleteAttemptCount] = useState(0);
  const [deleteWasSuccessful, setDeleteWasSuccessful] = useState(false);

  useEffect(() => {
    //Yavas internetler axiosla postu alirken, sayfadan cikildiginda axios islemine devam ederler ve daha sornada altindaki diger islemleri yaparlar buradaki set islemleri gibi. Buda sayfalarda hata olusmasina sebeb verir.
    //Bunu onlemek icin axios ile cancel token olusturur ve get'e ikinci post'a ucuncu argument olarak tanimlariz bu olsuturdugumuz degisken tyokeni.
    //Daha sonra useEffect'ile return yaparak sayfa kapatildiginda cancel tokenimizi aktif hale sokariz ve axios islemini iptal ederiz.
    const ourRequest = axios.CancelToken.source();

    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${id}`, {
          cancelToken: ourRequest.token,
        });
        setPost(response.data);
        setIsloading(false);
      } catch (error) {
        console.log("There was a problem!");
        console.log(error.message);
      }
    }
    fetchPost();

    return () => {
      ourRequest.cancel();
    };
  }, [id]);

  useEffect(() => {
    if (deleteAttemptCount > 0) {
      const ourRequest = axios.CancelToken.source();

      async function deletePost() {
        try {
          const response = await axios.delete(
            `/post/${id}`,
            { data: { token: user.token } },
            {
              cancelToken: ourRequest.token,
            }
          );
          if (response.data == "Success") {
            setDeleteWasSuccessful(true);
          }
        } catch (error) {
          console.log("There was a problem!");
          console.log(error.message);
        }
      }
      deletePost();

      return () => {
        ourRequest.cancel();
      };
    }
  }, [deleteAttemptCount]);

  if (deleteWasSuccessful) {
    appDispatch({
      type: "flashMessage",
      value: "Post was successfully deleted.",
    });

    return <Redirect to={`/profile/${user.username}`} />;
  }

  if (!isLoading && !post) {
    return (
      <Page title="Not found">
        <div className="text-center">
          <h2>Whoops, we cannot find that page.</h2>
          <p className="lead text-muted">
            You can always visit the <Link to="/">homepage</Link> to get a fresh
            start.
          </p>
        </div>
      </Page>
    );
  }

  if (isLoading) {
    return (
      <Page title="...">
        <LoadingDotIcon />
      </Page>
    );
  }

  const date = new Date(post.createdDate);
  const dateFormatted = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  function isOwner() {
    if (loggedIn) {
      return user.username == post.author.username;
    }
    return false;
  }

  function deleteHandler() {
    const areYouSure = window.confirm(
      "Do you really want to delete this post!"
    );
    if (areYouSure) {
      setDeleteAttemptCount((prev) => prev + 1);
    }
  }

  return (
    <Page title={post.title}>
      <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        {isOwner() && (
          <span className="pt-2">
            <Link
              to={`/post/${post._id}/edit`}
              data-tip="Edit"
              data-for="edit"
              className="text-primary mr-2"
            >
              <i className="fas fa-edit"></i>
            </Link>
            <ReactTooltip id="edit" className="custom-tooltip" />{" "}
            <a
              className="delete-post-button text-danger"
              data-tip="Delete"
              data-for="delete"
              onClick={deleteHandler}
            >
              <i className="fas fa-trash"></i>
            </a>
            <ReactTooltip id="delete" className="custom-tooltip" />
          </span>
        )}
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img
            className="avatar-tiny mr-2"
            src={post.author.avatar}
            style={{ width: 32, height: 32, borderRadius: "50%" }}
          />
        </Link>
        Posted by{" "}
        <Link to={`/profile/${post.author.username}`} href="#">
          {post.author.username}
        </Link>{" "}
        {dateFormatted}
      </p>

      <div className="body-content">
        <ReactMarkdown
          source={post.body}
          allowedTypes={[
            "paragraph",
            "strong",
            "emphasis",
            "text",
            "heading",
            "list",
            "listItem",
          ]}
        />
      </div>
    </Page>
  );
}
