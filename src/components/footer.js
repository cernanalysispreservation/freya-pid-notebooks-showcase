import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Footer = ({ siteTitle }) => (
    <footer className="App-footer py-3">
    <Container>
      <Row>
        <Col sm={6}>
          <p>
            The PID Jupyter Notebooks showcase  is maintained by <a href="https://www.cern.ch">CERN</a> and was developed within the <a href="https://www.project-freya.eu">FREYA project</a> .
          </p>
          <p>
            <img src={'/pid-graph-showcase/freya_logo.png'} width="100" alt="FREYA" />
            <img src={'/pid-graph-showcase/eosc_logo-trs.png'} width="200" alt="FREYA" />
          </p>
        </Col>
        <Col sm={6}>
          <p>The FREYA project has received funding from the <a href="https://ec.europa.eu/programmes/horizon2020/en">European Union’s Horizon 2020</a> research and innovation programme under grant agreement No 777523.</p>
        </Col>
      </Row>
    </Container>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

