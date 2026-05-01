import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { ProjectSlider } from './components/ProjectSlider/ProjectSlider';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <div className="background">
        <Hero />
      </div>

      <main>
        <About />
        <ProjectSlider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;