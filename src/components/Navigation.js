import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";
import image from "../assets/audiovideoinstalllogo.png";

const style = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
  navStyle: {
    backgroundColor: "white",
  },
  logo: {
    width: "100px",
  },
}));
//Add flex gridding
const Navigation = (props) => {
  const classes = style();
  return (
    <AppBar className={classes.navStyle} position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <a href="#">
          <img className={classes.logo} src={image} />
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
