//import logo from "./logo.svg";
import "./App.css";
//MaterialUI
import { Button, Typography, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Components
import Navigation from "./components/Navigation";
import CarouselComp from "./components/CarouselComp";

function App() {
  return (
    <div className="App">
      <Navigation />
      <CarouselComp />
      <Grid item container>
        <Grid item sm={2} xs={0} />
        <Grid item md={8} xs={12}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid item sm={2} xs={0} />
      </Grid>
      <Button variant="contained" startIcon={<DeleteIcon />} color="primary">
        Simple Button
      </Button>
    </div>
  );
}

export default App;
