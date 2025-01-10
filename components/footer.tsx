import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Kahyberth" className="text-gray-600 hover:text-gray-900">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kahyberth/" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-gray-600">&copy; 2023 DevName. All rights reserved.</p>
      </div>
    </footer>
  )
}

