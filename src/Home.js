import React from 'react';
import './app.css';
import { Link } from "react-router-dom";

const Home = () => (
      <div className="content">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>

  <h1 className="me">Hi, I’m Daugirdas Kuprionis, <br/>a Web Developer</h1>

  <div className="hr"></div>

  <div className="app-container">
    <img src={require("./images/portfolio/text-editor-app.png")} alt="Text editor app" />
    <h2 className="app-title">Text editor</h2>
    <div className="horizontal-line-small"></div>
    <p className="app-text">Allows user to write and store text locally in the browser.</p>
    <Link to='/text-editor-app' ><button><p className="button-text">View live</p></button></Link>
  </div>

  <div className="app-container">
    <img src={require("./images/portfolio/inmobilus-design.png")} alt="inMobilus design"/>
    <h2 className="app-title">inMobilus website</h2>
    <div className="horizontal-line-small"></div>
    <p className="app-text">Website design created for electronic sales company based in Lithuania.</p>
  </div>
  
  <div className="app-container">
    <img src={require("./images/portfolio/weather-app.png")} alt="Weather app"/>
    <h2 className="app-title">Weather app</h2>
    <div className="horizontal-line-small"></div>
    <p className="app-text">Allows user to check current weather temperature for local or international locations.</p>
    <Link to='/weather-app' ><button><p className="button-text">View live</p></button></Link>
  </div>

  <div className="contact-container">
    <h2 className="contact-title">Get in touch</h2>
    <span className="horizontal-line"></span> 
    <h3 className="contact-email">kuprionis@gmail.com</h3>
    <a className="contact-in" href="https://www.linkedin.com/in/kuprionis/" target="_blank" rel="noopener noreferrer">in</a>
  </div>
</div>
);

export default Home;
