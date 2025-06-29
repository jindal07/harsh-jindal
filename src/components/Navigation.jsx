import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navigation = ({ isDark, toggleTheme, activeSection, scrollToSection, coins }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-100 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">HJ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-gray-800 dark:text-white">Harsh Jindal</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Full Stack Developer</span>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-900/50 dark:to-amber-900/50 px-3 sm:px-4 py-2 rounded-full border border-yellow-200 dark:border-yellow-700">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-spin shadow-sm"></div>
              <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">{coins}</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {['home', 'about', 'experience', 'responsibilities', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm ${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                }`}
              >
                {section === 'responsibilities' ? 'Leadership' : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 shadow-lg"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-2 mt-4">
              {['home', 'about', 'experience', 'responsibilities', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => handleMobileNavClick(section)}
                  className={`px-3 py-3 rounded-xl font-medium transition-all duration-300 text-center text-sm ${
                    activeSection === section 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                  }`}
                >
                  {section === 'responsibilities' ? 'Leadership' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;