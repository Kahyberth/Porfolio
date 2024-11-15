import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Enchanted Realms",
    description: "A mystical e-commerce platform built with Next.js and GraphQL",
    image: "https://picsum.photos/400/250",
    tags: ["Next.js", "GraphQL", "Tailwind"],
    link: "#"
  },
  {
    title: "Spellbound Analytics",
    description: "Real-time dashboard for tracking magical metrics",
    image: "https://picsum.photos/400/251",
    tags: ["React", "D3.js", "Firebase"],
    link: "#"
  },
  {
    title: "Mystic Messenger",
    description: "Encrypted messaging app for wizards and witches",
    image: "https://picsum.photos/400/252",
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