/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `JupyterNotebook`) {
		let dir_path = path.dirname(node.fileAbsolutePath)
		let codemeta_file = dir_path+"/codemeta.json"

		let codemeta_json = {};

		if (fs.existsSync(codemeta_file)) {
			//file exists
			let codemeta_data = fs.readFileSync(codemeta_file);
			codemeta_json = JSON.parse(codemeta_data);
		}
		const fileNode = getNode(node.parent)
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
		createNodeField({
			node,
			name: `codemeta`,
			value: codemeta_json,
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