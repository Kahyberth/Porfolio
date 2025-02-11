import { Github, Linkedin, Mail } from "lucide-react";
import TimelineItem from "./components/TimelineItem";
import ProjectCard from "./components/ProjectCard";
import SkillTag from "./components/SkillTag";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold mb-4">Kahyberth</h2>
          <p className="text-xl text-gray-400 mb-6">Full Stack Developer</p>
          <p className="text-gray-300 mb-6 max-w-2xl">
          I’m a passionate full-stack developer with over two years of experience crafting elegant, efficient, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, 
          I’m dedicated to building scalable and innovative solutions that meet the highest technical standards while delivering exceptional user experiences.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Kahyberth"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kahyberth/"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:kahyberth@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="ml-4">
            <TimelineItem
              year="August 2023 - November 2024"
              title="Software Engineer"
              description="Developed and maintained web applications using React, Nest.js, and PostgreSQL."
            />
            <TimelineItem
              year="May 2023 - October 2023"
              title="Freelance Developer"
              description="Maintained and updated Loan Management System for a local educational institution. Developed new features and fixed bugs."
            />
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="TaskMate"
              description="A task management app built with React, Nest.js, Microservices architecture."
              tags={[
                "React",
                "Node.js",
                "Docker",
                "Microservices",
                "Kubernetes",
                "Nats.io",
                "Redis",
                "PostgreSQL",
                "TypeScript",
                "Tailwind CSS",
                "Jest",
                "Swagger",
                "Prometheus",
                "Grafana",
                "Nest.js",
                "Google Cloud Platform",
              ]}
            />
            <ProjectCard
              title="Talki"
              description="A real-time chat and video calling app built with React, Node.js, and WebRTC."
              demoLink="https://talki-drab.vercel.app/"
              link="git@github.com:Kahyberth/Talki.git"
              tags={[
                "Next.js",
                "Nest.js",
                "Node.js",
                "WebRTC",
                "Socket.io",
                "Tailwind CSS",
                "Turso",
                "PostgreSQL",
                "TypeScript",
                "Jest",
                "Auth.js",
                "AWS",
                "Docker",
              ]}
            />
            <ProjectCard
              title="Café granito marrón"
              description="An e-commerce platform for a coffee shop"
              link="https://cafegranitomarron.com/"
              tags={[
                "React",
                "API Integration",
                "TypeORM",
                "Jotai",
                "Mantine",
                "TypeScript",
                "Firebase",
                "PostgreSQL",
                "Nest.js",
              ]}
            />
            <ProjectCard
              title="Loan Management System"
              description="A web application for managing loans for a local educational institution."
              tags={["Next.js", "PostgreSQL", "Tailwind CSS"]}
            />
            <ProjectCard
              title="Huffmann Coding"
              description="Application that compresses and decompresses text files using the Huffmann coding algorithm."
              link="https://github.com/Kahyberth/Huffmann"
              tags={["Java", "JUnit"]}
            />
            <ProjectCard
              title="Linja Game AI"
              description="Linja game AI using Minimax algorithm and a heuristic function to evaluate the board."
              link="https://github.com/Kahyberth/IA-Project2"
              tags={["Python", "Pygame", "Minimax"]}
            />
            <ProjectCard
              title="Search Algorithms in a Game AI"
              description="The algorithms A* and Uniform Cost modified this by applying it to a game to see how it behaved in the searches it performed and which was more optimal in each occasion. "
              link="https://github.com/Kahyberth/IA-Project"
              tags={["Python", "Pygame", "A*", "Uniform Cost"]}
            />
            <ProjectCard
              title="Interactive Urban Traffic Simulation"
              description="A real-time simulation of urban traffic flow with dynamic car generation, traffic light control, and interactive features like pause/restart."
              link="https://github.com/Kahyberth/Proyecto-Simulacion"
              tags={["Python", "Pygame", "POO"]}
            />
            <ProjectCard
              title="Morse Code Translator"
              description="A Java-based application that reads Morse code from a text file and translates it into readable text using a predefined mapping of letters and their Morse equivalents."
              link="https://github.com/Kahyberth/MorseCode-Translator"
              tags={["Java", "StringTokenizer", "File Handling"]}
            />
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-4">
            <SkillTag skill="JavaScript" />
            <SkillTag skill="TypeScript" />
            <SkillTag skill="React" />
            <SkillTag skill="Next.js" />
            <SkillTag skill="Tailwind CSS" />
            <SkillTag skill="Node.js" />
            <SkillTag skill="Nest.js" />
            <SkillTag skill="Python" />
            <SkillTag skill="Django" />
            <SkillTag skill="SQL" />
            <SkillTag skill="NoSQL" />
            <SkillTag skill="PostgreSQL" />
            <SkillTag skill="MongoDB" />
            <SkillTag skill="Docker" />
            <SkillTag skill="Kubernetes" />
            <SkillTag skill="AWS" />
            <SkillTag skill="Java" />
            <SkillTag skill="SpringBoot" />
            <SkillTag skill="Go" />
            <SkillTag skill="Fiber" />
            <SkillTag skill="Grafana" />
            <SkillTag skill="Prometheus" />
            <SkillTag skill="Kafka" />
            <SkillTag skill="Redis" />
            <SkillTag skill="Jest" />
            <SkillTag skill="JUnit" />
            <SkillTag skill="Nats.io" />
            <SkillTag skill="RabbitMQ" />
            <SkillTag skill="Microservices" />
            <SkillTag skill="Swagger" />
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-gray-300 mb-4">
            Feel free to reach out to me for any inquiries or opportunities:
          </p>
          <a
            href="mailto:john@example.com"
            className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
          >
            kahyberth@gmail.com
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Kahyberth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
