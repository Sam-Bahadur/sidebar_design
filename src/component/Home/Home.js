import React from "react";
import Slideshow from "../SlideShow/SlideShow";
import style from "./home.module.scss";
import Background from "./../Background/Background";
import Contactme from "./../Contactme/Contactme";

export default function Home() {
  return (
    <div className={style.body}>
      <Slideshow />
      <Background />
      <Contactme />
    </div>
  );
}
