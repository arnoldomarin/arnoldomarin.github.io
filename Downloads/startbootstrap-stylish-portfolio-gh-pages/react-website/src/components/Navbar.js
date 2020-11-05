import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false); // change state based on click

  const [navbar, setNavbar] = useState(false); // state used to change navbar from transparent to a color when scrolling

  // function that sets any click to the opposite value
  const handleClick = () => setClick(!click);

  // function to close hamburguer menu when clicked on a link to another page (home, logo, etc)
  const closeMobileMenu = () => setClick(false);

  // function for scroll of navbar
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Call changeBackground - Navbar changes from transparent to color when scrolling
  window.addEventListener("scroll", changeBackground);

  return (
    /* if scroll pass 80px (size of navbar), change from transparent to color (set state to navbar active) */
    <nav className={navbar ? "navbar active" : "navbar"}
    >
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          {/* hamburguer menu - if click on icon, change to the other icon - if true, it will change to X, else changes to hamburger*/}
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* make nav menu disappear when click on nav item*/}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Main"
              smooth={true}
              offset={-70}
              duration={700}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Projects"
              smooth={true}
              offset={-70}
              duration={700}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Skills"
              smooth={true}
              offset={-70}
              duration={700}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Education"
              smooth={true}
              offset={-70}
              duration={700}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Education
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
