import React from 'react';
import Navbar from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Skill from './components/skill';
import Project from './components/project';
import Contact from './components/contact'






const App = () => {
  return (
    <div>
      <Navbar />
      
      <Home />
      <Footer />
      <About />
      <Skill />
      <Project />
      <Contact />
      </div>

  )
}



export default App;

