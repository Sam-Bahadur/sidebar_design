import React from "react";
import style from "./sidebar.module.scss";
import { NavLink } from "react-router-dom";
// import logo from "img/logo.png";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.navlist}>
        <li>
          <img src="img/logo.png" alt="logo" />
        </li>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutme">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/videos">Videos</NavLink>
        </li>
        {/* <li>
          <NavLink to="/publication">Publications</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li> */}
      </div>
    </div>
  );
}
