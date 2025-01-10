'use client'

import {motion} from 'framer-motion'

const skills = [
    {name: 'JavaScript', icon: '🟨', description: 'Expert in modern JavaScript (ES6+)'},
    {name: 'TypeScript', icon: '🟦', description: 'Static typing and codebase scalability'},
    {name: 'React', icon: '⚛️', description: 'Building responsive and interactive UIs'},
    {name: 'Next.js', icon: '🚀', description: 'React framework for production'},
    {name: 'Node.js', icon: '🟩', description: 'Server-side JavaScript and API development'},
    {name: 'Nest.js', icon: '🐱', description: 'Backend framework for TypeScript'},
    {name: 'Jest', icon: '🃏', description: 'Unit and integration testing'},
    {name: 'RabbitMQ', icon: '🐇', description: 'Message broker and task queue'},
    {name: 'Redis', icon: '🔴', description: 'In-memory data structure store'},
    {name: 'Go', icon: '🐹', description: 'Efficient concurrency and robust systems programming'},
    {name: 'Microservices', icon: '📦', description: 'Architecture for building scalable applications'},
    {name: 'Java', icon: '☕', description: 'Object-oriented programming and Android development'},
    {name: 'Spring Boot', icon: '🍃', description: 'Java framework for web applications'},
    {name: 'Python', icon: '🐍', description: 'Data analysis and backend development'},
    {name: 'SQL', icon: '🗄️', description: 'Database design and optimization'},
    {name: 'Git', icon: '🔀', description: 'Version control and collaboration'},
    {name: 'Docker', icon: '🐳', description: 'Containerization and deployment'},
    {name: 'Kubernetes', icon: '⛵', description: 'Container orchestration and scaling'},
    {name: 'AWS', icon: '☁️', description: 'Cloud computing and serverless architecture'},
    {name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework'},
    {name: 'Postgres', icon: '🐘', description: 'Relational database management'},
    {name: 'MongoDB', icon: '🍃', description: 'NoSQL database and document storage'},
    {name: 'GraphQL', icon: '🎯', description: 'Query language for APIs'},
    {name: 'NGINX', icon: '🌐', description: 'High-performance web serving and reverse proxying'}
]

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="bg-white p-6 rounded-lg shadow-md text-center group hover:bg-blue-50 transition-colors duration-300"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.3, delay: index * 0.1}}
                            whileHover={{scale: 1.05}}
                        >
                            <span className="text-4xl mb-2 block">{skill.icon}</span>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600">{skill.name}</h3>
                            <p className="text-sm text-gray-600 group-hover:text-gray-800">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

