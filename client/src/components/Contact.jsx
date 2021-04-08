import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../assets/Contact.css";

export default function Contact() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const history = useHistory();
  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // const submit = () => {
  //   history.goBack();
  // };

  return (
    <div id="contact" className="contact">
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          // submit();
        }}
      >
        <div className="direct">
          <p className="email-info"> Email me >> allisonreynoldsc@gmail.com</p>
          <div>or fill out the form below...</div>
        </div>
        <div className="float-label-1">
          <label className={isActive ? "Active" : ""} htmlFor="name">
            Name:
          </label>
          <input
            className="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="float-label-2">
          <label className={isActive ? "Active" : ""} htmlFor="email">
            Email:
          </label>
          <input
            className="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="float-label-3">
          <label className={isActive ? "Active" : ""} htmlFor="message">
            Leave a message...
          </label>
          <textarea
            className="message"
            type="text"
            name="message"
            value={message}
            onChange={handleChange}
          />
        </div>
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}
