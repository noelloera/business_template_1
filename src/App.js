//import logo from "./logo.svg";
import "./App.css";
//Bootstrap Elements
import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//Components
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="carousel">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://www.w3schools.com/bootstrap/la.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>First slide inner text</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://www.w3schools.com/bootstrap/chicago.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Second slide inner text</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item intreval={3000}>
            <img
              className="d-block w-100"
              src="https://www.w3schools.com/bootstrap/ny.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Third slide inner text</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <h1>Example Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Container>
      </div>
    </div>
  );
}

export default App;
