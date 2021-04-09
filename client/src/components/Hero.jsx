import React from "react";
import "../assets/Hero.css";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="socia-media">
        {/* <img className="icon" src="https://i.imgur.com/OUTCgGe.png" />
        <img className="icon" src="https://i.imgur.com/MiKSPkq.png" /> */}
      </div>
      {/* <div className="construction"> ⊝This site is under construction⊝</div> */}
      <div className="hello">Welcome! I'm Allison Bierschenk</div>
      <img
        className="my-pic"
        src="https://i.imgur.com/3UEODg1.jpg?1"
        alt="allison-bierschenk"
      ></img>
    </div>
  );
}
