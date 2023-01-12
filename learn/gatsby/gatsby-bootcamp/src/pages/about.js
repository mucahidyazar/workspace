import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h1>About</h1>
        <p>This is an about page</p>
        <p>
          <Link to="/contact">Want to work with me? Reach out!</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
