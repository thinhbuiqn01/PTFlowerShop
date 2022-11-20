import React, { useState } from "react";

import slide1 from "../assets/images/slides/434445_only-rose.jpg";
import slide2 from "../assets/images/slides/434433_63-tinh-thanh.jpg";
import slide3 from "../assets/images/slides/434410_dong-hanh-cung-nong-dan-viet-nam.jpg";
import slide4 from "../assets/images/slides/434408_giao-hang-nhanh-60p.jpg";
import Carousel from "react-bootstrap/Carousel";

const slides = [
  {
    title: "rose",
    src: slide1,
  },
  {
    title: "64 tinh thanh",
    src: slide2,
  },
  {
    title: "dong hanh cung nong dan viet",
    src: slide3,
  },
  {
    title: "giao hang nhanh",
    src: slide4,
  },
];
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div id="banner">
      <div
        className="wrapper"
        style={{
          width: "1140px",
          margin: "0 auto",
        }}
      >
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.src}
                alt={slide.title}
              /> 
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
