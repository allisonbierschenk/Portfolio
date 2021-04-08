import React from "react";
import "../assets/Nav.css";
import { HashLink as Link } from "react-router-hash-link";

export default function Nav() {
  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/#hero">
          <img className="image-logo" src="https://i.imgur.com/kUvekMS.png?1" />
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/#about">
          <h1>About Me</h1>
        </Link>
        <Link to="/#projects-dev">
          <h1>Developer Projects </h1>
        </Link>
        <Link to="/#projects-pm">
          <h1>Project Manager Projects</h1>
        </Link>
        <Link to="/#contact">
          <h1>Get In Touch</h1>
        </Link>
      </div>
    </div>
  );
}
