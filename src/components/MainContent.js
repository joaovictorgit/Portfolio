import React from 'react'
import '../styles/components/maincontent.sass';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';

function MainContent() {
  return (
    <main id='main-content'>
      <About />
      <Technologies />
      <Projects />
    </main>
  )
}

export default MainContent