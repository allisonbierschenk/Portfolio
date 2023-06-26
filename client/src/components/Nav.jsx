import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "../assets/Nav.css";

function Nav(props) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const burgerClose = () => {
    setBurgerOpen((curr) => !curr);
  };

  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/">
          <img className="image-logo" alt="stars" src="https://i.imgur.com/kUvekMS.png?1" />
        </Link>
        <HamburgerMenu setBurger={setBurgerOpen} />
      </div>
      <div className="right-nav" id={burgerOpen ? null : "open"}>
        <Link to="/about" onClick={burgerClose}>
          <h1>About Me</h1>
        </Link>
        <Link to="/developer-projects" onClick={burgerClose}>
          <h1>Developer Projects </h1>
        </Link>
        <Link to="/project-manager-projects" onClick={burgerClose}>
          <h1>Project Manager Projects</h1>
        </Link>
        <Link to="/contact" onClick={burgerClose}>
          <h1>Get In Touch</h1>
        </Link>
        <a
          href="https://drive.google.com/file/d/1IHj0csx4PW22ulIK9bIC6F18PA9pCapW/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <h1 className="resume">resume</h1>
        </a>
      </div>
    </div>
  );
}

export default Nav;
