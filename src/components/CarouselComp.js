import { Carousel } from "react-bootstrap";
import img1 from "../assets/pic01.jpg";
import img2 from "../assets/pic02.jpg";
import img3 from "../assets/pic03.jpg";

const CarouselComp = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img className="d-block w-100" src={img2} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item intreval={3500}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
