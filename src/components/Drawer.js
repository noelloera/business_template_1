import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/jmaudiovideo.png";
import { Link } from "react-scroll";
import useStyles from "./useStyles";

export default function Drawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const handleClose = () => {
    setState({ open: false });
  };
  const list = (anchor) => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.drawerLogoDiv}>
        <img alt="mounted tv" className={classes.drawerLogo} src={logo} />
      </div>
      <List className={classes.list}>
        {["HOME", "SERVICES", "CONTACT", "GALLERY"].map((text) => (
          <Link
            to={text}
            style={{ textDecoration: "none" }}
            smooth
            className={classes.drawerLinks}
            onClick={(e) => {
              handleClose();
            }}
          >
            <div className={classes.listItem}>
              <ListItem key={text} primary={text} href={`#${text}`}>
                {text}
              </ListItem>
            </div>
          </Link>
        ))}
      </List>
      <div className={classes.phoneLink}>
        <a
          style={{ textDecoration: "none" }}
          href="tel:9158881203"
        >
          SCHEDULE FREE QUOTE: (915)888-1203
        </a>
      </div>
    </div>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}></MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
