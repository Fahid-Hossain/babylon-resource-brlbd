import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/la-paz-bolivia-city-skyline-sky-background_596401-662.jpg?size=626&ext=jpg"
            alt="First slide"
          />
         
          {/* <Carousel.Caption>
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-world-rabies-day_23-2149576978.jpg?w=1800&t=st=1666852968~exp=1666853568~hmac=8789f9cac094a502fadb0d1d23cc3c465ba2cae4c1bf998deb92d6a216e31897"
            alt="Second slide"
          /> */}
          {/* <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        {/* </Carousel.Item> */}
      </Carousel>
    </>
  );
};

export default Slider;
