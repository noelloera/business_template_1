import { Typography, Grid, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import "typeface-ibm-plex-sans";

const useStyles = makeStyles({
  content: {
    paddingLeft: "0",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "4rem",
    },
  },
  divStyling: {
    margin: "auto",
    backgroundColor: "lightgray",
  },
  buttonStyling: {
    justifyContent: "flex-end",
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
    </div>
  );
};

export default Services;
