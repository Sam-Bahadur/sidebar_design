import React, { Component } from "react";
import style from "./footer.module.scss";
// import { FaRegCopyright } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className={style.footer}>
          {/* <div className="empty_div"></div> */}
          <div className={style.copyright}>
            {/* <FaRegCopyright /> */}
            &nbsp;sharmilakarki.com
          </div>
          <div className={style.media_name}>
            designed & developed by
            <span>MAYAN MEDIA</span>
          </div>
        </div>
      </>
    );
  }
}
