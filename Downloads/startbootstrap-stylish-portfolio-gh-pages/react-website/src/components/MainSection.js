import React from "react";
import "../App.css";
import "./MainSection.css";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

// Main Section of the website with video and intro
function MainSection() {
  return (
    <div   
      /* Animation */  
      data-aos="fade-in"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      
      className="main-container" id="Main">
      {/* <video src="/videos/mainsectionvid.mp4" autoPlay loop muted></video>*/}
      <Animated
        animationIn="bounceInLeft"
        animationOut="fadeOut"
        isVisible={true}
      >
      </Animated>
      <h1 className="first-name">ARNOLDO</h1>
      <h1 className="last-name">MARIN</h1>
      <p>Web Developer/UI Designer</p>
      <div className="social-container">
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/arnoldo-marin-800841149/">
                <img
                  className="social-media-img"
                  src="/images/linkedin.png"
                  alt="Linkedin"
                ></img>
              </a>
              <a href="https://github.com/arnoldomarin">
                <img
                  className="social-media-img"
                  src="/images/github.png"
                  alt="Github"
                ></img>
              </a>
              <Link
                className="social-icon-link gmail"
                to="https://www.w3.org/Style/CSS/current-work.en.html"
                target="_blank"
                aria-label="Gmail"
              >
                <img
                  className="social-media-img"
                  src="/images/gmail.png"
                  alt="Gmail"
                ></img>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainSection;
