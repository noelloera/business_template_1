import SmsIcon from "@material-ui/icons/Sms";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../assets/theme";

const useStyles = makeStyles({
  button: {
    position: "fixed",
    zIndex: 10,
    top: "90%",
    left: "88%",
    [theme.breakpoints.down("md")]: {
      left: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "65%",
    },
  },
});

const Sms = (props) => {
  const classes = useStyles();
  return (
    <Button
      href="sms:+19158881203"
      className={classes.button}
      variant="contained"
      color="primary"
    >
      <SmsIcon></SmsIcon>Text Us!
    </Button>
  );
};

export default Sms;
