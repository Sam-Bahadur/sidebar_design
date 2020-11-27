import React from "react";
import ModalVideo from "react-modal-video";
import { Component } from "react";
import style from "./videos.module.scss";

export default class video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div className={style.video}>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.props.yid}
          onClose={() => this.setState({ isOpen: false })}
        />
        <img src={this.props.yimg} alt="" onClick={this.openModal} />
        <h6>{this.props.desc}</h6>
      </div>
    );
  }
}
