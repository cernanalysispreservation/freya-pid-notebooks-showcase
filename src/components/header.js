import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header className="App-header">
    <Container>
      <Row>
        <Navbar>
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
      </Row>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
