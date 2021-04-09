import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import "../assets/Nav.css";

function Nav(props) {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="left-nav">
        <Link to="/#hero">
          <img className="image-logo" src="https://i.imgur.com/kUvekMS.png?1" />
        </Link>
        <HamburgerMenu setBurger={setBurgerOpen} />
      </div>
      <div className="right-nav" id={burgerOpen ? "notopen" : "open"}>
        <Link to="/#about">
          <h1 onClick={!burgerOpen}>About Me</h1>
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
        <a
          href="https://drive.google.com/file/d/1EQIiW-R-AqbgLK3esL_H3H-189mSESso/view?usp=sharing"
          target="_blank"
        >
          <h1 className="resume">resume</h1>
        </a>
      </div>
    </div>
  );
}

export default Nav;
