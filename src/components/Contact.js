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
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import "typeface-ibm-plex-sans";
import "typeface-anton";
import PhoneIcon from "@material-ui/icons/Phone";
import IconButton from "@material-ui/core/IconButton";

import { FormControl, FormLabel } from "@material-ui/core";
import { Facebook, Sms, Email } from "@material-ui/icons";
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
    margin: "2rem, 0",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "row",
  },
  labels: {
    fontFamily: "IBM plex sans",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    textAlign: "left",
    fontWeight: "bold",
  },
  form: {
    padding: "5rem",
    width: "85%",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
    [theme.breakpoints.only("xs")]: {
      padding: "1rem",
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
    fontFamily: "IBM plex sans",
    marginTop: "1.5rem",
    width: "80%",
    fontSize: "12px",
  },
  button: {
    marginTop: "2rem",
    marginLeft: "1rem",
    width: "100px",
  },
  labelRoot: {
    fontFamily: "IBM plex sans",
    "&$labelFocused": {
      fontFamily: "IBM plex sans",
    },
  },
  labelFocused: {},
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
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
                className={classes.fields}
                name="name"
                onChange={handleChange}
                label="name:"
              />
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
                className={classes.fields}
                name="email"
                onChange={handleChange}
                label="email:"
              />
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused,
                  },
                }}
                className={classes.fields}
                name="phone"
                onChange={handleChange}
                label="phone:"
              />
              <FormLabel className={classes.labels} component="legend">
                JOB DESCRIPTION:
              </FormLabel>
              <FormControl component="fieldset">
                <FormControlLabel
                  className={classes.labelRoot}
                  control={
                    <Checkbox
                      className={classes.labelRoot}
                      color="primary"
                      checked={tvInstall}
                      onChange={handleChange}
                      name="tvInstall"
                    />
                  }
                  label={
                    <Typography variant="h5">Television Mounting</Typography>
                  }
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
                  label={<Typography variant="h5">Home Audio Setup</Typography>}
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
                  label={
                    <Typography variant="h5">Television Mounting</Typography>
                  }
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
              <IconButton href="tel:9158881203">
                <PhoneIcon />
              </IconButton>
              <IconButton href="sms:+19158881203">
                <Sms />
              </IconButton>
              <IconButton href="mailto:loera.noel@gmail.com?subject=Service Requested">
                <Email />
              </IconButton>
              <IconButton href="https://www.facebook.com/profile.php?id=100011054640194">
                <Facebook />
              </IconButton>
            </div>
          </Paper>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
