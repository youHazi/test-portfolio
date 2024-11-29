import React from 'react';
import { motion } from 'framer-motion';
import { projectDetails } from '../data/skills';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, staggerChildren: 0.2 }}
      className="min-h-screen bg-gray-900 p-8"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-12">프로젝트</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projectDetails.map((project, index) => (
          <motion.div
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
            transition={{ delay: index * 0.2 }}
          >
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-blue-50 text-custom-blue text-xs px-2 py-1 rounded-full"
                    whileHover={{ scale: 1.1}} 
                    transition={{ duration: 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex space-x-4">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition"
                  whileHover={{ scale: 1.1}} 
                  transition={{ duration: 0.1 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-custom-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  whileHover={{ scale: 1.1}} 
                  transition={{ duration: 0.1 }}
                >
                  라이브 데모
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
