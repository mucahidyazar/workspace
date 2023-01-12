import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./styles.module.scss"

const GET_TITLE = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(GET_TITLE)

  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.title} to="/">
          {title}
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
