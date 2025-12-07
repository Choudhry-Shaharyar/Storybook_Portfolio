import React from 'react';
import ComicPanel from './ui/ComicPanel';
import { Code, Server } from 'lucide-react';

const SkillBar: React.FC<{ label: string; level: number }> = ({ label, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-bold font-heading text-sm uppercase">{label}</span>
      <span className="font-mono text-xs">{level}%</span>
    </div>
    <div className="h-3 w-full bg-gray-200 border border-black rounded-full overflow-hidden">
      <div
        className="h-full bg-green-600 border-r border-black"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-100" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Character Card */}
          <div className="lg:col-span-4">
            <ComicPanel className="h-full bg-white flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full border-4 border-black overflow-hidden mb-6 relative bg-gray-200">
                <img src="/assets/profile.jpg" alt="Shaharyar" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-3xl font-black font-heading mb-2">SHAHARYAR</h2>
              <p className="font-serif italic text-gray-600 mb-6">"Dream. Believe. Achieve"</p>

              <div className="w-full space-y-4 text-left border-t-2 border-black pt-6">
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase">Class</span>
                  <span className="font-bold font-heading text-lg">Software Engineer</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase">Specialty</span>
                  <span className="font-bold font-heading text-lg">Backend & Azure</span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase">Location</span>
                  <span className="font-bold font-heading text-lg">Toronto, ON</span>
                </div>
              </div>
            </ComicPanel>
          </div>

          {/* Stats & Bio */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <ComicPanel>
              <h3 className="text-2xl font-black font-heading mb-4 uppercase flex items-center gap-2">
                <Server className="text-green-600" />
                Technical Profile
              </h3>
              <p className="font-serif text-lg leading-relaxed mb-8">
                I specialize in building robust backend systems and scalable applications. Whether I’m architecting APIs, designing system workflows, optimizing large datasets, migrating applications to Kubernetes, or introducing modern authentication like OAuth2/OIDC, my focus is always the same: performance, reliability, and clean architecture. I work end-to-end, from gathering requirements and shaping the design, to implementing features, securing infrastructure, managing pipelines, testing thoroughly, and shipping to production.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <div>
                  <h4 className="font-bold border-b-2 border-gray-200 mb-4 pb-1">Languages</h4>
                  <SkillBar label="Java" level={90} />
                  <SkillBar label="C# / .NET" level={85} />
                  {/* <SkillBar label="JavaScript / TS" level={85} /> */}
                  <SkillBar label="SQL" level={90} />
                  <SkillBar label="Python" level={75} />
                </div>
                <div>
                  <h4 className="font-bold border-b-2 border-gray-200 mb-4 pb-1">Frameworks & Tools</h4>
                  <SkillBar label="React.js" level={85} />
                  <SkillBar label="Docker / K8s" level={85} />
                  <SkillBar label="Azure" level={90} />
                  <SkillBar label="Node.js" level={80} />
                  <SkillBar label="Spring Boot" level={90} />
                </div>
              </div>
            </ComicPanel>

            <ComicPanel variant="dark" className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-white">CURRENT STATUS</h3>
                <p className="text-gray-400">Building scalable solutions at ABB.</p>
              </div>
              <div className="animate-pulse w-4 h-4 bg-green-500 rounded-full box-shadow-green"></div>
            </ComicPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;