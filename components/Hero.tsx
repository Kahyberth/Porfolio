'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="flex items-center justify-center h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kahyberth Gonzalez
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desarrollador Full Stack
        </motion.p>
      </div>
    </section>
  )
}

