import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "Celebal Technologies",
      location: "Remote",
      period: "May 2025 – Current",
      responsibilities: [
        "Implemented state management solutions (Context API/hooks) and followed best practices for scalable and maintainable front-end code",
        "Ensured responsiveness and cross-browser compatibility using CSS3, Flexbox, and media queries"
      ],
      level: "World 2"
    },
    {
      title: "Javascript Developer",
      company: "KSD Advisory",
      location: "Remote",
      period: "Feb 2025 – April 2025",
      responsibilities: [
        "Developed JavaScript functions leveraging OpenAI and Gemini APIs to enhance automation and data retrieval",
        "Integrated Google Drive API to automate the process of user deletion and data transfer",
        "Worked on Microsoft Graph APIs to develop a function to automate the process of ownership transfer"
      ],
      level: "World 1"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="head text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🏰 Adventure Timeline 🏰
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Journey through the worlds of experience</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600">
              <div className="flex flex-col sm:flex-row items-start justify-between mb-6 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Briefcase className="text-white" size={20} />
                  </div>
                  <div className="flex-1 sm:flex-none">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end space-x-4 sm:space-x-0 sm:space-y-2 w-full sm:w-auto justify-between sm:justify-start">
                  <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                    {exp.level}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-right">{exp.period}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-gray-600 dark:text-gray-300 flex items-start leading-relaxed">
                    <span className="text-yellow-500 mr-3 mt-1 flex-shrink-0">⭐</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;