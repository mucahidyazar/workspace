import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

export default () => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <h1>Hello</h1>
        <h2>
          I'm Mucahid, a full-stack developer living in beautiful Istanbul
        </h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
      </div>
    </Layout>
  )
}
