"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { User } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                            <User size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl text-primary font-mono">&gt; whoami</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>{portfolioData.personalInfo.summary}</p>
                                <p>
                                    I am currently pursuing my B.Sc. in Computer Science & Engineering at Daffodil International University.
                                    My journey involves deep diving into algorithms, web development, and AI research.
                                </p>
                            </CardContent>
                        </Card>

                        <div className="space-y-6">
                            <Card className="bg-card/50 border-secondary/20 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-xl text-secondary font-mono">&gt; research_interests</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        {portfolioData.research.map((item, index) => (
                                            <li key={index} className="flex flex-col gap-1">
                                                <span className="font-semibold text-foreground">{item.title}</span>
                                                <span className="text-sm text-muted-foreground">{item.description}</span>
                                                <span className="text-xs text-secondary/70 font-mono">[{item.status}]</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
