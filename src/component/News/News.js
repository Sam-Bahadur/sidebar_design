import React, { Component } from "react";
import style from "./news.module.scss";
import ndata from "./news.json";
import NewsSingle from "./NewsSingle.js";

export default class News extends Component {
  render() {
    return (
      <div className={style.news_container}>
        {ndata.map((data) => {
          return (
            <NewsSingle
              key={data.id}
              {...data}
              // date={data.date}
              // year={data.year}
              // title={data.title}
              // desc={data.sdesc}
              // link={data.link}
            />
          );
        })}
      </div>
    );
  }
}
