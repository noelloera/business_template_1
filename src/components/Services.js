import pic04 from "../assets/pic04.jpg";
import pic05 from "../assets/pic05.jpg";
import pic06 from "../assets/pic06.jpg";
import { Typography, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import "typeface-ibm-plex-sans";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles({
  content: {
    backgroundColor: "#EFEFEF",
    padding: "0",
    borderBottom: "1px solid lightgray",
    [theme.breakpoints.up("md")]: {
      padding: "5rem 2rem",
    },
  },
  content2: {
    backgroundColor: "#FFFFFF",
    padding: "0",
    borderBottom: "1px solid lightgray",
    [theme.breakpoints.up("md")]: {
      padding: "5rem 2rem",
    },
  },
  image: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
  },
  services: {
    display: "flex",
    height: "3rem",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "black",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.services} variant="body2" id="SERVICES">
        SERVICES
      </Typography>
      <Grid
        container
        className={classes.content}
        alignItems="center"
        direction="row"
      >
        <Grid item className={classes.items} md={7} xs={12}>
          <img
            alt="mounted tv on the wall"
            className={classes.image}
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
        className={classes.content2}
        alignItems="center"
        direction="row-reverse"
      >
        <Grid item className={classes.items} md={7} xs={12}>
          <img
            alt="installed home amplifier"
            className={classes.image}
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
        className={classes.content}
        alignItems="center"
        direction="row"
      >
        <Grid item className={classes.items} md={7} xs={12}>
          <img
            alt="assembled video game television console"
            className={classes.image}
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
