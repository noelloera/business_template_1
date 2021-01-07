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
      <Navigation />
      <Carousel>
        <Carousel.Item>

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
