import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
const Hero = () => {
  return (
    <>
      <div id="home" className="relative h-screen flex items-center justify-center bg-fantasy">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-6xl font-medieval mb-4">Software Developer</h1>
          <h2 className="text-3xl font-medieval text-enchanted-500 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 font-medieval">
            I'm Kahyberth Gonzalez, a Full Stack Developer passionate about building both efficient server-side applications and dynamic, user-friendly frontend experiences, ensuring seamless integration across the entire stack.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-enchanted-500 hover:bg-enchanted-600 text-white px-8 py-3 rounded-lg font-medieval"
          >
            Welcome
          </motion.button>
        </motion.div>
      </div>
      <Cards />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Hero;
