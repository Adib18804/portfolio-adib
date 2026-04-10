"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { CyberGrid } from "./ui/backgrounds";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        // Simulate sending
        setTimeout(() => {
             setStatus("success");
             setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
             {/* Cyber Grid Background */}
             <CyberGrid />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col items-center mb-12 text-center">
                         <div className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest text-primary border border-primary/30 rounded-full bg-primary/5">
                            SECURE_CHANNEL
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                            Initiate <span className="text-primary">Communication</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl font-mono text-sm">
                            Establish an encrypted connection for project inquiries or collaboration.
                        </p>
                    </div>

                    <motion.div 
                        className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <Card className="bg-card/40 border border-primary/20 backdrop-blur-md h-full rounded-none relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Mail size={100} />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold text-primary font-mono tracking-tight">Transmission Data</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-8 relative z-10">
                                    <motion.div 
                                        className="flex items-center gap-4 group/item"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="p-3 bg-primary/10 text-primary border border-primary/20 group-hover/item:border-primary/50 transition-colors">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-secondary font-mono mb-1">EMAIL_PROTOCOL</p>
                                            <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-foreground hover:text-primary transition-colors font-mono text-sm md:text-base">
                                                {portfolioData.personalInfo.email}
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="flex items-center gap-4 group/item"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="p-3 bg-secondary/10 text-secondary border border-secondary/20 group-hover/item:border-secondary/50 transition-colors">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-secondary font-mono mb-1">VOICE_UPLINK</p>
                                            <a href={`tel:${portfolioData.personalInfo.phone}`} className="text-foreground hover:text-secondary transition-colors font-mono text-sm md:text-base">
                                                {portfolioData.personalInfo.phone}
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="flex items-center gap-4 group/item"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="p-3 bg-muted/10 text-muted-foreground border border-muted/20 group-hover/item:border-muted/50 transition-colors">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-secondary font-mono mb-1">PHYSICAL_COORDS</p>
                                            <p className="text-foreground font-mono text-sm md:text-base">{portfolioData.personalInfo.location}</p>
                                        </div>
                                    </motion.div>

                                    <motion.div 
                                        className="flex items-center gap-4 group/item"
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <div className="p-3 bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 group-hover/item:border-indigo-500/50 transition-colors">
                                            <Linkedin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-secondary font-mono mb-1">SOCIAL_UPLINKS</p>
                                            <div className="flex gap-4 mt-1">
                                                 <a href={portfolioData.personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                                                    <Linkedin size={20} />
                                                </a>
                                                {(portfolioData.personalInfo as any).facebookUrl && (
                                                    <a href={(portfolioData.personalInfo as any).facebookUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#1877F2] transition-colors">
                                                        <Facebook size={20} />
                                                    </a>
                                                )}
                                                {(portfolioData.personalInfo as any).instagramUrl && (
                                                    <a href={(portfolioData.personalInfo as any).instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#E4405F] transition-colors">
                                                        <Instagram size={20} />
                                                    </a>
                                                )}
                                                 {(portfolioData.personalInfo as any).githubUrl && (
                                                    <a href={(portfolioData.personalInfo as any).githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                                        <Github size={20} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                         <Card className="bg-card/40 border border-primary/20 backdrop-blur-md rounded-none relative">
                             <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold text-foreground font-mono">Send_Message()</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-mono text-secondary ml-1">USER_ID</label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your identifier"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="bg-background/50 border-primary/20 focus:border-primary/50 font-mono rounded-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,153,0.1)]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-mono text-secondary ml-1">RETURN_ADDRESS</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="user@domain.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                             className="bg-background/50 border-primary/20 focus:border-primary/50 font-mono rounded-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,153,0.1)]"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-mono text-secondary ml-1">PAYLOAD</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Enter transmission content..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            required
                                            className="min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/50 font-mono rounded-none transition-all duration-300 focus:shadow-[0_0_10px_rgba(0,255,153,0.1)]"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 rounded-none font-mono tracking-widest relative overflow-hidden group"
                                        disabled={status === "loading"}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {status === "loading" ? "TRANSMITTING..." : (
                                                <>
                                                    INITIATE_SEND <Send size={16} />
                                                </>
                                            )}
                                        </span>
                                        <div className="absolute inset-0 bg-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                                    </Button>
                                    {status === "success" && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="p-3 border border-primary/50 bg-primary/10 text-primary text-sm font-mono text-center"
                                        >
                                            Transmission Successful. Awaiting Response...
                                        </motion.div>
                                    )}
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
