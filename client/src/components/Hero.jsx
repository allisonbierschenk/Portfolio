import React, { Component } from "react";
import ParticlesBg from "particles-bg";

import "../assets/Hero.css";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <ParticlesBg color="#f72585" type="cobweb" bg={true} />
      <div className="socia-media">
        {/* <img className="icon" src="https://i.imgur.com/OUTCgGe.png" />
        <img className="icon" src="https://i.imgur.com/MiKSPkq.png" /> */}
      </div>
      {/* <div className="construction"> ⊝This site is under construction⊝</div> */}
      <div className="hello">Welcome! I'm Allison Bierschenk</div>
      <div className="container">
        <div className="image-hero">
          <img
            src="https://i.imgur.com/3UEODg1.jpg?1"
            className="img"
            alt="allison-bierschenk"
          ></img>
        </div>
      </div>
    </div>
  );
}
