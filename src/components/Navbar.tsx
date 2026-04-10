"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Terminal, Cpu, Code2, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about", icon: <Terminal size={16} /> },
        { name: "Experience", href: "#experience", icon: <Shield size={16} /> },
        { name: "Skills", href: "#skills", icon: <Cpu size={16} /> },
        { name: "Projects", href: "#projects", icon: <Code2 size={16} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Neon Logo */}
                    <Link href="#" className="relative group">
                        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                            <span className="text-primary group-hover:animate-pulse shadow-[0_0_10px_rgba(0,255,153,0.5)] rounded-full p-1 border border-primary/50 bg-primary/10">
                                <Lock size={20} />
                            </span>
                            <span className="text-foreground group-hover:text-primary transition-colors duration-300">4d1b</span>
                        </div>
                        <div className="absolute -inset-2 bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-mono text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary -ml-4 absolute">
                                    &gt;
                                </span>
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <a
                            href="/resume"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-xs font-bold text-background bg-primary hover:bg-primary/90 transition-colors rounded-none border border-primary shadow-[0_0_10px_rgba(0,255,153,0.5)]"
                        >
                            RESUME
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center gap-3 text-lg font-mono text-foreground hover:text-primary transition-colors p-2 border-l-2 border-transparent hover:border-primary hover:bg-primary/5"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 px-4 py-3 text-center text-sm font-bold text-background bg-primary hover:bg-primary/90 transition-colors rounded-none border border-primary shadow-[0_0_10px_rgba(0,255,153,0.5)]"
                            >
                                OPEN RESUME
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
