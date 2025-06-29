import React, { useState } from 'react';
import { Mail, Linkedin, Github, Trophy, Award, Star, Rocket, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/mwpbagrr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact: ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="head text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            📮 Warp Pipe Communication 📮
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Ready to start your next adventure? Let's connect!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-800/50 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-200 mb-6">🎯 Contact Power-Ups</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:harshjindal458@gmail.com"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">Power Mail</p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm truncate">harshjindal458@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/jindal07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Linkedin className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">Professional Network</p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">LinkedIn Profile</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/jindal07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white/70 dark:bg-gray-700/70 rounded-xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 border border-gray-100 dark:border-gray-600"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <Github className="text-white" size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-gray-800 dark:text-white text-sm sm:text-base">Code Repository</p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">GitHub Profile</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/50 dark:to-amber-800/50 p-6 sm:p-8 rounded-2xl border border-yellow-100 dark:border-yellow-800">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 dark:text-yellow-200 mb-6">🏆 Achievements Unlocked</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Trophy className="text-yellow-600 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">97.13 percentile in JEE Mains</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="text-yellow-600 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">95% in Class 12, 92% in Class 10</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="text-yellow-600 flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Complete Web Development Certification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-1 rounded-2xl shadow-xl">
            <div className="bg-white dark:bg-gray-700 p-6 sm:p-8 rounded-xl h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">🚀 Ready to Team Up?</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-green-800 dark:text-green-200 font-medium">Mission Successful! 🎉</p>
                    <p className="text-green-600 dark:text-green-300 text-sm">Your message has been sent and saved to Excel!</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-red-800 dark:text-red-200 font-medium">Mission Failed! 😞</p>
                    <p className="text-red-600 dark:text-red-300 text-sm">Please try again or contact directly via email.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Player Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-green-500 dark:focus:border-green-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Communication Portal</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-green-500 dark:focus:border-green-400 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Quest Details</label>
                  <textarea 
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:border-green-500 dark:focus:border-green-400 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-2.5 sm:py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                  }`}
                >
                  <Rocket size={18} />
                  <span>{isSubmitting ? 'Launching...' : 'Launch Mission!'}</span>
                </button>
              </form>

              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-700 dark:text-blue-300 text-center">
                  📊 All submissions are automatically saved to Excel spreadsheet for easy tracking!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;