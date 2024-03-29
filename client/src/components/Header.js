import { Typography, Grid, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import CarouselComp from "./CarouselComp";
import Fade from "react-reveal/Fade";
import useStyles from "./useStyles";

const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.content}
      alignItems="center"
      direction="row-reverse"
    >
      <Grid item className={classes.carouselComp} md={7} xs={12}>
        <Fade>
          <CarouselComp />
        </Fade>
      </Grid>
      <Grid item alignItems="flex-start" md={5} xs={12}>
        <Box m={4}>
          <Fade left>
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
              Modernize your home today with a professionally installed TV
              and/or home stereo sound system. <br></br>El Paso's highest rated
              home theater installation company.
            </Typography>
            <div className={classes.divStyling}>
              <Button
                className={classes.buttonStyling}
                variant="contained"
                color="primary"
                onClick={(e) => {
                  window.location.href = "tel://PhoneNumber";
                }}
              >
                Schedule Now
              </Button>
            </div>
          </Fade>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
