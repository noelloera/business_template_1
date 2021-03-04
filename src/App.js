import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Sms from "./components/Sms";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";
import useStyles from "./components/useStyles";
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.allContent}>
        <Navigation />
        <Sms />
        <Header />
        <Services />
        <Contact />
        <PhotoGallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
