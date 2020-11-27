import React, { useState } from "react";
import style from "./Mobile.module.scss";
import { Link } from "react-router-dom";

export default function Check() {
  const [modalopen, setmodalopen] = useState(false);
  return (
    <>
      <div className={style.burger} onClick={() => setmodalopen(true)}>
        <div className={style.sticks}>
          <div className={style.stick}></div>
          <div className={style.stick}></div>
          <div className={style.stick}></div>
        </div>
      </div>
      <div className={modalopen ? style.modalview : style.sticks}>
        {modalopen ? (
          <>
            <div
              className={style.burger_modal}
              onClick={() => setmodalopen(false)}
            >
              <div className={style.sticks}>
                <div className={style.stick}></div>
                <div className={style.stick}></div>
                <div className={style.stick}></div>
              </div>
            </div>
            <div>
              <ul>
                <li onClick={() => setmodalopen(false)}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => setmodalopen(false)}>
                  <Link to="/aboutme">About</Link>
                </li>
                <li onClick={() => setmodalopen(false)}>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
