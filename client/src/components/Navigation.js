import AppBar from "@material-ui/core/AppBar"; //MaterialUI
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/jmaudiovideo.png";
import Facebook from "@material-ui/icons/Facebook";
import SwipeableTemporaryDrawer from "./Drawer";
import { Typography, Hidden } from "@material-ui/core";
import { Link } from "react-scroll";
import Fade from "react-reveal";
import useStyles from "./useStyles";

const Navigation = (props) => {
  const classes = useStyles();
  return (
    <Fade>
      <AppBar className={classes.navStyle} position="static" id="HOME">
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
                  <Link className={classes.link} to={text} smooth>
                    <Typography key={text} color="secondary" variant="body2">
                      {text}
                    </Typography>
                  </Link>
                ))}
              </div>
            </Hidden>
            <IconButton href="FacebookURL">
              <Facebook color="primary" fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
        <a
          href="tel:PhoneNumber"
          className={classes.subBar}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2">SCHEDULE FREE QUOTE:</Typography>
          <Typography variant="body2">#PHONE NUMBER</Typography>
        </a>
      </AppBar>
    </Fade>
  );
};

export default Navigation;
