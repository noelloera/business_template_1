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
import PhotoGallery from "./components/PhotoGallery";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  app: {
    maxWidth: "1300px",
    margin: "auto",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 1px 0 rgba(0, 0, 0, 0.19);",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Navigation />
      <Sms />
      <Header />
      <Services />
      <Contact />
      <PhotoGallery />
    </div>
  );
}

export default App;
