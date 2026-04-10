"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CyberGrid = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            {/* Moving Scanlines */}
            <motion.div 
                className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,255,153,0.1)_50%,transparent_100%)] h-[200%]"
                animate={{ y: ["-50%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export const BlockchainNodes = () => {
    const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);

    useEffect(() => {
        setNodes([...Array(15)].map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100
        })));
    }, []);

    return (
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
            <svg className="w-full h-full">
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="2"
                        className="fill-accent"
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
                    />
                ))}
                {nodes.map((node, i) => (
                    nodes.slice(i + 1, i + 3).map((target, j) => (
                        <motion.line
                            key={`${i}-${j}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${target.x}%`}
                            y2={`${target.y}%`}
                            className="stroke-accent/30"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
                        />
                    ))
                ))}
            </svg>
        </div>
    );
};

export const BinaryRain = () => {
    const [streams, setStreams] = useState<number[]>([]);

    useEffect(() => {
        setStreams([...Array(20)].map((_, i) => i));
    }, []);

    return (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden font-mono text-xs text-primary leading-none">
            <div className="flex justify-between px-4">
                {streams.map((i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: "100vh", opacity: [0, 1, 0] }}
                        transition={{ 
                            duration: Math.random() * 5 + 5, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: Math.random() * 5 
                        }}
                    >
                        {Array.from({ length: 10 }).map((_, j) => (
                            <div key={j} className="my-1">{Math.random() > 0.5 ? "1" : "0"}</div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
