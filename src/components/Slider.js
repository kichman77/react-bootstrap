import React from "react";
import { Carousel } from "react-bootstrap";

import img1 from "../images/pexels-photo-351263.jpeg";
import img2 from "../images/pexels-photo-1034661.jpeg";
import img3 from "../images/pexels-photo-3689532.jpeg";

function Slider(params) {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "500px" }}>
        <img src={img1} alt="picture" className="d-block w-100" />
        <Carousel.Caption>
          <h3>img</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nam.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img src={img2} alt="picture" className="d-block w-100" />
        <Carousel.Caption>
          <h3>img1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nam.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img src={img3} alt="picture" className="d-block w-100" />
        <Carousel.Caption>
          <h3>img1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nam.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Slider;
