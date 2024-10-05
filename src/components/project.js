import React from 'react';
import "./project.css";
import projectImage1 from '../components/IMAGES/project1.jpg';
import projectImage2 from '../components/IMAGES/project2.jpg';
import projectImage3 from '../components/IMAGES/project3.jpg';


function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "This is a description of Project 1. You can find my HTML programs in the provided file.",
      image: projectImage1,
      link: "https://themewagon.github.io/gardener/service.html" 
    },
    
    {
      title: "Project 2",
      description: "This is a description of Project 2. You can find my HTML programs in the provided file.",
      image: projectImage2,
      link: "https://themewagon.github.io/furnics/" 
    },

    {
      title: "Project 3",
      description: "This is a description of Project 2. You can find my HTML programs in the provided file.",
      image: projectImage3,
      link: "https://themewagon.github.io/vacation-rental/" 
    },
    
  ];

  return (
    <div className="projects" id="projectsection">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Program</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
