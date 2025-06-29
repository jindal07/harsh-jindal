import React from 'react';
import { Mail, Linkedin, Github, Star, Zap, Trophy, Gamepad2 } from 'lucide-react';

const Hero = ({ collectCoin, coins, showCoinAnimation }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Floating Elements - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute top-32 left-10 animate-bounce delay-100">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute top-52 right-20 animate-bounce delay-300">
          <Star className="text-yellow-500" size={20} />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-500">
          <Zap className="text-blue-500" size={24} />
        </div>
        <div className="absolute top-72 right-40 animate-bounce delay-700">
          <Trophy className="text-amber-500" size={18} />
        </div>
        <div className="absolute bottom-60 right-10 animate-bounce delay-200">
          <Gamepad2 className="text-purple-500" size={22} />
        </div>
        <div className="absolute top-96 left-40 animate-bounce delay-600">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-400 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Coin Animation */}
      {showCoinAnimation && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="animate-ping">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-xl sm:text-2xl">🪙</span>
            </div>
          </div>
        </div>
      )}

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Main Title with Enhanced Animation */}
        <div className="relative mb-6 sm:mb-8">
          <h1 className="head text-4xl sm:text-6xl md:text-8xl font-bold animate-bounce bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            HARSH JINDAL
          </h1>
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 animate-spin">
            <Star className="text-yellow-500" size={24} />
          </div>
        </div>

        {/* Subtitle with Level Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8 sm:mb-10">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 py-2 rounded-full font-bold shadow-lg text-sm sm:text-base">
            Level ∞
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium">
            Full Stack Developer
          </p>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-4 py-2 rounded-full font-bold shadow-lg text-sm sm:text-base">
            Ready!
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 leading-relaxed px-4">
          Crafting digital experiences with code, creativity, and a touch of Mario magic! 🍄
        </p>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="text-blue-500" size={18} />
              <span className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">2+</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Coding</span>
            </div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center justify-center space-x-2">
              <Gamepad2 className="text-purple-500" size={18} />
              <span className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">5+</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <a 
            href="mailto:harshjindal458@gmail.com"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 sm:px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
          >
            <Mail size={18} />
            <span>Power Mail</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/jindal07/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-5 sm:px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
          >
            <Linkedin size={18} />
            <span>Connect</span>
          </a>
          <a 
            href="https://github.com/jindal07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-5 sm:px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
          >
            <Github size={18} />
            <span>Code Vault</span>
          </a>
        </div>

        {/* Interactive Coin Collection */}
        <div className="space-y-4">
          <button
            onClick={collectCoin}
            className="animate-bounce bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
          >
            🪙 Collect Coin! 🪙
          </button>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Click to collect coins and unlock achievements!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
