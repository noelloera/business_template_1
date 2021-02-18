import { Typography, Grid, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";
import CarouselComp from "./CarouselComp";

//Header padding right not zero
const useStyles = makeStyles({
  content: {
    marginLeft: "0",
    [theme.breakpoints.up("md")]: {
      marginLeft: "3rem",
      paddingBottom: "10rem",
    },
    paddingBottom: "2rem",
  },
  carousel: {
    paddingRight: "0",
    [theme.breakpoints.up("md")]: {
      paddingRight: "3rem",
    },
  },
  divStyling: {
    marginTop: "0.5rem",
    display: "flex",
    paddingBottom: "4rem",
  },
  buttonStyling: {
    justifyContent: "flex-start",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.content}
      alignItems="center"
      direction="row-reverse"
    >
      <Grid item className={classes.carousel} md={7} xs={12}>
        <CarouselComp />
      </Grid>
      <Grid item alignItems="flex-start" md={5} xs={12}>
        <Box m={3}>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
