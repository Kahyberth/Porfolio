'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'TypeScript', level: 80 },
  { name: 'Python', level: 80 },
  { name: 'Java', level: 80 },
  { name: 'Nest.js', level: 85 },
  { name: 'Springboot', level: 85 },
  {name: 'Microservices', level: 70 },
  { name: 'Google Cloud', level: 70 },
  { name: 'Docker', level: 70 },
  { name: 'Kubernetes', level: 70 },
  { name: 'Git', level: 80 },
  { name: 'GraphQL', level: 85 },
  { name: 'PostgreSQL', level: 90 },
  { name: 'MongoDB', level: 85 },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Mis Habilidades
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className="bg-gray-800 rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-green-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

