import React from "react";
import "./Education.css";

// Simple section html item with headers centered in the page
function Education() {
  return (
    <div className="education" id="Education"
        /* Animation */
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
    >
      <h1 className="education-title">Education</h1>
      <section className="education-info">
        <h1 className="education-item-heading">
          Bacherlor's Degree in Computer Science
        </h1>
        <h3 className="education-item-institution">
          MacEwan University - 2020
        </h3>
        <h5 className="education-item-location">Edmonton, AB, Canada </h5>
        <h1 className="education-item-heading">
          Top Software Engineering Project - EPL Multitouch Children's Game
          (GrowthFactor)
        </h1>
        <h3 className="education-item-institution">
          MacEwan University/Edmonton Public Library - Fall Term 2019
        </h3>
        <h5 className="education-item-location">Edmonton, AB, Canada </h5>
      </section>
    </div>
  );
}

export default Education;
