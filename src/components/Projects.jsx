import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Café granito marrón",
description: "Developed a custom e-commerce website for a coffee startup, enabling them to showcase and sell their products directly to " +
"consumers. Integrated the platform with the WhatsApp API, providing customers with direct communication with the seller before " +
"finalizing purchases, enhancing the overall user experience",
    image: "/images/coffe_1.jpg",
    tags: ["React", "Poketbase", "Jotai"],
    link: "#"
  },
  {
    title: "Loan System",
    description: "Developed a robust loan management platform that facilitated dynamic resource lending and comprehensive report generation."+
"The system supported advanced access control based on user roles, time frames, geographical locations, and priority levels.",
    image: "/images/loan system.jpg",
    tags: ["React", "DrizzleORM", "Postgresql", "Lucia", "Zod", "Git", "Telefunc", "NanoID", "Hono"],
    link: "#"
  },
  {
    title: "TaskMate",
    description: "Encrypted messaging app for wizards and witches",
    image: "/images/taskmate.jpg",
    tags: ["React Native", "Node.js", "WebRTC"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medieval text-center mb-16 text-enchanted-500"
        >
          Mystical Artifacts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-mystic-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-enchanted-500/20 transition-all duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-medieval mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-enchanted-500/20 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-enchanted-500 hover:text-enchanted-600 transition-colors">
                  View Spellwork →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;