"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CyberButton } from "./ui/cyber-button";
import { TiltCard } from "./ui/tilt-card";
import { SpotlightCard } from "./ui/spotlight-card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { BlockchainNodes } from "./ui/backgrounds";

export const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const getProjectStyle = (tech: string) => {
        if (tech.includes("Solidity") || tech.includes("Web3") || tech.includes("Blockchain")) {
            return {
                borderColor: "border-accent/30",
                hoverBorder: "hover:border-accent/60",
                iconColor: "text-accent",
                badgeBg: "bg-accent/10",
                badgeText: "text-accent",
                spotlight: "rgba(255, 215, 0, 0.15)", // Gold glow
                shadow: "group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
            };
        }
        if (tech.includes("AI") || tech.includes("Python")) {
            return {
                borderColor: "border-secondary/30",
                hoverBorder: "hover:border-secondary/60",
                iconColor: "text-secondary",
                badgeBg: "bg-secondary/10",
                badgeText: "text-secondary",
                spotlight: "rgba(0, 210, 255, 0.15)", // Blue glow
                shadow: "group-hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]"
            };
        }
        return {
            borderColor: "border-primary/30",
            hoverBorder: "hover:border-primary/60",
            iconColor: "text-primary",
            badgeBg: "bg-primary/10",
            badgeText: "text-primary",
            spotlight: "rgba(0, 255, 153, 0.15)", // Green glow
            shadow: "group-hover:shadow-[0_0_20px_rgba(0,255,153,0.2)]"
        };
    };

    return (
        <section id="projects" className="py-20 bg-background relative overflow-hidden">
             {/* Cyber Grid Background */}
             <BlockchainNodes />
             <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#00ff99_1px,transparent_1px),linear-gradient(-45deg,#00ff99_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center mb-12 text-center">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest text-secondary border border-secondary/30 rounded-full bg-secondary/5">
                            PROJECT_DATABASE
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            Featured <span className="text-secondary">Operations</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl font-mono text-sm md:text-base">
                            Executed protocols in software development, AI automation, blockchain, and secure interface design.
                        </p>
                    </div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {portfolioData.projects.map((project: any, index) => {
                            const style = getProjectStyle(project.tech);
                            // Override with project-specific colors if available
                            const finalStyle = {
                                ...style,
                                borderColor: project.color ? project.color.split(' ')[1] : style.borderColor,
                                hoverBorder: project.color ? project.color.split(' ')[2] : style.hoverBorder,
                                iconColor: project.color ? project.color.split(' ')[0] : style.iconColor,
                                badgeBg: project.badgeColor ? project.badgeColor.split(' ')[0] : style.badgeBg,
                                badgeText: project.badgeColor ? project.badgeColor.split(' ')[1] : style.badgeText,
                                spotlight: project.glow || style.spotlight,
                                shadow: project.glow ? `group-hover:shadow-[0_0_20px_${project.glow.replace('0.15', '0.2')}]` : style.shadow
                            };

                            return (
                                <motion.div key={index} variants={itemVariants} className="h-full">
                                    <TiltCard rotationFactor={10} className="h-full">
                                        <SpotlightCard className={`h-full bg-card/40 backdrop-blur-md border ${finalStyle.borderColor} ${finalStyle.hoverBorder} transition-all duration-500 group rounded-none ${finalStyle.shadow}`} spotlightColor={finalStyle.spotlight}>
                                            {/* Scanner Line Effect */}
                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${finalStyle.iconColor.split('-')[1]} to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity`} />
                                            
                                            <CardHeader className="relative overflow-hidden">
                                                <div className={`absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-50 transition-opacity ${finalStyle.iconColor}`}>
                                                    <Github size={60} />
                                                </div>
                                                <CardTitle className={`text-xl group-hover:${finalStyle.iconColor} transition-colors font-mono tracking-tight z-10`}>
                                                    {project.title}
                                                </CardTitle>
                                                <CardDescription className={`font-mono text-xs mt-2 ${finalStyle.badgeText} border ${finalStyle.borderColor} ${finalStyle.badgeBg} inline-block px-2 py-1`}>
                                                    {project.tech}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                                                    {project.description}
                                                </p>
                                            </CardContent>
                                            <CardFooter className="flex gap-3 mt-auto pt-6 border-t border-white/5">
                                                <CyberButton variant="outline" size="sm" className={`w-full rounded-none border-white/10 hover:${finalStyle.badgeBg} ${finalStyle.badgeText} group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]`} asChild glitch>
                                                    <Link href={project.link || "#"} className="flex items-center justify-center">
                                                        <Github className="mr-2 h-4 w-4" />
                                                        View Repository
                                                    </Link>
                                                </CyberButton>
                                            </CardFooter>
                                        </SpotlightCard>
                                    </TiltCard>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
