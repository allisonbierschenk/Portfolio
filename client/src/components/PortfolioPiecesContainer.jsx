import React from "react";
import "../assets/PortfolioPiecesContainer.css";
import { Link } from "react-router-dom";

export default function PortfolioPiecesContainer() {
  return (
    <div id="projects-dev" className="intro">
      <div>Here is where I say something about my work</div>
      <br />
      <div className="projects-container">
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/ckjeAzU.jpg" />
          <div className="details">
            <div>
              <div className="title">Travel Like A Local</div>
              <div className="description">
                Full stack website built with React, Ruby on Rails, and RESTful
                API built by me. The app features user authentication and full
                CRUD.
              </div>
            </div>
            <div className="buttons">
              <a href="travel-like-a-local.netlify.app" target="_blank">
                <button>See my Site</button>
              </a>
              <a
                href="https://github.com/allisonbierschenk/Travel-Like-A-Local"
                target="_blank"
              >
                <button>See my Code</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/ckjeAzU.jpg" />
          <div className="details">
            <div>
              <div className="title">Sunday Driver</div>
              <div className="description">
                A team collaboration full stack app built with React, Express
                and MongoDB. The app features user authentication and full CRUD.
              </div>
            </div>
            <div className="buttons">
              <a href="https://sundaydriver.netlify.app/" target="_blank">
                <button>See my Site</button>
              </a>
              <a
                href="https://github.com/allisonbierschenk/car-app"
                target="_blank"
              >
                <button>See my Code</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/ckjeAzU.jpg" />
          <div className="details">
            <div>
              <div className="title">WorkOut Tracker App</div>
              <div className="description">
                A front-end app built with full CRUD utilizing a custom Airtable
                API.
              </div>
            </div>
            <div className="buttons">
              <a href="https://whiteboard-workout.netlify.app/" target="_blank">
                <button>See my Site</button>
              </a>
              <a
                href="https://github.com/allisonbierschenk/Work_it_out"
                target="_blank"
              >
                <button>See my Code</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/ckjeAzU.jpg" />
          <div className="details">
            <div>
              <div className="title">GoodNews</div>
              <div className="description">
                A simple app with a RESTful API integration.
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://allisonbierschenk.github.io/good-news/"
                target="_blank"
              >
                <button>See my Site</button>
              </a>
              <a
                href="https://github.com/allisonbierschenk/good-news"
                target="_blank"
              >
                <button>See my Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
