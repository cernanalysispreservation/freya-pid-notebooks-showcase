import React from "react"
import { Link } from "gatsby"

import {useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allJupyterNotebook {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
        totalCount
      }
    }
  `);

  console.log("BOOM", data)
  return (
    <div>
      <SEO title="Home" />
      <p>Welcome to PID Graph notebook showcase.</p>
      {data.allJupyterNotebook.edges.map(({ node }) => {
        return (
          <div>
            <Link to={node.fields.slug} >{node.fields.slug}</Link>
          </div>
        )
      })}

    </div>
  )
}
