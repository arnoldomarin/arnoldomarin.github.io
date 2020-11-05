import React from "react";
import "../../App.css";
import MainSection from "../MainSection";
import Skills from "../Skills";
import Footer from "../Footer";
import Education from "../Education";
import Projects from "../Projects";

/* Contains all the components of the Home Page of the Portfolio */
function Home() {
  return (
    <>
      <MainSection></MainSection>
      {/* <Offer></Offer> */}
      <Projects></Projects>
      <Skills></Skills>
      <Education></Education>
      <Footer></Footer>
    </>
  );
}

export default Home;
