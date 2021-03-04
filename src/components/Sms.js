import SmsIcon from "@material-ui/icons/Sms";
import { Button } from "@material-ui/core";
import useStyles from "./useStyles";

const Sms = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        href="sms:+19158881203"
        className={classes.sms}
        variant="contained"
        color="primary"
      >
        Text Us!<SmsIcon className={classes.smsIcon}></SmsIcon>
      </Button>
    </div>
  );
};

export default Sms;
