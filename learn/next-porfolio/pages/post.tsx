import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      doloribus quos sapiente, ipsam architecto soluta at unde eum quidem
      suscipit culpa placeat libero mollitia aperiam, possimus perferendis
      similique! Asperiores, modi?
    </p>
  </Layout>
);

export default withRouter(Post);
