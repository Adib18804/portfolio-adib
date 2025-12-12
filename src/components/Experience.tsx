"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { SpotlightCard } from "./ui/spotlight-card";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-background relative">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Experience */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Briefcase size={32} />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
                            </div>

                            <div className="space-y-6">
                                {portfolioData.experience.map((exp, index) => (
                                    <SpotlightCard key={index} className="bg-card/50 border-l-4 border-l-primary border-y-0 border-r-0 rounded-r-xl shadow-none" spotlightColor="rgba(255, 0, 60, 0.1)">
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{exp.role}</CardTitle>
                                                    <p className="text-primary font-medium">{exp.company}</p>
                                                </div>
                                                <span className="text-xs md:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded border border-border/50">{exp.period}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                                {exp.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </SpotlightCard>
                                ))}

                                {/* Leadership */}
                                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                    Leadership & Volunteering
                                </h3>
                                {portfolioData.leadership.map((role, index) => (
                                    <SpotlightCard key={index} className="bg-card/50 border-l-4 border-l-secondary border-y-0 border-r-0 rounded-r-xl shadow-none" spotlightColor="rgba(252, 238, 10, 0.1)">
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg font-bold group-hover:text-secondary transition-colors">{role.role}</CardTitle>
                                                    <p className="text-secondary font-medium">{role.organization}</p>
                                                </div>
                                                <span className="text-xs md:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded border border-border/50">{role.period}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                                {role.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                                    <GraduationCap size={32} />
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                            </div>

                            <div className="space-y-6">
                                {portfolioData.education.map((edu, index) => (
                                    <SpotlightCard key={index} className="bg-card/50 border-l-4 border-l-foreground border-y-0 border-r-0 rounded-r-xl shadow-none" spotlightColor="rgba(255, 255, 255, 0.1)">
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg font-bold">{edu.institution}</CardTitle>
                                                    <p className="text-foreground/80 font-medium">{edu.degree}</p>
                                                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                                                </div>
                                                <span className="text-xs md:text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded border border-border/50">{edu.period}</span>
                                            </div>
                                        </CardHeader>
                                        {edu.details && (
                                            <CardContent>
                                                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                                    {edu.details.map((detail, i) => (
                                                        <li key={i}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        )}
                                    </SpotlightCard>
                                ))}

                                {/* Certifications */}
                                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                                    Certifications
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.certifications.map((cert, index) => (
                                        <span key={index} className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-sm border border-border/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
