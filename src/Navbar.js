import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Brand Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Drop Down" className="dropdown">
              <NavDropdown.Item className="dropdown-item" href="#action/3.1">
                Main Level 1
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="#action/3.2">
                Main Level 2
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-item" href="#action/3.3">
                Main Level 3
              </NavDropdown.Item>
              <NavDropdown title="Main Level 4" className="dropend">
                <NavDropdown.Item className="dropdown-item" href="#action/3.1">
                  Sub Level 1
                </NavDropdown.Item>
                <NavDropdown title="Sub Level 2" className="dropend">
                  <NavDropdown.Item
                    className="dropdown-item"
                    href="#action/3.1"
                  >
                    Final Level 1
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-item"
                    href="#action/3.2"
                  >
                    Final Level 2
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-item"
                    href="#action/3.3"
                  >
                    Final Level 3
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item className="dropdown-item" href="#action/3.3">
                  Sub Level 3
                </NavDropdown.Item>
                <NavDropdown title="Sub Level 4" className="dropend">
                  <NavDropdown.Item
                    className="dropdown-item"
                    href="#action/3.1"
                  >
                    Final Level 1
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-item"
                    href="#action/3.2"
                  >
                    Final Level 2
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown-item"
                    href="#action/3.3"
                  >
                    Final Level 3
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#home">Tutorial</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">Admin Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
