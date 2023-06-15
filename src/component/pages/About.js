import React from "react";
import userLogo from "../assets/img/22966818.jpg";

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="container aos-init">
          <h1>About Me</h1>
          <img src={userLogo} alt="Logo" class="img-fluid m-5" />
          <p>
            My name is Stefan Palacios, I am an eager developer that wants to gain experience and knowledge with web development. 
            I am just about finished working on a codind bootcamp that is helping me build my skills scripting, design, and database knowledge.
            I feel comfortable most working with Javascript, HTML, and MongoDB for my applications and am always looking to learn about more technologies. 
          </p>
        </div>
      </section>
    </div>
  );
}
