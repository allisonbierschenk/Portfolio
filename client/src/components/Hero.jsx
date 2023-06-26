import React from "react";

import "../assets/Hero.css";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="hello">Discover the Engineering Journey of Allison Bierschenk</div>
      <div className="image-hero">
        <img
          src="https://i.imgur.com/3UEODg1.jpg?1"
          className="my-pic"
          alt="allison-bierschenk"
        ></img>
      </div>
    </div>
  );
}
