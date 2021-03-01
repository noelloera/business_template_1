import react from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Facebook, Sms, Email } from "@material-ui/icons";
import PhoneIcon from "@material-ui/icons/Phone";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles({
  footer: {
    margin: "auto",
    height: "29rem",
    width: "100%",
    backgroundColor: "#2E2E2E",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
  },
  content: {
    paddingTop: "5rem",
    width: "60%",
    margin: "auto",
    textAlign: "center",
    color: "white",
  },
  links: {
    padding: "2rem 0",
  },
  typography: {
    paddingBottom: "1rem",
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
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
        <div className={classes.links}>
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
