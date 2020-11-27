import React, { Component } from "react";
import styles from "./contactme.scss";
import Form from "./../Contact/form/Form";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
export default class Contactme extends Component {
  render() {
    return (
      <div className="contactme">
        <h4>Contact me</h4>
        <div className="contact_seperation"></div>

        <div className="contact_me_flex">
          <div className="contact_me_content">
            <h3>Sharmila Karki</h3>
            <span className="location">
              <ImLocation />
            </span>
            Anamnagar, Kathmandu<br></br>
            <span className="phone">
              <FaPhoneAlt />
            </span>
            +977-9851073787<br></br>
            <span className="email">
              <GrMail />
            </span>
            karkisharmila@gmail.com<br></br>
            <a href="http://facebook.com/sharmila.karki.7" target="_blank">
              <span>
                <FaFacebookSquare />
              </span>
              Facebook
            </a>
          </div>
          <Form />
        </div>
      </div>
    );
  }
}
