import Link from "next/link";
import Layout from "../components/Layout";
import { Component } from "react";
import Error from "./_error";
import fetch from "isomorphic-unfetch";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/mucahidyazar");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="Hire Me">
        <h1>About</h1>
        <h2>{user.name}</h2>
        <p>A javascript programmer</p>
        <img src={user.avatar_url} alt="Mucahid" height="200px" />
        <Link href="/">Home</Link>
      </Layout>
    );
  }
}
