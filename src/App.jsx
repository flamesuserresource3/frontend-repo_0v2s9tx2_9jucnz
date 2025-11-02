import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import ContactCTA from './components/ContactCTA';
import './fonts.css';

const App = () => {
  return (
    <div className="min-h-screen w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Simple top nav */}
      <header className="fixed inset-x-0 top-0 z-40 mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-rose-100/60 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-md">
          <a href="#home" className="text-lg text-[#3e2c2a]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Aura Bracelets
          </a>
          <nav className="hidden gap-6 text-sm text-[#6c4f4b] sm:flex">
            <a href="#about" className="hover:text-[#3e2c2a]">About</a>
            <a href="#collections" className="hover:text-[#3e2c2a]">Collections</a>
            <a href="#contact" className="hover:text-[#3e2c2a]">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Collections />
        <ContactCTA />
      </main>
    </div>
  );
};

export default App;
