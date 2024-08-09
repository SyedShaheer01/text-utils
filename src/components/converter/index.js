import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';



function NavScrollExample(props) {

  
  return (
    <Navbar expand="lg" className={`navbar-${props.mode} bg-${props.mode}`}>
      <Container fluid>
        <Navbar.Brand href="#">Text Utils</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className={`d-flex text-${props.mode==="dark" ? "light":"dark"}`}>
          <Form.Check onClick={props.toggleMode}
        type="switch"
        id="custom-switch"
        label="dark mode"
      />
          </Form>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;