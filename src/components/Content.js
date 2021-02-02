import { Typography, Grid, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
const useStyles = makeStyles({
  content: {
    paddingLeft: "0",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "4rem",
    },
  },
  divStyling: {
    marginTop: "2rem",
    display: "flex",
  },
  buttonStyling: {
    justifyContent: "flex-start",
  },
});

const Content = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item container className={classes.content}>
        <Box m={3}>
          <Grid alignItems="flex-start" item md={9} xs={12}>
            <Typography gutterBottom align="left" variant="body1">
              Video & Audio Mounting Service
            </Typography>
            <Typography align="left" variant="h4">
              TV MOUNTING
            </Typography>
            <Typography color="primary" align="left" variant="h4">
              SERVICE
            </Typography>
            <Typography gutterBottom align="left" variant="body2">
              Modernize your home today with a professionally installed TV or
              Surround Sound system. El Paso's highest rated home theater
              installation company.
            </Typography>
            <div className={classes.divStyling}>
              <Button
                className={classes.buttonStyling}
                variant="contained"
                color="primary"
              >
                Schedule Now
              </Button>
            </div>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Content;
