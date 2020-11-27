import React, { useState } from "react";
// import Input from "./Input";
// import TextArea from "./TextArea";
// import axios from "axios";
// import config from "../../../config.json";
import "./form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { email, name, message, phone } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const response = await axios.post(`${config.apiUrl}`, {
    //   name,
    //   email,
    //   phone,
    //   message,
    // });
    // console.log(response);
    alert("sent");
    window.location = "#";
  };
  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      {/* <span>Name&nbsp; &nbsp;</span> */}
      <input
        className="element"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
      />
      {/* <span>Email&nbsp; &nbsp;&nbsp;</span> */}
      <input
        className="element"
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email Address"
      />
      <br></br>
      {/* <span>Phone&nbsp;&nbsp;</span> */}
      <input
        id="contactno"
        className="element"
        type="text"
        name="phone"
        value={phone}
        onChange={onChange}
        placeholder="Contact Number"
      />
      <br></br>
      {/* <span>Message</span> */}
      <textArea
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        placeholder="Message Here"
        rows="5"
        cols="30"
      />
      <button className="custom_btn btn btn-info mt-1">Send Message</button>
    </form>
  );
};

export default Form;
