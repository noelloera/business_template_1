import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

//Add flex gridding 
const Navigation = (props) => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">BUSINESS NAME</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
