import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <footer>
      <div className="align-middle">
        <p>© 2023 Made by Stefan Palacios.</p>
        <nav>
          <a href="https://github.com/turtlesrus01">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/stefan-palacios-74481281/">LinkedIn</a>
          <a href="">Facebook</a>
        </nav>
      </div>
    </footer>
  );
}
