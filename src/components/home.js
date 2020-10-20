import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col, Jumbotron, Nav } from 'react-bootstrap';

import SEO from "./seo"
import SearchListItem from "./SearchListItem";
export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allPidNotebook {
        edges {
          node {
            id
            codemeta {
              name
              description
            }
            slug
          }
        }
        totalCount
      }
    }
  `);

  return (
    <div>
      <SEO title="Home" />
      {data.allPidNotebook.edges.map(({ node }) => {
        return (
          <div>
            <SearchListItem notebook={node} />
          </div>
        )
      })}

    </div>
  )
}
