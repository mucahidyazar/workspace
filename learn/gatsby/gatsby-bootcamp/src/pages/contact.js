import React from "react"
import Layout from "../components/Layout"
import Head from "../components/Head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div>
        <h1>Contact</h1>
        <p>This is a contact page.</p>
        <p>
          <a href="https://twitter.com/mucahidyazar" target="blank">
            @mucahidyazar
          </a>
          on Twitter
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage
