import React from "react";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="align-middle">
        <p>© 2023 Made by Stefan Palacios.</p>
        <nav>
          <a href="https://github.com/turtlesrus01" className="p-2">
            <BsGithub size={32}/>
          </a>
          <a href="https://www.linkedin.com/in/stefan-palacios-74481281/" className="p-2">
            <BsLinkedin size={32}/>
          </a>
          <a href="https://www.facebook.com/" className="p-2">
            <BsFacebook size={32}/>
          </a>
        </nav>
      </div>
    </footer>
  );
}
