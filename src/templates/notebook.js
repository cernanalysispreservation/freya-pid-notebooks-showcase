// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Tabs, Tab, Badge } from 'react-bootstrap';

import NotebookPreview from "@nteract/notebook-preview";

const NotebookPage = ({ data }) => {
  let { html, internal: { content = null } = {}, fields: { codemeta = null } = {} } = data.jupyterNotebook;
  return (
    <Layout>
      <hr />
      <h2>{codemeta.name}</h2>
      <Badge variant="info">{codemeta.identifier}</Badge>{' '}
      <Badge variant="secondary">Date Published: {codemeta.datePublished}</Badge>{' '}
      <Badge variant="dark">Version: {codemeta.version}</Badge>{' '}
      <Badge variant="secondary">Publisher: {codemeta.publisher}</Badge>{' '}
      <h2/>
      <br/><hr />
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
        fields {
          codemeta {
            identifier
            codeRepository
            controlledTem
            datePublished
            dateModified
            dateCreated
            description
            isAutomatedBuild
            issueTracker
            licenseId
            publisher
            name
            version
          }
        }
    }
  }
`

export default NotebookPage
