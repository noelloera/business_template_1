import { Carousel } from "react-bootstrap";
import img1 from "../assets/pic01.jpg";
import img2 from "../assets/pic02.jpg";
import img3 from "../assets/pic03.jpg";
import useStyles from "./useStyles";

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
