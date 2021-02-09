import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import image from "../assets/jmaudiovideo.png";
import "typeface-anton";
import "typeface-ibm-plex-sans";
import { Link } from "react-scroll";
import Services from "./Services";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  logo: {
    width: "100%",
  },
  listItems: {
    color: "black",
    fontWeight: "bold",
    fontSize: "1.3rem",
    margin: "auto",
  },
  phone: {
    marginTop: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <a href="/">
        <img alt="mounted tv" className={classes.logo} src={image} />
      </a>
      <Divider />
      <List>
        {["HOME", "SERVICES"].map((text, index) => (
          <ListItem button key={text}>
            <Link
              to={text}
              smooth="true"
              style={{ textDecoration: "none" }}
              className={classes.listItems}
              primary={text}
              onClick={(e) => {
                handleClose();
              }}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["CONTACT", "GALLERY"].map((text, index) => (
          <ListItem button key={text}>
            <Link
              style={{ textDecoration: "none" }}
              underline="none"
              className={classes.listItems}
              primary={text}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className={classes.phone}>
        <Link
          style={{ textDecoration: "none" }}
          className={classes.phone}
          href="tel:9158881203"
        >
          SCHEDULE FREE QUOTE: (915)888-1203
        </Link>
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
