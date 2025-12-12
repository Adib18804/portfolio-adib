"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { SpotlightCard } from "./ui/spotlight-card";
import { Code2, Wrench, Cpu } from "lucide-react";

export const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-muted/5">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Skills</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            A comprehensive overview of my technical expertise and tools I use.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Programming Languages */}
                        <SpotlightCard className="bg-card/50 border-primary/20" spotlightColor="rgba(255, 0, 60, 0.15)">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Code2 size={24} />
                                    </div>
                                    <CardTitle>Programming</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.skills.programming.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </SpotlightCard>

                        {/* Tools & Technologies */}
                        <SpotlightCard className="bg-card/50 border-secondary/20" spotlightColor="rgba(252, 238, 10, 0.15)">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                                        <Wrench size={24} />
                                    </div>
                                    <CardTitle>Tools</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.skills.tools.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="hover:bg-secondary/20 hover:text-secondary transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </SpotlightCard>

                        {/* Other Skills */}
                        <SpotlightCard className="bg-card/50 border-foreground/20" spotlightColor="rgba(255, 255, 255, 0.15)">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-foreground/10 text-foreground">
                                        <Cpu size={24} />
                                    </div>
                                    <CardTitle>Other</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.skills.other.map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="hover:bg-foreground/10 transition-colors cursor-default">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </SpotlightCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
