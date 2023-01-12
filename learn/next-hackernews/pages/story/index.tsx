import React from "react";
import styles from "./styles.module.scss";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";
import CommentList from "../../src/components/CommentList";

class Story extends React.Component {
  static async getInitialProps({ req, res, query }: any) {
    let story;
    try {
      const storyId = query.id;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await response.json();
    } catch (err) {
      console.log(err);
      story = null;
    }
    return { story };
  }

  render() {
    const { story }: any = this.props;
    if (!story) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout title={story.title} backButton={true}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href={story.url}>{story.title}</a>
          </h1>
        </main>
        <div className={styles.details}>
          <strong>{story.points} points</strong>
          <strong>{story.comments_count} comments</strong>
          <strong>{story.time_ago}</strong>
        </div>
        {story.comments.length > 0 ? (
          <CommentList comments={story.comments} />
        ) : (
            <div>No comments for this story</div>
          )}
      </Layout>
    );
  }
}

export default Story;
