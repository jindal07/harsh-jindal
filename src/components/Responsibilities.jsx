import React from 'react';
import { Crown, Users, Award, Target, Star, Shield } from 'lucide-react';

const Responsibilities = () => {
  const responsibilities = [
    {
      title: "Coordinator ",
      organization: "Imagination- The photography club of LNMIIT",
      period: "2024 - 2025",
      description: "Led photography initiatives, organized workshops, and managed event coverage.",
      icon: Crown,
      level: "Leadership Castle"
      
    },
    {
      title: "Sponsorship and Management Head ",
      organization: "Vivacity’25 - Annual cultural festival of LNMIIT",
      period: "2024 - 2025",
      description: "Spearheaded sponsorship acquisition and financial planning for the event.",
      
      icon: Users,
      level: "Team Fortress"
    },
    {
      title: "Sponsorship and Marketing Lead",
      organization: "Vivacity’24 - Annual cultural festival of LNMIIT",
      period: "2023 - 2024",
      description: "Managed marketing strategies and partnered with sponsors for event success.",
      
      icon: Target,
      level: "Event Kingdom"
    }
  ];

  return (
    <section id="responsibilities" className="py-16 sm:py-20 bg-purple-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="head text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            👑 Leadership Quests 👑
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Positions of responsibility and leadership achievements</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {responsibilities.map((resp, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600">
              <div className="flex flex-col lg:flex-row items-start justify-between mb-6 space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <resp.icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">{resp.title}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-purple-600 dark:text-purple-400 mb-1">{resp.organization}</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{resp.description}</p>
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col items-center lg:items-end space-x-4 lg:space-x-0 lg:space-y-2 w-full lg:w-auto justify-between lg:justify-start">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                    {resp.level}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-right">{resp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Stats */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-1 rounded-2xl shadow-xl">
            <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl">
              <h3 className="head text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">🏆 Leadership Impact 🏆 </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Users className="text-white" size={20} />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">500+</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Students Impacted</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Target className="text-white" size={20} />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">10+</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Events Organized</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Crown className="text-white" size={20} />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">3</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Leadership Roles</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Shield className="text-white" size={20} />
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">2+</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;