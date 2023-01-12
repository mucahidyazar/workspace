import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import Link from "next/link";
import StoryList from "../src/components/StoryList";
import styles from "./styles.module.scss";
import Layout from "./components/Layout";

class Index extends React.Component<any> {
  static async getInitialProps({ req, res, query }: any) {
    let stories;
    let page;

    try {
      //Bu sekidle yukarida tanimladigimiz degiskeni querryden gelen degere ayarliyacagiz.
      //Eger querryden gelen yoksa 1 olacak.
      //Ve daha sonra bunu url imizi dynamic sekilde degistirmesi icin koyuyoruz.
      page = Number(query.page) || 1;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      stories = await response.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }
    return { page, stories };
  }

  //503 Service Unavailable
  render() {
    const { stories, page } = this.props;
    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }
    return (
      <Layout
        title="Hacker Next"
        description="A Hacker News clone made with NextJS, React and TypeScript"
      >
        <StoryList stories={stories} />
        <footer className={styles.footer}>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page ({page + 1})</a>
          </Link>
        </footer>
      </Layout>
    );
  }
}

export default Index;
