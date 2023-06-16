import React from "react";
import one from "../assets/img/pexels-photo-546819.webp";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="container">
        <div className="col-lg-4 col-md-6 portfolio-item ">
          <a href="https://github.com/turtlesrus01/co-social">
            <img src={one} alt="computer screen with code"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
