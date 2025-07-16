import React from "react";
import { ExternalLink, Gamepad2, Trophy, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SyntaxSniffer",
      description:
        "AI-powered code reviewer using React.js, TailwindCSS, and Gemini API to analyze and provide intelligent feedback on code quality and optimization.",
      technologies: ["React.js", "TailwindCSS", "Gemini API", "JavaScript"],
      link: "https://syntax-sniffer.netlify.app/",
      github: "https://github.com/jindal07/SyntaxSniffer",
      highlights: [
        "Integrated real-time code analysis leveraging Gemini's AI capabilities",
        "Enhanced code review efficiency and automated best practice suggestions",
      ],
      world: "Cloud World",
      difficulty: "Expert",
    },
    {
      title: "HealthFlow AI",
      description:
        "Built a full-stack AI-powered health report analyzer that converts PDF medical reports to markdown and explains them using the Gemini API with simplified insights and actionable recommendations.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Gemini API",
        "Express.js",
        "Node.js",
      ],
      link: "https://health-flow.netlify.app/",
      github: "https://github.com/jindal07/healthFlowAI",
      highlights: [
        " Implemented in-memory PDF parsing and AI analysis pipeline using Node.js and React, ensuring privacy with no data storage.",
        "Developed an in-memory Node.js backend with PDF parsing and Gemini integration, ensuring complete privacy with no file storage and real-time health report interpretation.",
        "Optimized for user experience with drag-and-drop PDF upload, animated loading states, and structured output cards for Summary, Key Indicators, and Recommendations.",
        
      ],
      world: "Cloud World",
      difficulty: "Advanced",
    },
    
    {
      title: "VogueNext",
      description:
        "VogueNext, a modern clothing e-commerce store, focused on delivering trendy and affordable fashion through a user-centric online platform.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "MongoDB",
        "Express.js",
        "Node.js",
      ],
      link:"https://vogue-next.vercel.app/",
      github: "https://github.com/jindal07/vogueNext",
      highlights: [
        "Built with MERN Stack (MongoDB, Express.js, React.js, Node.js) for a seamless full-stack application.",
        "Secure Payment Integration using Razorpay for hassle-free checkout.",
        "Admin Dashboard to manage products, users, and orders.",
        "Custom Hooks and Context API used for efficient state management.",
      ],
      world: "Pipe World",
      difficulty: "Expert",
    },
    {
      title: "TaskFlow",
      description:
        "Task management web app built with React and Tailwind CSS featuring dynamic task filters and real-time UI updates.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      link: "https://taskflow01.netlify.app/",
      github: "https://github.com/jindal07/TaskFlow",
      highlights: [
        "Dynamic task filters by status and priority",
        "Deployed on Netlify with seamless GitHub integration for CI/CD",
      ],
      world: "Pipe World",
      difficulty: "Advanced",
    },
    
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="head text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            🎮 Game Worlds 🎮
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Explore the projects I've conquered
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl shadow-xl"
            >
              <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl h-full">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-6 space-y-4 sm:space-y-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white pr-0 sm:pr-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2 w-full sm:w-auto justify-start sm:justify-end">
                    <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-800 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm text-center whitespace-nowrap">
                      {project.world}
                    </span>
                    <span
                      className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-sm text-center whitespace-nowrap ${
                        project.difficulty === "Expert"
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                          : "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      }`}
                    >
                      {project.difficulty}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-sm sm:text-base">
                    🔧 Power-Ups Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-sm sm:text-base">
                    ⭐ Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start leading-relaxed"
                      >
                        <Trophy
                          className="text-yellow-500 mr-2 mt-1 flex-shrink-0"
                          size={14}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <Gamepad2 className="mr-2" size={18} />
                    Enter World
                    <ExternalLink className="ml-2" size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <Github className="mr-2" size={18} />
                    Code Vault
                    <ExternalLink className="ml-2" size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
