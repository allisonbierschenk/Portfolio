import React from "react";
import "../assets/DeveloperProjects.css";
import Nav from "./Nav";

export default function DeveloperProjects() {
  console.log("hello")
  return (
    <>
      <Nav/>
    <div id="projects-dev" className="intro">
      <div className="projects-intro">Coding projects as the Developer...</div>
      <div className="projects-container">
        <div className="each-project-container showcase">
          <img className="image" alt="demandjump homepage" src="https://i.imgur.com/PMJR5xR.png?1" />
          <div className="details">
            <div>
              <div className="title">DemandJump</div>
              <div className="description">
                Full stack website built with React, Typescript, Express, Node.js, and RESTful API built by a team of 4.
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://beta.app.demandjump.com/home?pid=51" target="_blank" rel="noreferrer">
              <button className="button">See My Site</button>
            </a>
            <a
              href="https://github.com/allisonbierschenk?tab=overview "
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">See My Contributions</button>
            </a>
            </div>
          </div>
        <div className="each-project-container">
          <img className="image" alt="travel like a local blog" src="https://i.imgur.com/oBIeaCe.jpg?1" />
          <div className="details">
            <div>
              <div className="title">Travel Like A Local</div>
              <div className="description">
                Full stack website built with React, Ruby on Rails, and RESTful
                API built by me. The app features user authentication and full
                CRUD.
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://travel-like-a-local.netlify.app" target="_blank" rel="noreferrer">
              <button className="button">See My Site</button>
            </a>
            <a
              href="https://github.com/allisonbierschenk/Travel-Like-A-Local"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">See My Code</button>
            </a>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="driving app" src="https://i.imgur.com/7GZ7Xb4.jpg?1" />
          <div className="details">
            <div>
              <div className="title">Sunday Driver</div>
              <div className="description">
                A team collaboration full stack app built with React, Express
                and MongoDB. The app features user authentication and full CRUD.
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://sundaydriver.netlify.app/" target="_blank" rel="noreferrer">
              <button className="button">See My Site</button>
            </a>
            <a
              href="https://github.com/allisonbierschenk/car-app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">See My Code</button>
            </a>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="workout tracker" src="https://i.imgur.com/ctYDaTC.jpg" />
          <div className="details">
            <div>
              <div className="title">WorkOut Tracker App</div>
              <div className="description">
                A front-end app built with full CRUD utilizing a custom Airtable
                RESTful API. Built with React, customized CSS, and hosted on
                Netlify.
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="https://whiteboard-workout.netlify.app/" target="_blank" rel="noreferrer">
              <button className="button">See My Site</button>
            </a>
            <a
              href="https://github.com/allisonbierschenk/Work_it_out"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">See My Code</button>
            </a>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="workout" src="https://i.imgur.com/Zukotas.jpg" />
          <div className="details">
            <div>
              <div className="title">GoodNews</div>
              <div className="description">
                A responsive app with a RESTful API integration.
              </div>
            </div>
          </div>
          <div className="buttons">
            <a
              href="https://allisonbierschenk.github.io/good-news/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">See My Site</button>
            </a>
            <a
              href="https://github.com/allisonbierschenk/good-news"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button">See My Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
