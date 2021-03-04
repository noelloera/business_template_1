import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Facebook, Sms, Email } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./useStyles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.footerContent}>
        <Typography className={classes.typography} variant="h6">
          At your service!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            window.location.href = "tel://9158881203";
          }}
        >
          Schedule Now
        </Button>
        <div className={classes.footerIcons}>
          <IconButton href="tel:9158881203">
            <PhoneIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton href="sms:+19158881203">
            <Sms color="primary" fontSize="large" />
          </IconButton>
          <IconButton href="mailto:loera.noel@gmail.com?subject=Service Requested">
            <Email color="primary" fontSize="large" />
          </IconButton>
          <IconButton href="https://www.facebook.com/profile.php?id=100011054640194">
            <Facebook color="primary" fontSize="large" />
          </IconButton>
        </div>
        <p>All rights reserved. </p>
        <p>©JMAudioVideo</p>
      </div>
    </div>
  );
};

export default Footer;
