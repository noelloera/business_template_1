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
    marginTop: "0.5rem",
    display: "flex",
    paddingBottom: "6rem",
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
          <Grid alignItems="flex-start" item md={8} xs={12}>
            <Typography gutterBottom align="left" variant="body1">
              Video & Audio Mounting Service
            </Typography>
            <Typography align="left" variant="h4">
              TV Mounting
            </Typography>
            <Typography color="primary" align="left" variant="h4">
              Service
            </Typography>
            <Typography align="left" variant="body2">
              Modernize your home today with a professionally installed TV or
              Surround Sound system. El Paso's highest rated home theater
              installation company.
            </Typography>
            <div className={classes.divStyling}>
              <Button
                className={classes.buttonStyling}
                variant="contained"
                color="primary"
                onClick={(e) => {
                  window.location.href = "tel://9158881203";
                }}
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
