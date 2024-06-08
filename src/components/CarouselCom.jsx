import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img3 from "../assets/Carousel-3.jpg"
import img2 from "../assets/Carousel-2.jpg"
import img1 from "../assets/Carousel-1.jpg"

const CarouselCom = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={img3} className="img-fluid" alt="first-img" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={img1} className="img-fluid" alt="second-img" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className="img-fluid" alt="third-img" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCom;
