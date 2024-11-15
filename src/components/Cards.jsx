import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Frontend',
    icon: '🔮',
    description: 'Mastery of React Enchantments'
  },
  {
    title: 'Backend',
    icon: '⚔️',
    description: 'Node.js Dark Arts'
  },
  {
    title: 'Database',
    icon: '📚',
    description: 'Keeper of Digital Scrolls'
  },
  {
    title: 'Projects',
    icon: '🏰',
    description: 'Veteran of Code Wars'
  }
];

const Cards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-mystic-800 border border-enchanted-500/30 rounded-lg p-6 hover:shadow-lg hover:shadow-enchanted-500/20 transition-all duration-300"
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-xl font-medieval mb-2">{card.title}</h3>
          <p className="text-gray-400 font-medieval">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;