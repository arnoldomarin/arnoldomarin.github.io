import React from "react";
import Card from "./Card";
import "./Projects.css";

function Projects() {
  return (
    <div className="cards" id="Projects"
        /* Animation */  
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"      
    >
      <h1 className="projects-title">Projects</h1>
      {/* Cards Container which will have all the things in Card.js */}
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <Card
              src="/images/BudgetBuddy.png"
              text="User-friendly budget app that helps you manage your income and expenses."
              technologyInfo="Technology: React, ReactStrap, HTML5, CSS3, GitHub"
              label="BudgetBuddy"
              path="/"
            ></Card>
            <Card
              src="/images/capstone3.png"
              text="A responsive web application that simplifies the home-building process by providing a fully featured portal"
              technologyInfo="Technology: HTML5,CSS3, JavaScript, Bootstrap, C#, ASP.Net MVC, GitHub, Agile/Scrum"
              label="ManageMyBuild"
              path="/"
            ></Card>
            <Card
              src="/images/mobile-game.png"
              text="A family puzzle game that requires team work and strategy in order to win!"
              technologyInfo="Technology: C#, Unity, GitHub, Agile/Scrum"
              label="GrowthFactor"
              path="/"
            ></Card>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
