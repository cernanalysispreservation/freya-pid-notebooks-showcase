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
      <Jumbotron>
        <h1>Welcome to the PID Jupyter Notebooks showcase.</h1>
        <p>
          The PID Jupyter Notebooks showcase is maintained by CERN and was developed within the FREYA project.
  For more information about the registry contact <a href="mailto:support@pidnotebooks.org">support@pidnotebooks.org</a>
        </p>
      </Jumbotron>
      <div className="App-header-content">
        <Container>
          <Row>
            <Col>
              <p>
                The PID Jupyter Notebooks showcase is maintained by CERN and was developed within the FREYA project.
          For more information about the registry contact <a href="mailto:support@pidnotebooks.org">support@pidnotebooks.org</a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
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
