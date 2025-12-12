"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CyberButton } from "./ui/cyber-button";
import { TiltCard } from "./ui/tilt-card";
import { SpotlightCard } from "./ui/spotlight-card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-muted/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            A collection of projects showcasing my skills in software development, AI, and design.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioData.projects.map((project, index) => (
                            <TiltCard key={index} rotationFactor={15} className="h-full">
                                <SpotlightCard className="h-full bg-card/40 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                                    <div className="h-2 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-shimmer" />
                                    <CardHeader>
                                        <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="font-mono text-xs mt-1 text-secondary/80">
                                            {project.tech}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="flex gap-3 mt-auto">
                                        <CyberButton variant="outline" size="sm" className="w-full" asChild glitch>
                                            <Link href="#" className="flex items-center justify-center">
                                                <Github className="mr-2 h-4 w-4" />
                                                Code
                                            </Link>
                                        </CyberButton>
                                        <CyberButton size="sm" className="w-full bg-primary/20 text-primary hover:bg-primary/30 border-primary/50" asChild glitch>
                                            <Link href="#" className="flex items-center justify-center">
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Demo
                                            </Link>
                                        </CyberButton>
                                    </CardFooter>
                                </SpotlightCard>
                            </TiltCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
