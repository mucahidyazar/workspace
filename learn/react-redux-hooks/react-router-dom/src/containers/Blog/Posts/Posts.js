import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import "./Posts.css";
import { Link, Route } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post, index) => ({
          ...post,
          key: index,
          author: "Max"
        }));
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        console.error(err);
        //this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };
  render() {
    let posts = <p style={{ textAlign: "center" }}>Something wen wrong!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post, index) => (
        <Link to={"/posts/" + post.id} key={index}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        </Link>
      ));
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + "/:id"} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
