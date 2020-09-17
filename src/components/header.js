import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header className="App-header">
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Link to="/">
            <Navbar.Brand data-testid="navbar-brand"><span className="brand-highlight">PID</span> Notebook Showcase</Navbar.Brand>
      </Link>
      <Navbar.Collapse id="navbar-nav">
        <Nav>
          <Link to="/about">
            <Nav.Link>About</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="App-header-content">
      <Container>
        <Row>
          <Col>
            <h1>Welcome to the PID Jupyter Notebooks showcase.</h1>
            <p>
            The PID Jupyter Notebooks showcase is maintained by CERN and was developed within the FREYA project. For more information about the registry contact <a href="mailto:support@pidnotebooks.org">support@pidnotebooks.org</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
