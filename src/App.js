//import logo from "./logo.svg";
import "./App.css";
//Bootstrap Elements
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <p>some content displayed here</p>
      </Container>
    </div>
  );
}

export default App;
