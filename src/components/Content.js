import react from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
const Content = () => {
  return (
    <div>
      <Grid item container>
        <Box m={3}>
          <Grid item sm={2} xs={0} />
          <Grid item md={8} xs={12}>
            <Box ml={0.5}>
              <Typography align="left" variant="body1">
                Video & Audio Mounting Service
              </Typography>
            </Box>
            <Typography align="left" variant="h4">
              TV Mounting
            </Typography>
            <Typography align="left" variant="h4">
              Service
            </Typography>
            <Typography align="left" variant="h6">
              Modernize your home today with a professionally installed TV or
              Surround Sound system. El Paso's highest rated home theater
              installation company.
            </Typography>
            <Button variant="outlined" color="primary">
              Schedule Now
            </Button>
          </Grid>
          <Grid item sm={2} xs={0} />
        </Box>
      </Grid>
    </div>
  );
};

export default Content;
