/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `JupyterNotebook`) {
		// console.log(node.internal.type)

		const fileNode = getNode(node.parent)
		console.log(createFilePath({ node, getNode, basePath: `pages` }))

		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}
// exports.onCreateNode = ({ node }) => {
// console.log(node.internal.type)
// }

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
    query {
        allJupyterNotebook {
					edges {
						node {
							fields {
								slug
							}
						}
					}
        }
      }
    `)

	result.data.allJupyterNotebook.edges.forEach(({ node }) => {
		let slug = node.fields.slug;

		// slug = slug.split("/content/notebooks")[1];
		// let notebook_name = slug.split("/")[2];

		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/notebook.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
				// html: node.html,
				// content: node.internal.content
			},
		})
	})
}