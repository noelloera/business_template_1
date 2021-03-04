import AppBar from "@material-ui/core/AppBar"; //MaterialUI
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/styles/makeStyles";
import logo from "../assets/jmaudiovideo.png";
import Facebook from "@material-ui/icons/Facebook";
import "typeface-anton"; //Fonts
import "typeface-ibm-plex-sans";
import theme from "../assets/theme.js";
import SwipeableTemporaryDrawer from "./Drawer";
import { Typography, Hidden } from "@material-ui/core";
import { Link } from "react-scroll";
import Fade from "react-reveal";

const useStyles = makeStyles(() => ({
  navStyle: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      padding: "0.6rem 2rem 0.6rem 3.5rem",
    },
  },
  subBar: {
    height: "2rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontFamily: "IBM plex sans",
    color: "white",
    backgroundColor: "black",
    marginBottom: "1.5rem",
    [theme.breakpoints.up("md")]: {
      height: "3rem",
    },
    "&:hover": {
      color: "#5298fa",
    },
  },
  logo: {
    width: "200px",
    [theme.breakpoints.only("xxs")]: {
      width: "150px",
    },
  },
  rightSide: {
    overflow: "hidden",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  links: {
    display: "flex",
  },
  link: {
    marginRight: "1.3rem",
    cursor: "pointer",
    "&:hover": {
      color: "#5298fa",
    },
  },
}));
const Navigation = (props) => {
  const classes = useStyles();
  return (
    <Fade>
      <AppBar className={classes.navStyle} position="static">
        <Toolbar className={classes.toolbar}>
          <div>
            <Hidden mdUp>
              <IconButton>
                <SwipeableTemporaryDrawer />
              </IconButton>
            </Hidden>
            <a href="/">
              <img
                alt="audio / video installation logo"
                className={classes.logo}
                src={logo}
              />
            </a>
          </div>
          <div className={classes.rightSide}>
            <Hidden smDown>
              <div className={classes.links}>
                {["HOME", "SERVICES", "CONTACT", "GALLERY"].map((text) => (
                  <Link to={text} smooth>
                    <Typography
                      key={text}
                      className={classes.link}
                      color="secondary"
                      variant="body2"
                    >
                      {text}
                    </Typography>
                  </Link>
                ))}
              </div>
            </Hidden>
            <IconButton href="https://www.facebook.com/profile.php?id=100011054640194">
              <Facebook color="primary" fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
        <a
          href="tel:9158881203"
          className={classes.subBar}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2">SCHEDULE FREE QUOTE:</Typography>
          <Typography variant="body2">(915)888-1203</Typography>
        </a>
      </AppBar>
    </Fade>
  );
};

export default Navigation;
