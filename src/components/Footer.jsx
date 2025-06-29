import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ coins }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg sm:text-xl">H</span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold">Harsh Jindal</span>
          <div className="flex items-center space-x-2 bg-yellow-900 px-3 sm:px-4 py-2 rounded-full border border-yellow-700">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-sm"></div>
            <span className="text-base sm:text-lg font-bold text-yellow-400">{coins}</span>
          </div>
        </div>
        
        <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg px-4">
          © 2025 Harsh Jindal. All rights reserved. | Built with React & Mario Magic ✨
        </p>
        
        <div className="flex justify-center space-x-6 mb-6 sm:mb-8">
          <a href="https://github.com/jindal07" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 p-2">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/jindal07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 p-2">
            <Linkedin size={20} />
          </a>
          <a href="mailto:harshjindal458@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 p-2">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-yellow-400 font-bold text-lg sm:text-xl animate-pulse">
            🏁 Thank you for playing! Game Over... for now! 🏁
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;