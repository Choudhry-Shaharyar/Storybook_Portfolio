import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 selection:bg-green-200 selection:text-green-900">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-black text-white p-3 border-2 border-white shadow-lg transition-all duration-300 z-50 hover:bg-green-600 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </main>
  );
};

export default App;