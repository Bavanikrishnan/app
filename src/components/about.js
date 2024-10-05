import React from 'react';
import './about.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h2>Bavani</h2>
      </div>

      <section className="introduction">
        <h3>About Me</h3>
        <p>
          I am a passionate developer with a love for creating engaging and
          user-friendly applications. My journey in coding began at [ 1 st year of clg], 
          and since then, I have been working on various projects to enhance my skills.
        </p>
      </section>

      <section className="skills">
        <h3>My Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>HTML</li>
        </ul>
      </section>

      <section className="projects" id="aboutsection">
        <h3>Projects</h3>
        <p>Here are some projects I've worked on:</p>
        <ul>
          <li><strong>Project 1:</strong> A web application that does Usesfull.</li>
          <li><strong>Project 2:</strong> A mobile app that helps with System.</li>
          <li><strong>Project 3:</strong> An open-source project contributing to Users.</li>
        </ul>
      </section>

      <section className="contact">
        <h3>Contact Me</h3>
        <p>If you'd like to reach out, feel free to contact me at <a href="mailto:bavanik.ug22.cs@francisxavier.ac.in">bavanik.ug22.cs@francisxavier.ac.in</a>.</p>
      </section>
    </div>
  );
};

export default Home;
