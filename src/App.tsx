import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { Philosophy } from './components/sections/Philosophy';
import { Principles } from './components/sections/Principles';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { useScrollReveal } from './hooks/useScrollReveal';

export const App: React.FC = () => {
  // Initialize lightweight viewport reveal animations
  useScrollReveal();

  return (
    <div className="sabkuch-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Services />
        <Process />
        <Philosophy />
        <Principles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
