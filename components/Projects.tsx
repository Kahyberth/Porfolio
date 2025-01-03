'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'Café granito marrón', description: 'Estuve participanto en el desarrollo de un sitio web de e-commerce personalizado para una empresa de café, permitiéndoles mostrar y vender sus productos directamente a los consumidores. los consumidores', image: '/images/cafe.jpg', link: 'https://cafegranitomarron.com/' },
  { id: 2, title: 'Loan System', description: 'Desarrolle una sólida plataforma de gestión de préstamos que facilitaba el préstamo dinámico de recursos y la generación de informes. El sistema permitía un control de acceso basado en funciones de usuario, plazos, ubicaciones geográficas y niveles de prioridad.', image: '/images/loan system.jpg' },
  { id: 3, title: 'Talki', description: 'Talki es una aplicación de mensajería y videollamadas, diseñada especialmente para desarrolladores y gamers. Nuestra misión es facilitar una comunicación clara, fluida y productiva para que puedas enfocarte en lo que realmente importa: tus proyectos y tus sesiones de juego.', image: '/images/talki.jpg', link: 'https://talki-drab.vercel.app/' },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Mis Proyectos
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image src={project.image} alt={project.title} width={400} height={300} className="w-full" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.description}</p>
              <motion.button 
                onClick={() => {
                  if (project.link) window.open(project.link, '_blank')
                }}
                className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-md hover:from-purple-600 hover:to-pink-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver más
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

