import React from "react"
import styles from "./blog.module.scss"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const BlogPage = () => {
  const {
    data: { nodes },
  } = useStaticQuery(graphql`
    {
      data: allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
      ) {
        nodes {
          title
          slug
          date: publishedDate(formatString: "MMMM Do, YYYY")
          body {
            html: body
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <h1>Blog</h1>
        <ol className={styles.posts}>
          {nodes.map(node => (
            <li key={node.id} className={styles.post}>
              <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p>{node.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
