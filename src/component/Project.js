import React from "react";

export default function Project({ project }) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <a href={project.link}>
        <img className="portfolioImg" src={project.img} alt={project.alt}></img>
      </a>
    </div>
  );
}
