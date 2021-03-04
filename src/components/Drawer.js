import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/jmaudiovideo.png";
import "typeface-anton";
import "typeface-ibm-plex-sans";
import { Link } from "react-scroll";
const useStyles = makeStyles({
  drawer: {
    width: "250px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
  },
  logoDiv: {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid gray",
  },
  logo: {
    height: "3rem",
    width: "11rem",
    margin: "0.5rem",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid lightgray",
    cursor: "pointer",
  },
  listItem: {
    color: "black",
    fontSize: "1.1rem",
  },
  phone: {
    marginTop: "2rem",
    fontWeight: "bold",
    textAlign: "center",
  },
});

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
      <div className={classes.logoDiv}>
        <img alt="mounted tv" className={classes.logo} src={logo} />
      </div>
      <List className={classes.list}>
        {["HOME", "SERVICES", "CONTACT", "GALLERY"].map((text) => (
          <Link
            to={text}
            style={{ textDecoration: "none" }}
            smooth
            className={classes.links}
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
      <div className={classes.phone}>
        <a
          style={{ textDecoration: "none" }}
          className={classes.phone}
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
