import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <header className="App-header">
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Link to="/">
            <Navbar.Brand data-testid="navbar-brand"><span style={{color: "#B8DEE2"}}>PID</span> Notebook Showcase</Navbar.Brand>
      </Link>
      <Navbar.Collapse id="navbar-nav">
        <Nav>
          <Link to="/about/">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="App-header-content">
      <Container>
        <Row>
          <Col>
            <span style={{fontSize: "30px", marginBottom: "10px"}}>Welcome to the PID Jupyter Notebooks showcase</span>
            <p>
              The <i> PID Jupyter Notebooks showcase </i> presents a collection of Jupyter notebooks developed within the FREYA project. The website is maintained by CERN and the code repository behind it can be found <a href="https://github.com/cernanalysispreservation/freya-pid-notebooks-showcase">here.</a>           </p>
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
