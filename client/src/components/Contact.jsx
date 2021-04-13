import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../assets/Contact.css";

export default function Contact() {
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const { name, email, message } = formData;

  const handleChange1 = (e) => {
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

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (value !== "") {
      setIsActive2(true);
    } else {
      setIsActive2(false);
    }
  };

  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (value !== "") {
      setIsActive3(true);
    } else {
      setIsActive3(false);
    }
  };

  // const submit = () => {
  //   history.goBack();
  // };

  return (
    <div id="contact" className="contact">
      <form
        action="https://getform.io/f/3f64d56f-15f0-4642-8a98-1b36b4e2b663"
        method="POST"
        className="form-container"
      >
        <div className="direct">
          <p>
            {" "}
            Email me |{" "}
            <a className="email-info" href="mailto:allisonreynoldsc@gmail.com">
              allisonreynoldsc@gmail.com
            </a>
          </p>
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
            onChange={handleChange1}
          />
        </div>
        <div className="float-label-2">
          <label className={isActive2 ? "Active" : ""} htmlFor="email">
            Email:
          </label>
          <input
            className="email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange2}
          />
        </div>
        <div className="float-label-3">
          <label className={isActive3 ? "Active" : ""} htmlFor="message">
            Leave a message...
          </label>
          <input
            className="message"
            type="text"
            name="message"
            value={message}
            onChange={handleChange3}
          />
        </div>
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
