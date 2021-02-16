import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-anton";
import "typeface-ibm-plex-sans";
const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: { main: "#5298fa", contrastText: "#fff" },
    secondary: { main: "#fff", contrastText: "#fff" },
  },
  status: {
    danger: "orange",
  },

  typography: {
    h4: {
      fontFamily: "Anton",
      fontSize: "3rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "6rem",
      },
    },
    h6: {
      fontFamily: "IBM plex sans",
      color: "white",
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: "Anton",
      fontSize: "1.35rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "2rem",
      },
    },
    body2: {
      fontFamily: "IBM plex sans",
      fontSize: "1.1rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
    },
    button: {
      fontFamily: "IBM plex sans",
      fontSize: "1rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "1.3rem",
      },
    },
  },
});
export default theme;
