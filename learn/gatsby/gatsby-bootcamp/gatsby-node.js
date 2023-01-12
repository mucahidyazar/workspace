const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //1. Get path to template
  const blogTemplate = path.resolve(`./src/templates/blog.js`)

  //2. Get markdown data
  const res = await graphql(`
    query getBlogSlugsForCreatingPage {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `)

  //3. Create new pages
  res.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.slug}`,
      context: {
        slug: node.slug,
      },
    })
  })
}
