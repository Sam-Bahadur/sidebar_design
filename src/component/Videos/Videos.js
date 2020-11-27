import React from "react";
import style from "./videos.module.scss";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { Component } from "react";
import Video from "./Video";
import ytdata from "./youtube.json";

export default class Videos extends Component {
  render() {
    return (
      <div className={style.video_container}>
        <div className={style.videos}>
          {/* <img src={ytdata[0].image} alt="" /> */}
          {ytdata.map((data) => {
            return (
              <Video
                key={data.id}
                yid={data.yid}
                desc={data.desc}
                yimg={data.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
