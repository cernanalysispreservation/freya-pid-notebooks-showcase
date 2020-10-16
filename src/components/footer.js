import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FREYAImage from "./FREYAImage";

const Footer = ({ siteTitle }) => {
  const data2 = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "eosc_logo-trs.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <footer className="App-footer py-3">
    <Container>
      <Row>
        <Col sm={6}>
          <p>
            The PID Jupyter Notebooks showcase  is maintained by <a href="https://www.cern.ch">CERN</a> and was developed within the <a href="https://www.project-freya.eu">FREYA project</a> .
          </p>
          <div style={{ display: "flex", justifyContent: "start", alignItems: "center"}}>
            <FREYAImage />
          </div>
        </Col>
        <Col sm={6}>
          <p>The FREYA project has received funding from the <a href="https://ec.europa.eu/programmes/horizon2020/en">European Union’s Horizon 2020</a> research and innovation programme under grant agreement No 777523.</p>
        </Col>
      </Row>
    </Container>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

