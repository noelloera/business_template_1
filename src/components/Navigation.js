import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";

const style = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));
//Add flex gridding
const Navigation = (props) => {
  const classes = style();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.typographyStyles} variant="h5">
          BUSINESS NAME
        </Typography>
        <Button>user</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
