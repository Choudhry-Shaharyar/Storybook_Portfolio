import React from 'react';
import { motion } from 'framer-motion';
import ComicPanel from './ui/ComicPanel';
import { HERO_STATS } from '../constants';
import { ArrowDown, Cpu, Terminal, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToTimeline = () => {
    const timeline = document.getElementById('timeline');
    timeline?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center p-4 md:p-8 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">

        {/* Main Title Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8"
        >
          <ComicPanel className="h-full flex flex-col justify-center py-12 md:py-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block border-2 border-black bg-black text-white px-3 py-1 text-sm font-bold uppercase tracking-widest mb-6 w-max"
            >
              The Portfolio of
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-tight mb-6 tracking-tighter">
              SHAHARYAR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">
                CHOUDHRY
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-serif text-gray-800 max-w-2xl leading-relaxed border-l-4 border-green-600 pl-6 my-4">
              Engineer. Architect. Builder.<br />
              Designing systems that scale and endure.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={scrollToTimeline}
                className="bg-black text-white px-8 py-4 font-bold font-heading text-lg border-2 border-black hover:bg-white hover:text-black transition-all comic-shadow"
              >
                BEGIN STORY
              </button>
              <a
                href="#contact"
                className="bg-white text-black px-8 py-4 font-bold font-heading text-lg border-2 border-black hover:bg-gray-100 transition-all comic-shadow"
              >
                CONTACT
              </a>
            </div>
          </ComicPanel>
        </motion.div>

        {/* Sidebar / Illustration Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-4 flex flex-col gap-8"
        >
          <ComicPanel variant="dark" className="flex-1 flex flex-col justify-center items-center min-h-[300px]">
            <div className="grid grid-cols-2 gap-4 opacity-80 mb-6">
              <Terminal size={48} className="text-white" />
              <Database size={48} className="text-blue-400" />
              <Cpu size={48} className="text-red-400" />
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center font-bold text-xl">
                C#
              </div>
            </div>
            <h3 className="text-2xl font-heading text-center font-bold">
              FULL STACK <br />ENGINEERING
            </h3>
          </ComicPanel>

          <ComicPanel variant="accent" className="flex flex-col justify-between">
            <div className="space-y-6">
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="border-b border-green-400 pb-4 last:border-0 last:pb-0">
                  <h4 className="text-4xl font-black font-heading">{stat.value}</h4>
                  <p className="font-bold text-green-100 uppercase text-xs tracking-wider">{stat.label}</p>
                  <p className="text-sm text-green-50 mt-1 font-serif italic">{stat.description}</p>
                </div>
              ))}
            </div>
          </ComicPanel>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-gray-400"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;