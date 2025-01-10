'use client'

import {useState} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const menuVariants = {
        open: {opacity: 1, x: 0},
        closed: {opacity: 0, x: "100%"},
    }

    return (
        <header className="py-6 px-4 md:px-6 fixed w-full z-10 bg-white shadow-sm">
            <nav className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold">
                    Portfolio
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </button>
                </div>
            </nav>
            <motion.div
                className="fixed top-0 right-0 h-screen w-64 bg-background shadow-lg p-6 md:hidden"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                transition={{duration: 0.3}}
            >
                <div className="flex flex-col space-y-4">
                    <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </motion.div>
        </header>
    )
}

