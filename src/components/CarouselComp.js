import { Carousel } from "react-bootstrap";
import img1 from "../assets/pic01.jpg";
import img2 from "../assets/pic02.jpg";
import img3 from "../assets/pic03.jpg";
//Theme manipulation
import { makeStyles } from "@material-ui/core/styles";
import theme from "../assets/theme";

const useStyles = makeStyles({
  carousel: {
    paddingTop: "1rem",
    width: "100%",
  },
  items: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      height: "700px",
    },
  },
  image: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      margin: "0 auto",
      maxWidth: "850px",
      width: "100%",
      height: "100%",
    },
  },
});

const CarouselComp = () => {
  const classes = useStyles();
  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item className={classes.items} interval={3500}>
        <img className={classes.image} src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className={classes.items} interval={3500}>
        <img className={classes.image} src={img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item className={classes.items} intreval={3500}>
        <img className={classes.image} src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
