import React from 'react';
import harsh from '../assets/harsh-profile.jpg';
const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="head text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🍄 Player Profile 🍄
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Get to know the character behind the code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl overflow-hidden">
              <img 
              
                src={harsh}
                alt="Harsh Jindal" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-800/50 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4 flex items-center">
                🎓 <span className="ml-2">Quest Log</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing a Bachelor of Technology in Computer Science and Engineering at the LNM Institute of Information Technology. 
                I have a solid foundation in computer science fundamentals and practical expertise with programming along with Data Structures and Algorithms.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/50 dark:to-emerald-800/50 p-6 sm:p-8 rounded-2xl border border-green-100 dark:border-green-800">
              <h3 className="text-xl sm:text-2xl font-bold text-green-700 dark:text-green-200 mb-4 flex items-center">
                ⚡ <span className="ml-2">Power-Up Status</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I have expertise in Web Development and Database management, along with fluency in languages like Java and C. 
                I have a strong sense of motivation, pick things up quickly, and am enthusiastic about using technology to tackle challenging issues.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-800/50 p-6 sm:p-8 rounded-2xl border border-purple-100 dark:border-purple-800">
              <h3 className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-200 mb-4 flex items-center">
                🚀 <span className="ml-2">Current Mission</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently looking for opportunities to improve my technical proficiency in a fast-paced work environment and contribute to creative initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;