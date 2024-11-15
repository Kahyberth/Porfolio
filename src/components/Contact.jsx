import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-mystic-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-medieval text-center mb-16 text-enchanted-500"
        >
          Summon Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-medieval mb-6">Send a Magical Message</h3>
            <p className="text-gray-300 mb-8">
              Whether you seek to discuss potential collaborations or wish to inquire about my services,
              your message shall reach me through this enchanted form.
            </p>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-gray-300 hover:text-enchanted-500 transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-enchanted-500 transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-enchanted-500 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medieval mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-mystic-900 border border-enchanted-500/30 
                         focus:border-enchanted-500 focus:ring-1 focus:ring-enchanted-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medieval mb-2">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-mystic-900 border border-enchanted-500/30 
                         focus:border-enchanted-500 focus:ring-1 focus:ring-enchanted-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medieval mb-2">Your Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-mystic-900 border border-enchanted-500/30 
                         focus:border-enchanted-500 focus:ring-1 focus:ring-enchanted-500 outline-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-enchanted-500 hover:bg-enchanted-600 text-white px-8 py-3 
                       rounded-lg font-medieval transition-colors"
            >
              Cast Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;