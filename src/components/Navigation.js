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

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  navStyle: {
    backgroundColor: "white",
  },
  subBar: {
    position: "relative",
    fontFamily: "IBM plex sans",
    color: "white",
    backgroundColor: "gray",
  },
  subBarContent: {
    color: "white",
    display: "flex",
    paddingTop: "0.5rem",
    justifyContent: "space-around",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    padding: "0.6rem",
  },
  logo: {
    width: "200px",
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
        <a className={classes.subBarContent} href="tel:9158881203">
          <h6>SCHEDULE FREE QUOTE:</h6>
          <h6>(915)888-1203</h6>
        </a>
      </div>
    </AppBar>
  );
};

export default Navigation;
