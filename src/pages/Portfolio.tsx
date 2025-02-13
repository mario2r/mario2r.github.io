import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileAvatar from "../assets/profile.jpg";

const Portfolio = () => {
  const description = `Passionate about mobile app development with 12 years of experience building innovative iOS solutions. Specialized in Swift, UIKit, SwiftUI, and modern architectures like MVVM and Clean Architecture.\n
Experienced in developing scalable apps, performance optimization, and ensuring high-quality standards within the Apple ecosystem. Skilled in API integration, CoreData, and CI/CD pipelines for efficient deployments.\n
I thrive on solving complex problems and creating seamless, intuitive user experiences. Committed to best practices, continuous learning, and teamwork to drive projects forward.`
  
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Profile Section */}
      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={ProfileAvatar}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
        />
        <h1 className="text-2xl font-bold mt-4">Mario Romero Rodriguez</h1>
        <p className="text-gray-600">Senior iOS Engineer  | Swift Enthusiast | Mobile App Architect</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-blue-600 text-2xl hover:text-blue-800"><FaLinkedin /></a>
          <a href="#" className="text-gray-700 text-2xl hover:text-black"><FaGithub /></a>
          <a href="mailto:mario.rom.rodr@outlook.com" className="text-red-600 text-2xl hover:text-red-800"><FaEnvelope /></a>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mt-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-2xl font-bold mt-4">About me</h1>
        <p className="text-gray-600 whitespace-break-spaces">{description}</p>
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mt-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4">Tech Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Swift", "SwiftUI", "Objective-C", "UIKit", "Xcode", "CoreData", "Combine", "Lokalise"].map(skill => (
            <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mt-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold mb-4">Methodologies</h2>
        <div className="flex flex-wrap gap-2">
          {["Agile", "Scrum", "TDD", "SOLID", "CI/CD"].map(skill => (
            <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mt-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Fitness Tracker App - <a href="#" className="text-blue-500">GitHub</a></li>
          <li>Weather App - <a href="#" className="text-blue-500">GitHub</a></li>
        </ul>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        className="bg-white shadow-lg rounded-2xl p-6 max-w-lg mt-6 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        <ul className="text-gray-700">
          <li><strong>Company A</strong> - Senior iOS Developer (2020 - Present)</li>
          <li><strong>Company B</strong> - iOS Developer (2017 - 2020)</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Portfolio;