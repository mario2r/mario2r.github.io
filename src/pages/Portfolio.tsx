import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileAvatar from "../assets/profile.jpg";

const Portfolio = () => {
  const description = `Passionate about mobile app development with 12 years of experience building innovative iOS solutions. Specialized in Swift, UIKit, SwiftUI and Clean Architecture.\n
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
        <h2 className="text-xl font-semibold mb-4">Development Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Swift & Objective-C", "UIKit & SwiftUI", "Concurrency", "Networking", "CoreData", "Memory Management", "Unit & UI Testing", "Mocking & Dependency Injection", "CI/CD"].map(skill => (
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
        <h2 className="text-xl font-semibold mb-4">Architecture & Design Patterns</h2>
        <div className="flex flex-wrap gap-2">
          {["MVVM", "VIPER", "Redux", "Clean Architecture", "SOLID Principles", "POO"].map(skill => (
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
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Leadership", "Agile", "Scrum", "Solid Principles", "CI/CD"].map(skill => (
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
          <li>Precio Luz<a href="https://apps.apple.com/es/app/precioluz-pvpc/id1612287299" className="text-blue-500">Apple Store</a></li>
          <li>Carburantes<a href="https://apps.apple.com/es/app/carburantes/id1633480481" className="text-blue-500">Apple Store</a></li>
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
          <li><strong>ifeel - Humanising Growth</strong> - Principal iOS engineer (January 2024 - Present)</li>
          <li><strong>MaaS Global Ltd</strong> Senior iOS engineer (October 2021 - December 2023)</li>
          <li><strong>Telefónica</strong> Senior iOS engineer (January 2020 - October 2021)</li>
          <li><strong>Coca Cola European Partners</strong> Senior iOS engineer (July 2017 - December 2019)</li>
          <li><strong>Locken Ibérica</strong> Mid iOS engineer (January 2016 - June 2017)</li>
          <li><strong>Never Empty</strong> Mid iOS engineer (March 2015 - December 2015)</li>
          <li><strong>New Technologies Global Systems</strong> Junior iOS engineer (March 2013 - March 2015)</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Portfolio;