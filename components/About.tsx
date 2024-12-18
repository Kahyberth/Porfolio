'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre-mí" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Sobre mí
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image 
            src="/profile.jpg" 
            alt="Tu Nombre" 
            width={1000} 
            height={1000} 
            className="rounded-full shadow-lg"
          />
        </motion.div>
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 leading-relaxed mb-4">
          Desarrollar soluciones Full Stack efectivas y modernas, adaptadas a las necesidades del cliente, utilizando tecnologías como React, 
          Nextjs, TailwindCSS y frameworks backend como Spring Boot y Nestjs
          </p>
          <p className="text-gray-300 leading-relaxed">
          Mi objetivo es desarrollar soluciones Full Stack modernas y efectivas, adaptadas a las necesidades del cliente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

