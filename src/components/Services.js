import pic04 from "../assets/pic04.jpg";
import pic05 from "../assets/pic05.jpg";
import pic06 from "../assets/pic06.jpg";
import { Typography, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Fade from "react-reveal/Fade";
import useStyles from "./useStyles";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.services} variant="body2" id="SERVICES">
        SERVICES
      </Typography>
      <Grid
        container
        className={classes.section}
        alignItems="center"
        direction="row"
      >
        <Grid item className={classes.items} md={7} xs={12}>
          <img
            alt="mounted tv on the wall"
            className={classes.images}
            src={pic04}
          ></img>
        </Grid>
        <Grid item alignItems="flex-end" md={5} xs={12}>
          <Box m={3}>
            <Fade right>
              <Typography gutterBottom align="right" variant="body1">
                Professional
              </Typography>
              <Typography color="primary" align="right" variant="h4">
                Television
              </Typography>
              <Typography align="right" variant="h4">
                Mounting
              </Typography>
              <Typography align="right" variant="body2">
                Improve your home theater expirience with a professionally
                mounted TV. Enjoy the beautiful modern aesthetic.
              </Typography>
            </Fade>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.section2}
        alignItems="center"
        direction="row-reverse"
      >
        <Grid item className={classes.items} md={7} xs={12}>
          <img
            alt="installed home amplifier"
            className={classes.images}
            src={pic05}
          ></img>
        </Grid>
        <Grid item alignItems="flex-end" md={5} xs={12}>
          <Box m={4}>
            <Fade left>
              <Typography gutterBottom align="left" variant="body1">
                Expert
              </Typography>
              <Typography color="primary" align="left" variant="h4">
                Home Audio
              </Typography>
              <Typography align="left" variant="h4">
                Setup
              </Typography>
              <Typography align="left" variant="body2">
                Modernize your home today with a professionally installed TV or
                Surround Sound system. El Paso's highest rated home theater
                installation company.
              </Typography>
            </Fade>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.section}
        alignItems="center"
        direction="row"
      >
        <Grid item className={classes.items} md={7} xs={12}>
          <img
            alt="assembled video game television console"
            className={classes.images}
            src={pic06}
          ></img>
        </Grid>
        <Grid item alignItems="flex-start" md={5} xs={12}>
          <Box m={4}>
            <Fade right>
              <Typography gutterBottom align="right" variant="body1">
                Themed
              </Typography>
              <Typography color="primary" align="right" variant="h4">
                Video Game
              </Typography>
              <Typography align="right" variant="h4">
                Centers
              </Typography>
              <Typography align="right" variant="body2">
                Modernize your home today with a professionally installed TV or
                Surround Sound system. El Paso's highest rated home theater
                installation company.
              </Typography>
            </Fade>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
