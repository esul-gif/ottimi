import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './logo.png'
import { LinkContainer } from 'react-router-bootstrap';

function TheNavBar() {

const NavBarElm = document.getElementById("NavBar");

document.onscroll = () => document.NavBarElm.style.background = "pink"

      return (
        <Navbar bg="light" expand="md" id="NavBar">
          <Container fluid>
            <Navbar.Brand><img src={Logo} height="30px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '75px' }}
                navbarScroll
                >
                <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Test">
                <Nav.Link>Test</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Blog">
                <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="primary">GO</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default TheNavBar;