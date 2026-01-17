import React from 'react';
import { PROJECTS } from '../constants';
import ComicPanel from './ui/ComicPanel';
import { ExternalLink, BarChart2, X } from 'lucide-react';

import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section className="py-24 bg-white border-t-2 border-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <h2 className="text-6xl font-black font-heading uppercase">Projects</h2>
            <p className="font-serif text-xl text-gray-600 mt-2 max-w-xl">
              A selection of applications and systems I’ve developed in my spare time.
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

                {project.videoUrl ? (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full bg-black text-white py-3 font-bold font-heading border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
                  >
                    VIEW DETAILS
                  </button>
                ) : project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-black text-white py-3 font-bold font-heading border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all"
                  >
                    VIEW DETAILS
                  </a>
                ) : (
                  <button className="w-full bg-black text-white py-3 font-bold font-heading border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all">
                    VIEW DETAILS
                  </button>
                )}
              </div>
            </ComicPanel>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div
            className="bg-white border-4 border-black p-8 max-w-md w-full relative shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all"
            >
              <X size={24} />
            </button>

            <h3 className="text-3xl font-black font-heading mb-2">{selectedProject.title}</h3>
            <p className="font-serif text-gray-600 mb-8">How would you like to explore this project?</p>

            <div className="space-y-4">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-black text-white py-4 font-bold font-heading border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-all group"
                >
                  <span>VISIT WEBSITE</span>
                  <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              )}

              {selectedProject.videoUrl && (
                <a
                  href={selectedProject.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-red-600 text-white py-4 font-bold font-heading border-2 border-transparent hover:bg-white hover:text-red-600 hover:border-red-600 transition-all group"
                >
                  <span>WATCH DEMO</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;