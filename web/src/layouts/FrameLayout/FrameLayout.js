import { routes } from '@redwoodjs/router'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const FrameLayout = ({ children }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href={routes.dash()}>
            <img alt="logo" src="/images/logo.jpg"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={routes.dash()}>Dash</Nav.Link>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item href={routes.services()}>
                  Services
                </NavDropdown.Item>
                <NavDropdown.Item href={routes.incidents()}>
                  Incidents
                </NavDropdown.Item>
                <NavDropdown.Item href={routes.incidentReports()}>
                  IncidentReports
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
    </div>
  )
}

export default FrameLayout
