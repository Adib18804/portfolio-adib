"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
    const [glitchText, setGlitchText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    useEffect(() => {
        const interval = setInterval(() => {
            const glitchChance = Math.random();
            if (glitchChance > 0.9) {
                const randomChar = chars[Math.floor(Math.random() * chars.length)];
                const randomPos = Math.floor(Math.random() * text.length);
                const newText = text.split("");
                newText[randomPos] = randomChar;
                setGlitchText(newText.join(""));

                // Reset quickly
                setTimeout(() => {
                    setGlitchText(text);
                }, 50);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span
                className="relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {glitchText}
            </motion.span>
            <span className="absolute top-0 left-0 -z-10 text-primary opacity-70 animate-pulse translate-x-[2px]">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 text-secondary opacity-70 animate-pulse -translate-x-[2px]">
                {text}
            </span>
        </div>
    );
};
