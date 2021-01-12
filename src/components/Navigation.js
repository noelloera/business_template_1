import { Navbar, Nav } from "react-bootstrap";

const Navigation = (props) => {
  return (
      <Navbar bg="dark" variant="dark" className="d-flex">
        <Navbar.Brand className="mr-auto p-2" href="#">
          Business Name
        </Navbar.Brand>
        <Nav className="p-2">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
      </Navbar>
  );
};

export default Navigation;
