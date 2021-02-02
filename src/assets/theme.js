import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import "typeface-anton";
import "typeface-ibm-plex-sans";
const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: { main: "#5298fa", contrastText: "#fff" },
    secondary: green,
  },
  status: {
    danger: "orange",
  },

  typography: {
    h4: {
      fontFamily: "Anton",
      fontSize: "3.6rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "6rem",
      },
    },
    body1: {
      fontFamily: "Anton",
      fontSize: "1.35rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "2.3rem",
      },
    },
    body2: {
      fontFamily: "IBM plex sans",
      fontSize: "1.5rem",
    },
  },
});
export default theme;
