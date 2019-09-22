import React from 'react';
import './app.css';
import { Link } from "react-router-dom";

class Home extends React.Component {
  scrollWork = () => {
    document.querySelector('.scrollWork').scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

  scrollHome = () => {
    document.querySelector('.me').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  scrollContact = () => {
    document.querySelector('.contact-container').scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }

  /*
  scroll() {
    let lastScrollTop = 0;
    let navbar = document.querySelector('.nav');
    if (window.innerWidth > 600) {
    window.addEventListener('scroll', () => {
      var st = window.pageYOffset || window.scrollTop
      if (st > lastScrollTop){
          navbar.style.display = 'none';
      } else {
          navbar.style.display = 'flex';
      }
        lastScrollTop = st <= 0 ? 0 : st;
      });
    }
  };
  */

  render() {
    return (
    <div className="content">
        <ul className="nav nav-desktop" >
          <li className="nav-item">
            <a className="nav-link active" onClick={this.scrollHome}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.scrollWork}>Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.scrollContact}>Contact</a>
          </li>
        </ul>
  
  <h1 className="me">I’m Daugirdas<br/><span className="developer">a Web Developer</span></h1>

  <div className="hr"></div>

  <div className="app-container scrollWork">
    <img src={require("./images/portfolio/weather-app.png")} alt="Weather app"/>
    <h2 className="app-title">Weather app</h2>
    <div className="horizontal-line-small"></div>
    <p className="app-text">Allows user to check current weather temperature for local or international locations.</p>
    <Link to='/weather-app' ><button><p className="button-text">View live</p></button></Link>
  </div>
  
  <div className="app-container">
    <img src={require("./images/portfolio/inmobilus-design.png")} alt="inMobilus design"/>
    <h2 className="app-title">inMobilus website</h2>
    <div className="horizontal-line-small"></div>
    <p className="app-text">Website design created for electronic sales company based in Lithuania.</p>
    <a href={require("./images/portfolio/inmobilus-website.png")} target="_blank"><button><p className="button-text">View bigger picture</p></button></a>
  </div>

  <div className="app-container">
    <img src={require("./images/portfolio/text-editor-app.png")} alt="Text editor app" />
    <h2 className="app-title">Text editor</h2>
    <div className="horizontal-line-small"></div>
    <p className="app-text">Allows user to write and store text locally in the browser.</p>
    <Link to='/text-editor-app' ><button><p className="button-text">View live</p></button></Link>
  </div>

  <div className="contact-container">
    <h2 className="contact-title">Get in touch</h2>
    <span className="vertical-line"></span> 
    <h3 className="contact-email">kuprionis@gmail.com</h3>
  </div>


  <ul className="nav-mobile">
          <li className="nav-item">
            <p className="nav-link active" onClick={this.scrollHome}>Home</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" onClick={this.scrollWork}>Work</p>
          </li>
          <li className="nav-item">
            <p className="nav-link" onClick={this.scrollContact}>Contact</p>
          </li>
    </ul>
    
    </div>
    )
  }
}

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

if (window.innerWidth > breakpoints.tablet) {
  // do stuff for desktop
} else if (window.innerWidth > breakpoints.mobile) {
  // do stuff for tablet
} else if (window.innerWidth <= breakpoints.mobile) {
  // do stuff for mobile
}

export default Home;
