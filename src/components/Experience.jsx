import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Archmage of Frontend",
    company: "Mystic Solutions Inc.",
    period: "2020 - Present",
    description: "Led a coven of developers in crafting enchanted user interfaces",
    achievements: [
      "Implemented dark rituals resulting in 50% faster page loads",
      "Conjured responsive designs that adapt to any viewing crystal",
      "Mentored junior sorcerers in the arts of React"
    ]
  },
  {
    title: "Full-Stack Warlock",
    company: "Digital Dungeons LLC",
    period: "2018 - 2020",
    description: "Mastered both frontend enchantments and backend sorcery",
    achievements: [
      "Architected scalable spell systems using microservices",
      "Reduced bug manifestations by 75%",
      "Implemented secure authentication wards"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-mystic-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medieval text-center mb-16 text-enchanted-500"
        >
          Magical Chronicles
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border-l-2 border-enchanted-500 pl-8 relative"
            >
              <div className="absolute w-4 h-4 bg-enchanted-500 rounded-full -left-[9px] top-0" />
              <h3 className="text-2xl font-medieval mb-2">{exp.title}</h3>
              <div className="text-enchanted-500 mb-2">{exp.company}</div>
              <div className="text-gray-400 mb-4">{exp.period}</div>
              <p className="mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;