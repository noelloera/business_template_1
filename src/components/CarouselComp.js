import { Carousel } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src="https://www.w3schools.com/bootstrap/la.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>First slide inner text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-100"
          src="https://www.w3schools.com/bootstrap/chicago.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Second slide inner text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item intreval={3500}>
        <img
          className="d-block w-100"
          src="https://www.w3schools.com/bootstrap/ny.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Third slide inner text</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
