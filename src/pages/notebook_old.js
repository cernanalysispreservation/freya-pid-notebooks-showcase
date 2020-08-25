// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

import NotebookPreview from "@nteract/notebook-preview";

export const query = graphql`
query
  JupyterQuery {
    allJupyterNotebook {
      edges {
        node {
          id
          metadata {
            kernelspec {
              name
              language
              display_name
            }
          }
          html
          json {
            nbformat
            nbformat_minor
          }
          internal {
            content
          }
        }
      }
    }
  }
`

const NotebookPage = ({location, data, path}) => {
  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2 ({path})</p>
      <NotebookPreview  notebook={JSON.parse(data.allJupyterNotebook.edges[0].node.internal.content)}/>
      <div dangerouslySetInnerHTML={{ __html: data.allJupyterNotebook.edges[0].node.html }} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default NotebookPage
