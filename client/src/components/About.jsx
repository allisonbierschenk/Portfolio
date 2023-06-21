import React from "react";
import "../assets/About.css";

export default function About() {
  return (
    <div id="about" className="about-container">
      <h2 className="question-1">Who am I?</h2>
      <div className="answer">
        I am a software engineer converted from a project manager.
      </div>
      <h2 className="question-2">Where did I come from?</h2>
      <div className="answer">
        I have had a career in tech for 6 years starting in sales and most
        recently in project management.
      </div>
      <h2 className="question-4">Me as an engineer</h2>
      <div className="answer">
        I am motivated by building innovative, fast, effective, user-friendly solutions to problems. I see the minutiae in everything. Typos stick out like a sore thumb. It would take more energy for me to ignore these things than to fix them. I am driven by delivering perfection and strive to achieve the highest of expectations in every setting I am in.
        <br></br>
        I have spent the last year with a small team of engineers at DemandJump, converting legacy code into a fast single-page app using React, Node, Express, and Typescript. We increased the speed and useability of the website.
      </div>
      <h2 className="question-3">If you are interested in my project management career</h2>
      <div className="answer">
        I spent 4 years as lead project-manager at a Forbes-recognized digital
        marketing agency. I managed the build, launch, and post-launch monthly
        maintenance of 15+ websites.
      </div>
    </div>
  );
}
