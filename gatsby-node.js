/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const express= require('express');

exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
}
const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
// 	const { createNodeField } = actions
// 	if (node.extension === `ipynb`) {
// 		let dir_path = path.dirname(node.absolutePath)
// 		let codemeta_file = dir_path+"/codemeta.json"
// 		if (fs.existsSync(codemeta_file)) {
// 			//file exists
// 			let codemeta_data = fs.readFileSync(codemeta_file);
// 			codemeta_json = JSON.parse(codemeta_data);
// 			}
// 		let renderHtml;
// 		/////
// 		function fromDir(startPath,filter){

// 			//console.log('Starting from dir '+startPath+'/');
		
// 			if (!fs.existsSync(startPath)){
// 				console.log("no dir ",startPath);
// 				return;
// 			}
		
// 			let files=fs.readdirSync(startPath);
// 			for(let i=0;i<files.length;i++){
// 				let filename=path.join(startPath,files[i]);
// 				let stat = fs.lstatSync(filename);
// 				if (stat.isDirectory()){
// 					fromDir(filename,filter); //recurse
// 				}
// 				else if (filename.indexOf(filter)>=0) {
// 					console.log('-- found: ',filename);
// 					renderHtml = node.relativePath+".html"
					
// 				};
// 			};
// 		};
		
// 		fromDir("./src/content/",'.html');
// 		/////


// 		const fileNode = getNode(node.parent)
// 		const slug = createFilePath({ node, getNode, basePath: `pages` })

// 		createNodeField({
// 			node,
// 			name: `slug`,
// 			value: slug,
// 			})
// 		createNodeField({
// 			node,
// 			name: `codemeta`,
// 			value: codemeta_json,
// 			})
// 		createNodeField({
// 			node,
// 			name: `renderHtml`,
// 			value: renderHtml,
// 			})
// 	  }
	
// }

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
	// const { createNode, createParentChildLink, createNodeField } = actions
	let pidNotebookFiles = [];
	function fromDir(startPath, filter){
		//console.log('Starting from dir '+startPath+'/');
		if (!fs.existsSync(startPath)){
			console.log("no dir ",startPath);
			return;
		}
		var files=fs.readdirSync(startPath);
		for(var i=0;i<files.length;i++){
			var filename=path.join(startPath,files[i]);
			var stat = fs.lstatSync(filename);
			if (stat.isDirectory()){
				fromDir(filename,filter); //recurse
			}
			else if (filename.indexOf(filter)>=0) {
				console.log('-- found: ',filename);
				let codemeta_json;
				if (fs.existsSync(startPath+"/codemeta.json")){
					let codemeta_data = fs.readFileSync(startPath+"/codemeta.json");
					codemeta_json = JSON.parse(codemeta_data);
				}

				pidNotebookFiles.push({
					name:filename,
					codemeta: codemeta_json,
					slug:startPath	
				})

			};
		};
	};
	fromDir("./src/content", ".ipynb.html")
	pidNotebookFiles.forEach(filename => {

		const node = {
		  name: filename.name.split('src/content')[1],
		  slug: "pages"+filename.slug.split('src/content')[1]+"/",
		  type: "pidNotebook",
		  id: createNodeId(`pidNotebook-${filename.name}`),
		  internal: {
			type: "pidNotebook",
			contentDigest: createContentDigest(filename.name),
		  },
		  codemeta: filename.codemeta,

		}
		actions.createNode(node)
	  })
}


exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
    query {
		allPidNotebook {
			edges{

				node {
					name
					type
					slug
				}
			}
		}
      }
    `)

	result.data.allPidNotebook.edges.forEach(({ node }) => {
		let slug = node.slug;

		// slug = slug.split("/content/notebooks")[1];
		// let notebook_name = slug.split("/")[2];
		createPage({
			path: node.slug,
			component: path.resolve(`./src/templates/notebook.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.slug,
				// html: node.html,
				// content: node.internal.content
			},
		})
	})
}