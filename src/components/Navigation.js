import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import image from "../assets/jmaudiovideo.png";
import theme from "../assets/theme";
//MaterialUI Icons
import Facebook from "@material-ui/icons/Facebook";
import Email from "@material-ui/icons/Email";
//Fonts
import "typeface-anton";
import "typeface-ibm-plex-sans";
import SwipeableTemporaryDrawer from "./Drawer";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  navStyle: {
    backgroundColor: "white",
  },
  subBar: {
    height: "2rem",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    [theme.breakpoints.up("md")]: {
      height: "4rem",
      paddingLeft: "5rem",
      paddingRight: "5rem",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    fontFamily: "IBM plex sans",
    color: "white",
    backgroundColor: "gray",
    fontSize: "10rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    padding: "0.6rem",
    [theme.breakpoints.up("md")]: {
      padding: "0.6rem 2rem",
    },
  },
  logo: {
    width: "200px",
    [theme.breakpoints.up("md")]: {
      width: "250px",
    },
  },
}));
//Add flex gridding
const Navigation = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navStyle} position="static">
      <Toolbar className={classes.toolbar}>
        <div>
          <IconButton>
            <SwipeableTemporaryDrawer />
          </IconButton>
          <a href="/">
            <img alt="mounted tv" className={classes.logo} src={image} />
          </a>
        </div>
        <div>
          <IconButton href="https://www.facebook.com/profile.php?id=100011054640194">
            <Facebook />
          </IconButton>
          <IconButton href="mailto:loera.noel@gmail.com?subject=Service Requested">
            <Email />
          </IconButton>
          <Facebook />
        </div>
      </Toolbar>
      <div className={classes.subBar}>
        <Typography variant="body2">SCHEDULE FREE QUOTE:</Typography>
        <Typography variant="body2">(915)888-1203</Typography>
      </div>
    </AppBar>
  );
};

export default Navigation;
