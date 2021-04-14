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
      <h2 className="question-3">More about project management...</h2>
      <div className="answer">
        I spent 4 years as lead project-manager at a Forbes-recognized digital
        marketing agency. I managed the build, launch, and post-launch monthly
        maintenance of 15+ websites.
      </div>
      <h2 className="question-4">And a little bit more about me...</h2>
      <div className="answer">
        I am passionate about coming up with innovative, fast, concise, user
        friendly solutions to problems. I am geared towards problem solving and
        collaborating in order to improve. I also work well under pressure; even
        as a server in the food industry, I was motivated by the fast moving
        culture and providing the best customer service possible. I look forward
        to combining these skills as a software engineer.
      </div>
    </div>
  );
}
