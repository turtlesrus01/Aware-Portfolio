import React from "react";
import one from "../assets/img/pexels-photo-546819.webp";
import Project from "../Project";

export default function Portfolio() {
  const projects = [
    {
      img: one,
      title: "co-social1",
      link: "https://github.com/turtlesrus01/co-social",
      alt: "computer screen with code",
    },
    {
      img: one,
      title: "co-social2",
      link: "https://github.com/turtlesrus01/co-social",
      alt: "computer screen with code",
    },
    {
      img: one,
      title: "co-social3",
      link: "https://github.com/turtlesrus01/co-social",
      alt: "computer screen with code",
    },
    {
      img: one,
      title: "co-social4",
      link: "https://github.com/turtlesrus01/co-social",
      alt: "computer screen with code",
    },
  ];
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </div>
  );
}
