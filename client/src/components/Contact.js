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
import PhoneIcon from "@material-ui/icons/Phone";
import IconButton from "@material-ui/core/IconButton";
import { FormControl, FormLabel } from "@material-ui/core";
import { Facebook, Sms, Email } from "@material-ui/icons";
import makeStyles from "@material-ui/styles/makeStyles";
import theme from "../assets/theme.js";
import "typeface-ibm-plex-sans";
import "typeface-anton";
const useStyles = makeStyles({
  contact: {
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
  contactForm: {
    margin: "2rem, 0",
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "row",
  },
  labels: {
    fontFamily: "IBM plex sans",
    paddingTop: "3rem",
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
  icons: {
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
    //POST request will make a call to the server
  };
  const { tvInstall, audioInstall, gameConsole } = state;

  return (
    <div className={classes.contact}>
      <Typography className={classes.divider} variant="body2" id="CONTACT">
        CONTACT
      </Typography>
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item md={8} xs={12}>
          <Paper className={classes.contactForm} elevation={3}>
            <form className={classes.form}>
              <FormLabel className={classes.labels} component="legend">
                CONTACT FOR A FREE QUOTE:
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
            <div className={classes.icons}>
              <IconButton href="tel:phonenumber">
                <PhoneIcon fontSize="large" />
              </IconButton>
              <IconButton href="sms:+phonenumber">
                <Sms fontSize="large" />
              </IconButton>
              <IconButton href="mailto:email?subject=Service Requested">
                <Email fontSize="large" />
              </IconButton>
              <IconButton href="FacebookURL">
                <Facebook fontSize="large" />
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
