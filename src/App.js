//import logo from "./logo.svg";
import "./App.css";
//MaterialUI
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Components
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Sms from "./components/Sms";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Sms />
      <Header />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
