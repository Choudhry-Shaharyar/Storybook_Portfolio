import React from 'react';
import { PROJECTS } from '../constants';
import ComicPanel from './ui/ComicPanel';
import { ExternalLink, BarChart2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <h2 className="text-6xl font-black font-heading uppercase">Case Studies</h2>
            <p className="font-serif text-xl text-gray-600 mt-2 max-w-xl">
              Selected works demonstrating engineering capabilities and problem-solving skills.
            </p>
          </div>
          <div className="bg-black text-white px-4 py-2 font-bold font-mono text-sm">
            SECTION 03
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <ComicPanel key={project.id} className="flex flex-col h-full group transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              {/* Image Area */}
              <div className="h-48 md:h-64 bg-gray-100 border-2 border-black mb-6 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white border-2 border-black p-1">
                  <ExternalLink size={16} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-3xl font-black font-heading mb-3 group-hover:text-green-700 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-2 py-1 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="font-serif text-gray-700 mb-6 flex-1 text-lg">
                  {project.description}
                </p>

                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 bg-green-50 p-4 border border-green-100 mb-6">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="font-black font-heading text-lg text-green-800">{stat.value}</div>
                        <div className="text-[10px] uppercase font-bold text-green-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <button className="w-full bg-black text-white py-3 font-bold font-heading border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all">
                  VIEW DETAILS
                </button>
              </div>
            </ComicPanel>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;