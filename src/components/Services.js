import { Typography, Grid, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import "typeface-ibm-plex-sans";
import image4 from "../assets/pic04.jpg";
import image5 from "../assets/pic05.jpg";

const useStyles = makeStyles({
  content: {
    paddingLeft: "0",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "4rem",
    },
  },
  divStyling: {
    margin: "auto",
    backgroundColor: "gray",
  },
  buttonStyling: {
    justifyContent: "flex-end",
  },
  imageStyling: {
    width: "100%",
  },
});

const Services = () => {
  const classes = useStyles();
  return (
    <div id="SERVICES">
      <div className={classes.divStyling}>
        <Typography className={classes.divider} variant="h6">
          SERVICES
        </Typography>
      </div>
      <Grid item container className={classes.content}>
        <img className={classes.imageStyling} src={image4}></img>

        <Box m={3}>
          <Grid alignItems="flex-end" item md={8} xs={12}>
            <Typography align="right" variant="h4">
              Professional
            </Typography>
            <Typography color="primary" align="right" variant="h4">
              TV Mounting
            </Typography>
            <Typography gutterBottom align="right" variant="body2">
              Providing excpetional customer service with residential and
              commercial installations for the best Home Theatre expirience.{" "}
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid item container className={classes.content}>
        <img className={classes.imageStyling} src={image5}></img>

        <Box m={3}>
          <Grid alignItems="flex-start" item md={8} xs={12}>
            <Typography align="left" variant="h4">
              Expert
            </Typography>
            <Typography color="primary" align="left" variant="h4">
              Home Audio Setup
            </Typography>
            <Typography gutterBottom align="left" variant="body2">
              Providing excpetional customer service with residential and
              commercial installations for the best Home Theatre expirience.{" "}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Services;
