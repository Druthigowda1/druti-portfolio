import React from 'react';
import Header from './components/navbar/Header';
import Intro from './components/navbar/Intro';
import Aboutme from './components/navbar/Aboutme';
import Skills from './components/navbar/Skills';
import Projects from './components/navbar/Projects';
import Experience from './components/navbar/Experience';
import Contact from './components/navbar/Contact';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Aboutme />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
