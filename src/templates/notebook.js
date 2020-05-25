// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

import NotebookPreview from "@nteract/notebook-preview";

const NotebookPage = ({ data }) => {
	let { html, internal: { content } } = data.jupyterNotebook;
	return (
		<Layout>
			<Link to="/">Go back to the homepage</Link>
			<NotebookPreview notebook={JSON.parse(content)} />
		</Layout>
	)
}

export const query = graphql`
  query($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
        html
        internal {
          content
        }
    }
  }
`

export default NotebookPage
