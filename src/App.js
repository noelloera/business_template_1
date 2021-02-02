//import logo from "./logo.svg";
import "./App.css";
//MaterialUI
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Components
import Navigation from "./components/Navigation";
import CarouselComp from "./components/CarouselComp";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <Navigation />
      <CarouselComp />
      <Content />
    </div>
  );
}

export default App;
