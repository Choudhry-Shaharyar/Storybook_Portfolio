import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { STORY_CHAPTERS } from '../constants';
import ComicPanel from './ui/ComicPanel';
import { Chapter } from '../types';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const TimelineItem: React.FC<{ chapter: Chapter; index: number }> = ({ chapter, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`flex flex-col md:flex-row items-center justify-between mb-24 relative w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Center Line Dot */}
      <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 w-8 h-8 bg-black border-4 border-white rounded-full z-20"></div>

      {/* Image Panel */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-5/12 mb-8 md:mb-0"
      >
        <ComicPanel className="p-0 h-64 md:h-80 group overflow-hidden" noShadow>
           <img 
             src={chapter.image} 
             alt={chapter.title}
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
           />
           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        </ComicPanel>
      </motion.div>

      {/* Content Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full md:w-5/12 relative"
      >
        {/* Speech Bubble Arrow */}
        <div className={`hidden md:block absolute top-8 w-6 h-6 bg-white border-l-2 border-b-2 border-black transform rotate-45 z-10 
          ${isEven ? '-left-3 bg-white' : '-right-3 bg-white border-l-0 border-b-0 border-r-2 border-t-2'}`}>
        </div>

        <ComicPanel className="relative z-0">
          <div className="flex flex-col gap-2 mb-4">
            <span className="font-bold text-blue-600 uppercase tracking-widest text-sm">{chapter.title}</span>
            <h3 className="text-2xl md:text-3xl font-black font-heading leading-none">{chapter.subtitle}</h3>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500 mb-6 border-b-2 border-gray-100 pb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {chapter.period}
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {chapter.location}
            </div>
          </div>

          <p className="text-lg font-serif text-gray-700 leading-relaxed mb-6">
            {chapter.description}
          </p>

          <div className="space-y-3 mb-6">
            {chapter.achievements.map((ach, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
                <span className="text-sm font-medium text-gray-800">{ach}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {chapter.techStack.map((tech, i) => (
              <span key={i} className="bg-gray-100 border border-gray-300 px-2 py-1 text-xs font-bold uppercase text-gray-600">
                {tech}
              </span>
            ))}
          </div>
        </ComicPanel>
      </motion.div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-24">
           <span className="bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest">The Journey So Far</span>
           <h2 className="text-5xl font-black font-heading mt-4 mb-6">CHRONICLES OF BUILD</h2>
           <p className="font-serif text-xl text-gray-600 max-w-2xl mx-auto">
             A timeline of learning, building, and delivering value across industries.
           </p>
        </div>

        {/* Center Line */}
        <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-1 bg-black transform -translate-x-1/2 z-0"></div>

        <div className="space-y-12 md:space-y-0">
          {STORY_CHAPTERS.map((chapter, index) => (
            <TimelineItem key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-20">
           <div className="inline-block p-4 border-2 border-black bg-white comic-shadow rotate-2">
             <p className="font-heading font-bold text-xl">TO BE CONTINUED...</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;