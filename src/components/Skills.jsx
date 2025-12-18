import React from 'react';
import { Code, Rocket, Target, Zap, Star } from 'lucide-react';

const Skills = () => {
  const skills = [
    { category: "Programming Languages", items: ["Java", "C", "SQL", "JavaScript", "TypeScript"], powerUp: "Fire Flower" },
    { category: "Web Development", items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS","PostgreSQL","MongoDB","Auth","JWT","REST APIs","Redux",], powerUp: "Super Star" },
    { category: "Developer Tools", items: ["Git","CI/CD","Github", "NPM", "VS Code"], powerUp: "Mushroom" },
    { category: "Course Work", items: ["DBMS", "Computer Networks", "Operating Systems", "Data Structure and Algorithms"], powerUp: "Green Shell" },
    { category: "Soft Skills", items: ["Team management", "Leadership", "Communication", "Photography", "Video Editing"], powerUp: "Cape Feather" }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="head text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            ⚡ Power-Up Collection ⚡
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Special abilities and tools mastered</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  {index === 0 && <Code className="text-white" size={24} />}
                  {index === 1 && <Rocket className="text-white" size={24} />}
                  {index === 2 && <Target className="text-white" size={24} />}
                  {index === 3 && <Zap className="text-white" size={24} />}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3">{skillGroup.category}</h3>
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-800 px-3 py-1 rounded-full text-xs sm:text-sm font-bold inline-block shadow-sm">
                  {skillGroup.powerUp}
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                      <Star className="text-yellow-500" size={14} />
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;