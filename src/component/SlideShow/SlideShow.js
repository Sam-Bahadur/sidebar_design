import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./slideshow.module.scss";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slideshow_container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
        <Carousel.Item>
          <img className={style.fit} src={image1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className={style.fit} src={image2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
