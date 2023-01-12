import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="Home">
    Welcome to the hompage
    <Link href="/about">About</Link>
  </Layout>
);
