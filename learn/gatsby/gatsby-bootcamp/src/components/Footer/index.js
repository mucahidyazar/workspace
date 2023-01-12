import React from "react"
import styles from "./styles.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const GET_NAME = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(GET_NAME)

  return (
    <footer className={styles.footer}>
      <p>Created by {author}, 2019</p>
    </footer>
  )
}
