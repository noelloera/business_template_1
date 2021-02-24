import { createMuiTheme } from "@material-ui/core/styles";
import "typeface-anton";
import "typeface-ibm-plex-sans";
const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: { main: "#5298fa", contrastText: "#fff" },
    secondary: { main: "#000", contrastText: "#fff" },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 360,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    h4: {
      fontFamily: "Anton",
      fontSize: "3rem",
      [defaultTheme.breakpoints.up("md")]: {
        fontSize: "5rem",
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
        fontSize: "1.25rem",
      },
      [defaultTheme.breakpoints.only("xs")]: {
        fontSize: "1rem",
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
