// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { Tabs, Tab, Badge, Breadcrumb } from 'react-bootstrap';
import useIframeContentHeight from "react-use-iframe-content-height";

import NotebookPreview from "@nteract/notebook-preview";

const NotebookPage = ({ data }) => {
  let { html, internal: { content = null } = {}, codemeta = null, name = "" } = data.pidNotebook;
  const [iframeRef, iframeHeight] = useIframeContentHeight();

  let doi_id = codemeta && codemeta.identifier ? codemeta.identifier.replace("https://doi.org/", "") : ""
  let doi_link = `https://doi.org/${doi_id}`;
  return (
    <Layout>
      <Breadcrumb>
        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item active>{codemeta.name || "Notebook Preview"}</Breadcrumb.Item>
      </Breadcrumb>
      <hr />
      <h2>{codemeta.name}
        {
          codemeta.binderUrl &&
          <a target="_blank" href={codemeta.binderUrl} style={{ float: "right" }}>
            <img src="https://camo.githubusercontent.com/483bae47a175c24dfbfc57390edd8b6982ac5fb3/68747470733a2f2f6d7962696e6465722e6f72672f62616467655f6c6f676f2e737667" alt="Binder" data-canonical-src="https://mybinder.org/badge_logo.svg" style={{ maxWidth: "100%" }}></img>
          </a>
        }
      </h2>
      {
        doi_link !== "https://doi.org/" &&
        <a target="_blank" href={doi_link}>
          <Badge variant="info"><strong>DOI:</strong> {doi_id}</Badge>
        </a>
      }{' '}
      <Badge variant="secondary">Date Published: {codemeta.datePublished}</Badge>{' '}
      <Badge variant="dark">Version: {codemeta.version}</Badge>{' '}
      <Badge variant="secondary">Publisher: {codemeta.publisher}</Badge>{' '}

      <h2 />
      <br /><hr />
      <div>
        <iframe ref={iframeRef} frameBorder="0" height={iframeHeight+200} width="100%" src={name} />
      </div>
    </Layout>
  )
}




export const query = graphql`
  query($slug: String!) {
    pidNotebook(slug: { eq: $slug } ) {
        name
          codemeta {
            identifier
            codeRepository
            controlledTem
            binderUrl
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
`

export default NotebookPage
