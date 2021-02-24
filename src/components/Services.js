import image4 from "../assets/pic04.jpg";
import image5 from "../assets/pic05.jpg";
import { Typography, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import "typeface-ibm-plex-sans";
const useStyles = makeStyles({
  content: {
    padding: "0",
    borderBottom: "1px solid lightgray",
    [theme.breakpoints.up("md")]: {
      padding: "10rem 2rem",
    },
  },
  image: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
  },
  services: {
    display: "flex",
    height: "2rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontFamily: "IBM plex sans",
    color: "white",
    backgroundColor: "black",
    [theme.breakpoints.up("md")]: {
      height: "3rem",
    },
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
            src={image4}
          ></img>
        </Grid>
        <Grid item alignItems="flex-end" md={5} xs={12}>
          <Box m={3}>
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
              Improve your home theater expirience with a professionally mounted TV. Enjoy the beautiful modern aesthetic.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.content}
        alignItems="center"
        direction="row-reverse"
      >
        <Grid item className={classes.items} md={7} xs={12}>
          <img
            alt="installed home amplifier"
            className={classes.image}
            src={image5}
          ></img>
        </Grid>
        <Grid item alignItems="flex-end" md={5} xs={12}>
          <Box m={4}>
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
            src="https://www.reviewgeek.com/thumbcache/0/0/8645ff2972c97bfea54692a1311c18ab/p/uploads/2019/08/dee711d2-1.jpg"
          ></img>
        </Grid>
        <Grid item alignItems="flex-start" md={5} xs={12}>
          <Box m={4}>
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
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
