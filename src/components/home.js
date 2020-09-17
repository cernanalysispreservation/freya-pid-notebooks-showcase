import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Jumbotron, Nav } from 'react-bootstrap';

import SEO from "./seo"
import SearchListItem from "./SearchListItem";
export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allJupyterNotebook {
        edges {
          node {
            id
            fields {
              slug
              codemeta {
                name
                description
              }
            }
          }
        }
        totalCount
      }
    }
  `);

  return (
    <div>
      <SEO title="Home" />
      {data.allJupyterNotebook.edges.map(({ node }) => {
        return (
          <div>
            <SearchListItem notebook={node} />
          </div>
        )
      })}

    </div>
  )
}
