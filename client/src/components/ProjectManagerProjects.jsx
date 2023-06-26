import React from "react";
import "../assets/ProjectManagerProjects.css";
import Nav from "./Nav";

export default function ProjectManagerProjects() {
  return (
    <>
      <Nav/>
    <div id="projects-pm" className="intro-pm">
      <div className="projects-intro">
        Web dev projects as the Lead Project Manager...
      </div>
      <div className="projects-container">
        <div className="each-project-container">
          <img className="image" src="https://i.imgur.com/H1TBpjQ.jpg" alt="artel"/>
          <div className="details-pm">
            <div>
              <div className="title-pm">Artel</div>
            </div>
            <div className="buttons">
              <a href="https://www.artel.co/" target="_blank" rel="noreferrer"
>
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="akoya" src="https://i.imgur.com/ihelCD7.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">Akoya</div>
            </div>
            <div className="buttons">
              <a href="https://www.akoyabio.com/" rel="noreferrer" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="cardiff oncology" src="https://i.imgur.com/apmSFU5.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">Cardiff Oncology</div>
            </div>
            <div className="buttons">
              <a href="https://www.cardiffoncology.com" rel="noreferrer" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="ultivue" src="https://i.imgur.com/aqPAOyB.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">Ultivue</div>
            </div>
            <div className="buttons">
              <a href="https://www.ultivue.com" rel="noreferrer" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="adacap" src="https://i.imgur.com/qRCMyZD.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">ADACAP</div>
            </div>
            <div className="buttons">
              <a href="https://www.adacap.com/" rel="noreferrer" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="advanced instruments" src="https://i.imgur.com/RK1rWf5.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">Advanced Instruments</div>
            </div>
            <div className="buttons">
              <a href="https://www.aicompanies.com/" rel="noreferrer" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
        <div className="each-project-container">
          <img className="image" alt="stemexpress" src="https://i.imgur.com/KHVkjuS.jpg" />
          <div className="details-pm">
            <div>
              <div className="title-pm">StemExpress</div>
            </div>
            <div className="buttons">
              <a href="https://www.stemexpress.com/" rel="noreferrer" target="_blank">
                <button className="button">See the Site</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
