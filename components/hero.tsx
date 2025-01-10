'use client'

import {motion} from 'framer-motion'
import {Github, Linkedin, Download} from 'lucide-react'
import {Button} from '@/components/ui/button'

export function Hero() {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'cv/Kahyberth_cv.pdf';
        link.download = 'Kahyberth_cv.pdf';
        link.click();
    };

    return (
        <section id="about"
                 className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
            <motion.div
                className="container mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4 text-gray-900"
                    variants={itemVariants}
                >
                    Kahyberth 👋
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl mb-8 text-gray-600"
                    variants={itemVariants}
                >
                    Full-Stack Developer
                </motion.p>
                <motion.div
                    className="flex justify-center space-x-4 mb-8"
                    variants={itemVariants}
                >
                    <a href="https://github.com/Kahyberth"
                       className="text-gray-600 hover:text-gray-900 transition-colors">
                        <Github size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/kahyberth/"
                       className="text-gray-600 hover:text-gray-900 transition-colors">
                        <Linkedin size={24}/>
                    </a>
                </motion.div>
                <motion.div
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    variants={itemVariants}
                >
                    <a href="#projects"
                       className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                        View My Work
                    </a>
                    <Button variant="outline" size="lg" className="rounded-full" onClick={handleDownload}>
                        <Download className="mr-2 h-4 w-4"/> Download CV
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    )
}

