"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlitchText } from "./effects/GlitchText";
import { CyberButton } from "./ui/cyber-button";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";
import { CyberGrid, BlockchainNodes, BinaryRain } from "./ui/backgrounds";

export const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Animated Backgrounds */}
            <CyberGrid />
            <BlockchainNodes />
            <BinaryRain />
            
            {/* Floating Particles (Simulated with CSS/Divs for performance) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {mounted && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-primary/20 rounded-full"
                        initial={{
                            x: Math.random() * 1000,
                            y: Math.random() * 1000,
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                        style={{
                            width: Math.random() * 4 + 1 + "px",
                            height: Math.random() * 4 + 1 + "px",
                        }}
                    />
                ))}
            </div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-mono text-secondary border border-secondary/30 rounded-full bg-secondary/10 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        System Online
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        <span className="block text-foreground drop-shadow-lg">Mohammad Adib Abtahi</span>
                        <div className="mt-2">
                             <GlitchText 
                                text="Cybersecurity, AI & Blockchain" 
                                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-[0_0_15px_rgba(0,255,153,0.3)]" 
                            />
                        </div>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 font-mono">
                        Securing the Digital Frontier | AI Innovation | System Architecture
                        <br />
                        Crafting intelligent defense mechanisms and next-gen software solutions.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <CyberButton asChild size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground border-none shadow-[0_0_20px_rgba(255,0,60,0.3)] hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] transition-all" glitch>
                            <Link href="#projects">
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </CyberButton>
                        <CyberButton asChild variant="outline" size="lg" className="group border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary/50" glitch>
                            <Link href="#contact">
                                <Terminal className="mr-2 h-4 w-4" />
                                Contact Me
                            </Link>
                        </CyberButton>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};
