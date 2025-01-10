'use client'

import {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {X} from 'lucide-react'
import Image from "next/image";


interface Project {
    title: string
    description: string
    longDescription: string
    technologies: string[]
    link: string
    image: string
}

const projects = [
    {
        title: 'Café granito marrón',
        description: 'A modern e-commerce platform for a coffee shop.',
        longDescription: 'Café granito marrón is a modern e-commerce platform for an artisan coffee distributor. It features a responsive design and a shopping cart. Customers can browse products, add them to the cart and place orders directly with the seller using WhatsApp api as an intermediary.',
        technologies: ['TypeScript', 'React', 'Postgres', 'Firebase', 'DrizzleORM', 'Jotai', 'Poketbase'],
        link: 'https://cafegranitomarron.com/',
        image: '/images/cafe_granito.jpg'
    },
    {
        title: 'Talki Chat App',
        description: 'A real-time chat application with user authentication.',
        longDescription: 'Talki is a real-time chat application that allows users to create accounts, join chat rooms, and send messages. It uses WebSockets for real-time communication and features a responsive design.',
        technologies: ['TypeScript', 'Next.js', 'Nest.js', 'Turso', 'Socket.io', 'LiveKit', 'Docker', 'AWS', 'DrizzleORM', 'Zustand'],
        link: 'https://talki-drab.vercel.app/',
        image: '/images/talki.jpg'
    },
    {
        title: 'Loan System',
        description: 'A loan management system for an educational institution.',
        longDescription: 'Loan System is a loan management system for an educational institution. It allows students to apply for loans, keep track of their status, features a customizable design and a control panel for administrators to manage loans.',
        technologies: ['TypeScript', 'React', 'Hono', 'Telefunc', 'Zod', 'Nanoid', 'DrizzleORM', 'Postgres'],
        link: '#',
        image: '/images/loan_system.jpg'
    },
    {
        title: 'TaskMate',
        description: 'A task management application for teams.',
        longDescription: 'TaskMate is a task management application for teams. It allows users to create tasks, assign them to team members, and track their progress. It features a responsive design and a drag-and-drop interface.',
        link: '#',
        image: '/images/taskmate.jpg',
        technologies: ['TypeScript', 'Python', 'Next.js', 'Nest.js', 'Zustand', 'Socket.io', 'DrizzleORM', 'Postgres', 'Turso', 'Django', 'Microservices', 'LiveKit', 'Nats.io', 'Google Cloud'],
    },
    {
        title: 'Linja Game IA Bot',
        description: 'A bot that plays the Linja game using AI.',
        longDescription: 'Linja Game IA Bot is a bot that plays the Linja game using AI. It uses the Minimax algorithm to calculate the best move and plays against a human player. It features a responsive design and a customizable difficulty level.',
        link: 'https://github.com/Kahyberth/IA-Project2',
        image: '/images/linja_game.jpg',
        technologies: ['Python', 'Pygame', 'IA', 'Minimax', 'Heuristics'],
    },
]

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project: Project, index) => (
                        <motion.div
                            key={project.title}
                            className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: index * 0.1}}
                            onClick={() => setSelectedProject(project)}
                            whileHover={{scale: 1.03}}
                        >
                            <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" width={800} height={400}/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}
                                              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative"
                            initial={{scale: 0.9, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0.9, opacity: 0}}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X size={24}/>
                            </button>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.title}</h3>
                            <Image src={selectedProject.image} alt={selectedProject.title} width={800} height={400}
                                 className="w-full h-64 object-cover rounded-md mb-4"/>
                            <p className="text-gray-600 mb-4">{selectedProject.longDescription}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedProject.technologies.map((tech) => (
                                    <span key={tech}
                                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                                ))}
                            </div>
                            <a href={selectedProject.link} className="text-blue-600 hover:underline">View Project →</a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

