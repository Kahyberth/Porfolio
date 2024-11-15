import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-medieval mb-6 text-enchanted-500">About me</h2>
            <p className="text-gray-300 mb-4">
            I'm Kahyberth, a Full Stack Developer working with technologies like Node.js, React, and both SQL and NoSQL databases. 
            I specialize in building and optimizing full-stack applications, 
            leveraging frameworks such as Express, Next.js, and Django. 
            I'm also well-versed in SCRUM methodologies for agile project management.
            </p>
            <p className="text-gray-300 mb-4">
              My specializations include:
            </p>
            <ul className="list-none space-y-2">
              {['Frontend Sorcery (React, Next.js)', 'Backend Wizardry (Node.js, Python, Express, Nest.js, Microservices)', 'Database Enchantments (SQL, NoSQL)', 'DevOps (Docker, Kubernetes)', 
                'Cloud Magic (AWS, Google Cloud)'].map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-enchanted-500">✧</span>
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="w-full h-[400px] bg-mystic-800 rounded-lg shadow-lg shadow-enchanted-500/20 
                          border border-enchanted-500/30 overflow-hidden">
              <img 
                src="/images/e6b0b586-467a-46a8-8189-1d7c81e61f1d.webp" 
                alt="Wizard Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;