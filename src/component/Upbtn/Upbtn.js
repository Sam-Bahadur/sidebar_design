import "./upbtn.scss";
import React, { Component } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default class Upbtn extends Component {
  state = {
    scrolled: false,
  };
  topclickhandler = () => {
    window.scrollTo(0, 0);
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 180;
      if (isTop !== true) {
        this.setState({
          scrolled: true,
        });
      } else this.setState({ scrolled: false });
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div className={this.state.scrolled ? "up_btn_show" : "up_btn"}>
        <h5 onClick={this.topclickhandler}>
          <AiOutlineArrowUp />
        </h5>
      </div>
    );
  }
}
