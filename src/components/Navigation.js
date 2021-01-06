import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigation = (props) => {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex ">
      <div className="mr-auto p-2">
        <Navbar.Brand href="#">Business Name</Navbar.Brand>
      </div>
      <div className="p-2">
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigation;
