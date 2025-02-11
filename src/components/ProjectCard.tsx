import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  link?: string
  demoLink?: string
  tags: string[]
}

export default function ProjectCard({ title, description, link, demoLink, tags }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-gray-700 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <a href={link} className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors">
          <Github className="w-4 h-4 mr-2" />
          GitHub
        </a>
        <a href={demoLink} className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors">
          <ExternalLink className="w-4 h-4 mr-2" />
          Live Demo
        </a>
      </div>
    </motion.div>
  )
}

