import React from 'react';
import { Mail, Linkedin, Globe, Phone } from 'lucide-react';
import ComicPanel from './ui/ComicPanel';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 border-t-4 border-green-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl font-black font-heading mb-8">
          THE NEXT CHAPTER?
        </h2>
        <p className="text-xl md:text-2xl font-serif text-gray-400 mb-12 max-w-2xl mx-auto">
          Every great story has a sequel. Let's collaborate to build scalable, impactful software solutions together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ComicPanel variant="white" className="text-left group cursor-pointer hover:bg-green-50 transition-colors">
            <h3 className="font-bold font-heading text-xl mb-4 text-black uppercase">Get in Touch</h3>
            <div className="space-y-4">
              <a href="mailto:shaharyar.choudhry7@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors">
                <Mail size={20} />
                <span className="font-medium">shaharyar.choudhry7@gmail.com</span>
              </a>
              <a href="tel:647-667-7804" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors">
                <Phone size={20} />
                <span className="font-medium">647-667-7804</span>
              </a>
            </div>
          </ComicPanel>

          <ComicPanel variant="white" className="text-left group cursor-pointer hover:bg-green-50 transition-colors">
            <h3 className="font-bold font-heading text-xl mb-4 text-black uppercase">Social Uplink</h3>
            <div className="space-y-4">
              <a href="https://linkedin.com/in/shaharyar-choudhry" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors">
                <Linkedin size={20} />
                <span className="font-medium">linkedin.com/in/shaharyar-choudhry</span>
              </a>
              <a href="https://shaharyarchoudhry.me" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors">
                <Globe size={20} />
                <span className="font-medium">shaharyarchoudhry.me</span>
              </a>
            </div>
          </ComicPanel>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Shaharyar Choudhry. All rights reserved.</p>
          <p>Designed with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;