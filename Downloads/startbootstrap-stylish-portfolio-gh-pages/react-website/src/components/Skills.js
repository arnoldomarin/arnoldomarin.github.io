import React from "react";
import "./Skills.css";
import { Container, Row, Col} from 'reactstrap';

// Function set to display images of skills - Bug when screen gets smaller
function Skills() {
  return (
    <div className="skills" id="Skills"
        /* Animation */
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"    
    >
      <h1 className="skills-heading">Skills</h1>
      {/* Cards Container which will have all the things in Card.js */}

      <Container className="skills-container">
      <Row className="skills-row">
        <Col className="skills-items">
        <a className="skill-item" href="https://html.spec.whatwg.org/">
          <img className="skill-image" alt="htmlimage" src="/images/html.png" width="100" height="100"></img>
        </a>
        <a className="skill-item" href="https://www.w3.org/Style/CSS/current-work.en.html">
          <img className="skill-image" alt="cssimage" src="/images/css.png" width="100" height="100"></img>
        </a>
        <a className="skill-item" href="https://www.w3schools.com/js/DEFAULT.asp">
          <img className="skill-image" alt="javascriptimage" src="/images/javascript.png" width="100" height="100"></img>
        </a>
        <a className="skill-item" href="https://reactjs.org/">
          <img className="skill-image" alt="reactimage" src="/images/react.png" width="100" height="100"></img>
        </a>
        </Col>
      </Row>
      <Row className="skills-row"
        /* Animation */
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
      >
        <Col className="skills-items">
        <a className="skill-item" href="http://www.sqlcourse.com/intro.html">
          <img className="skill-image" alt="htmlimage" src="/images/sql.png" width="100" height="100"></img>
        </a>
        <a className="skill-item" href="https://docs.microsoft.com/en-us/dotnet/csharp/">
          <img className="skill-image" alt="cssimage" src="/images/csharp.png" width="100" height="100"></img>
        </a>
        <a className="skill-item" href="https://getbootstrap.com/">
          <img className="skill-image" alt="javascriptimage" src="/images/bootstrap.png" width="100" height="100"></img>
        </a>
        <a className="skill-item" href="https://dotnet.microsoft.com/apps/aspnet">
          <img className="skill-image" alt="dotnetimage" src="/images/net.png" width="100" height="100"></img>
        </a>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Skills;
