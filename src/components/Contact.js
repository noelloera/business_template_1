import {
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from "@material-ui/core";
import react from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import "typeface-ibm-plex-sans";
import { FormControl, FormLabel } from "@material-ui/core";
const useStyles = makeStyles({
  section: {
    backgroundColor: "#EFEFEF",
  },
  divider: {
    display: "flex",
    height: "3rem",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "black",
  },
  contact: {
    marginTop: "4rem",
    display: "flex",
    flexDirection: "row",
  },
  labels: {
    padding: "2rem 0",
    textAlign: "left",
  },
  form: {
    padding: "5rem",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    [theme.breakpoints.only("xs")]: {
      padding: 0,
      paddingLeft: "1rem",
    },
  },
  links: {
    display: "flex",
    width: "15%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  fields: {
    marginTop: "2rem",
    width: "80%",
    fontSize: "10px",
  },
  button: {
    marginTop: "2rem",
    marginLeft: "1rem",
    width: "100px",
  },
});

const Contact = () => {
  const classes = useStyles();
  const [state, setState] = react.useState({
    name: "",
    email: "",
    phone: "",
    tvInstall: false,
    audioInstall: false,
    gameConsole: false,
    filled: false,
  });
  const handleChange = (event) => {
    if ([event.target.name] === "name" || "email" || "password") {
      setState({ ...state, [event.target.name]: event.target.value });
    }
    if (event.target.checked) {
      setState({ ...state, [event.target.name]: event.target.checked });
    }
    if (state.name && state.email && state.phone) setState({ filled: true });
  };

  const handleSubmit = (event) => {
    console.log(state);
    //This is where the POST request will be made to server
    var link = `mailto:loera.noel@gmail.com&subject=TV Install:${state.tvInstall}, Audio Install:${state.audioInstall}, Game Console: ${state.gameConsole}&body=${state.name}, ${state.email}, ${state.phone}`;
    state.filled
      ? (window.location.href = link)
      : alert("all fields must be filled out");
  };
  const { tvInstall, audioInstall, gameConsole } = state;

  return (
    <div className={classes.section}>
      <Typography className={classes.divider} variant="body2" id="CONTACT">
        CONTACT
      </Typography>
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item md={8} xs={12}>
          <Paper className={classes.contact} elevation={3}>
            <form className={classes.form}>
              <FormLabel className={classes.labels} component="legend">
                CONTACT NOW FOR FREE QUOTE:
              </FormLabel>
              <TextField
                className={classes.fields}
                name="name"
                onChange={handleChange}
                label="Name:"
              />
              <TextField
                className={classes.fields}
                name="email"
                onChange={handleChange}
                label="Email:"
              />
              <TextField
                className={classes.fields}
                name="phone"
                onChange={handleChange}
                label="Phone:"
              />
              <FormLabel className={classes.labels} component="legend">
                JOB DESCRIPTION:
              </FormLabel>
              <FormControl component="fieldset">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={tvInstall}
                      onChange={handleChange}
                      name="tvInstall"
                    />
                  }
                  label="Television Installation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={audioInstall}
                      onChange={handleChange}
                      name="audioInstall"
                    />
                  }
                  label="Home Audio Setup"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={gameConsole}
                      onChange={handleChange}
                      name="gameConsole"
                    />
                  }
                  label="Themed Game Console"
                />
              </FormControl>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
            <div className={classes.links}>
              <h1>f</h1>
              <h1>f</h1>
              <h1>f</h1>
              <h1>f</h1>
            </div>
          </Paper>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
