import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    //navbar container
    <ul className="nav nav-tabs">
      {/* nav item about me */}
      <li className="nav-item">
        {/* nav link */}
        <a
          href="#about"
          //event listener for click
          onClick={() => handlePageChange("About")}
          //state change for when the tab is pressed
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      {/* nav item portfolio */}
      <li className="nav-item">
        {/* nav link */}
        <a
          href="#portfolio"
          //event listener for click
          onClick={() => handlePageChange("Portfolio")}
          //state change for when the tab is pressed
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      {/* nav item contact */}
      <li className="nav-item">
        {/* nav link */}
        <a
          href="#contact"
          //event listener for click
          onClick={() => handlePageChange("Contact")}
          //state change for when the tab is pressed
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      {/* nav item resume */}
      <li className="nav-item">
        {/* nav link */}
        <a
          href="#resume"
          //event listener for click
          onClick={() => handlePageChange("Resume")}
          //state change for when the tab is pressed
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
