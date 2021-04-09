import React from "react";
import "../assets/PMProjects.css";

export default function PMProjects() {
  return (
    <div id="projects-pm" className="intro-pm">
      <div className="projects-intro">
        Web dev projects as the Lead Project Manager...
      </div>
      <div className="projects-container">
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/H1TBpjQ.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">Artel</div>
            </div>
            <div className="buttons">
              <a href="https://www.artel.co/" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/7GZ7Xb4.jpg?1" />
          <div className="details-pm">
            <div>
              <div className="title-pm">Sunday Driver</div>
              <div className="description">
                A team collaboration full stack app built with React, Express
                and MongoDB. The app features user authentication and full CRUD.
              </div>
            </div>
            <div className="buttons">
              <a href="https://sundaydriver.netlify.app/" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/ctYDaTC.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">WorkOut Tracker App</div>
              <div className="description">
                A front-end app built with full CRUD utilizing a custom Airtable
                API.
              </div>
            </div>
            <div className="buttons">
              <a href="https://whiteboard-workout.netlify.app/" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/Zukotas.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">GoodNews</div>
              <div className="description">
                A simple app with a RESTful API integration.
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://allisonbierschenk.github.io/good-news/"
                target="_blank"
              >
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
