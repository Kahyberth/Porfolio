import { motion } from "framer-motion"

interface SkillTagProps {
  skill: string
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
    >
      {skill}
    </motion.div>
  )
}

