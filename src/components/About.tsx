"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BinaryRain, CyberGrid } from "./ui/backgrounds";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
             {/* Background Elements */}
             <CyberGrid />
             <BinaryRain />
             <div className="absolute -left-20 top-40 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
             <div className="absolute -right-20 bottom-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center mb-12 text-center">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
                            IDENTITY_VERIFICATION
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            About <span className="text-primary">Me</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="bg-card/40 border border-primary/20 backdrop-blur-md rounded-none relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:h-full transition-all duration-500 ease-in-out" />
                            <CardHeader className="pb-2 border-b border-primary/10">
                                <CardTitle className="text-xl text-primary font-mono flex items-center gap-2">
                                    <span className="animate-pulse">_</span>
                                    root@4d1b:~/bio
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 text-muted-foreground leading-relaxed pt-6 font-mono text-sm md:text-base">
                                <p>
                                    <span className="text-secondary">&gt;</span> {portfolioData.personalInfo.summary}
                                </p>
                                <p>
                                    <span className="text-secondary">&gt;</span> I am currently pursuing my B.Sc. in Computer Science & Engineering at Daffodil International University.
                                    My journey involves deep diving into network security, ethical hacking, and AI-driven defense mechanisms.
                                </p>
                                
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-primary/10">
                                    <div className="text-center p-3 border border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
                                        <div className="text-2xl font-bold text-foreground">1+</div>
                                        <div className="text-xs text-muted-foreground mt-1">ACADEMIC CODING EXPERIENCE</div>
                                    </div>
                                    <div className="text-center p-3 border border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
                                        <div className="text-2xl font-bold text-foreground">10+</div>
                                        <div className="text-xs text-muted-foreground mt-1">PROJECTS</div>
                                    </div>
                                    <div className="text-center p-3 border border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
                                        <div className="text-2xl font-bold text-foreground">5+</div>
                                        <div className="text-xs text-muted-foreground mt-1">CTF EVENTS</div>
                                    </div>
                                    <div className="text-center p-3 border border-primary/10 bg-primary/5 hover:border-primary/30 transition-colors">
                                        <div className="text-2xl font-bold text-foreground">24/7</div>
                                        <div className="text-xs text-muted-foreground mt-1">LEARNING</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
