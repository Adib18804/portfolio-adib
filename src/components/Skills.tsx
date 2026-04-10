"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { SpotlightCard } from "./ui/spotlight-card";
import { Code2, Wrench, Cpu, Shield } from "lucide-react";
import { BlockchainNodes } from "./ui/backgrounds";

export const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <section id="skills" className="py-20 bg-background relative overflow-hidden">
             {/* Cyber Grid Background */}
             <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff99_1px,transparent_1px),linear-gradient(to_bottom,#00ff99_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>
            <BlockchainNodes />

            <div className="container relative z-10 px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center mb-12 text-center">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
                            SYSTEM CAPABILITIES
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            Technical <span className="text-primary">Arsenal</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl font-mono text-sm md:text-base">
                            Deployed technologies and operational tools for secure system architecture.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Programming Languages */}
                        <SpotlightCard className="bg-card/40 border-primary/30 backdrop-blur-md" spotlightColor="rgba(0, 255, 153, 0.2)">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-none border border-primary/50 bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,255,153,0.3)]">
                                        <Code2 size={24} />
                                    </div>
                                    <CardTitle className="font-mono tracking-wider text-xl">PROG_LANG</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <motion.div 
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {portfolioData.skills.programming.map((skill: any, index) => (
                                        <motion.div key={index} variants={itemVariants}>
                                            <Badge variant="outline" className={`transition-all duration-300 cursor-crosshair rounded-none py-1.5 px-3 ${skill.color || "border-primary/30 text-primary hover:bg-primary/20 hover:border-primary"}`}>
                                                {skill.name || skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </SpotlightCard>

                        {/* Tools & Technologies */}
                        <SpotlightCard className="bg-card/40 border-secondary/30 backdrop-blur-md" spotlightColor="rgba(0, 210, 255, 0.2)">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-none border border-secondary/50 bg-secondary/10 text-secondary shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                                        <Wrench size={24} />
                                    </div>
                                    <CardTitle className="font-mono tracking-wider text-xl">TOOLS_OPS</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <motion.div 
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {portfolioData.skills.tools.map((skill: any, index) => (
                                        <motion.div key={index} variants={itemVariants}>
                                            <Badge variant="outline" className={`transition-all duration-300 cursor-crosshair rounded-none py-1.5 px-3 ${skill.color || "border-secondary/30 text-secondary hover:bg-secondary/20 hover:border-secondary"}`}>
                                                {skill.name || skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </SpotlightCard>

                        {/* Other Skills */}
                        <SpotlightCard className="bg-card/40 border-accent/30 backdrop-blur-md" spotlightColor="rgba(255, 215, 0, 0.2)">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-none border border-accent/50 bg-accent/10 text-accent shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                                        <Cpu size={24} />
                                    </div>
                                    <CardTitle className="font-mono tracking-wider text-xl">CORE_COMPETENCIES</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <motion.div 
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {portfolioData.skills.other.map((skill: any, index) => (
                                        <motion.div key={index} variants={itemVariants}>
                                            <Badge variant="outline" className={`transition-all duration-300 cursor-crosshair rounded-none py-1.5 px-3 ${skill.color || "border-accent/30 text-accent hover:bg-accent/20 hover:border-accent"}`}>
                                                {skill.name || skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </SpotlightCard>

                        {/* Penetration Testing Tools */}
                        <SpotlightCard className="bg-card/40 border-red-500/30 backdrop-blur-md" spotlightColor="rgba(239, 68, 68, 0.2)">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-3 rounded-none border border-red-500/50 bg-red-500/10 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                                        <Shield size={24} />
                                    </div>
                                    <CardTitle className="font-mono tracking-wider text-xl">PEN_TESTING</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <motion.div 
                                    className="flex flex-wrap gap-2"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {portfolioData.skills.securityTools?.map((skill: any, index) => (
                                        <motion.div key={index} variants={itemVariants}>
                                            <Badge variant="outline" className={`transition-all duration-300 cursor-crosshair rounded-none py-1.5 px-3 ${skill.color || "border-red-500/30 text-red-500 hover:bg-red-500/20 hover:border-red-500"}`}>
                                                {skill.name || skill}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </CardContent>
                        </SpotlightCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
