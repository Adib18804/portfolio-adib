"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-background/50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
        >
          Experience & <span className="text-primary">Education</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold text-white">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="relative pl-8 border-l-2 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <div className="mb-1 text-sm text-primary font-mono">{exp.period}</div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <div className="text-white/60 mb-2">{exp.company}</div>
                  <p className="text-white/80 leading-relaxed">{exp.details.join(" ")}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Education */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {portfolioData.education.map((edu, index) => {
                  const colors = edu.color ? edu.color.split(" ") : ["text-secondary", "border-white/10", "hover:border-secondary/50"];
                  const textColor = colors[0];
                  const borderColor = colors[1];
                  const hoverBorder = colors[2];
                  
                  return (
                    <motion.div 
                      key={index}
                      variants={item}
                      className={`bg-white/5 backdrop-blur-sm border ${borderColor} p-6 rounded-xl ${hoverBorder} transition-colors`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`text-xl font-bold ${textColor}`}>{edu.degree}</h4>
                        <span className={`text-sm ${textColor} font-mono opacity-80`}>{edu.period}</span>
                      </div>
                      <div className="text-white/60 mb-2">{edu.institution}</div>
                      <p className="text-white/80">{edu.details ? edu.details.join(" ") : ""}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold text-white">Leadership</h3>
              </div>

              <div className="space-y-6">
                {portfolioData.leadership.map((role, index) => {
                  const colors = role.color ? role.color.split(" ") : ["text-accent", "border-white/5", "hover:border-accent/30"];
                  const textColor = colors[0];
                  const borderColor = colors[1];
                  const hoverBorder = colors[2];

                  return (
                    <motion.div 
                      key={index}
                      variants={item}
                      className={`flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border ${borderColor} ${hoverBorder}`}
                    >
                      <div className={`w-2 h-2 mt-2 rounded-full shrink-0 ${textColor.replace("text-", "bg-")}`} />
                      <div>
                        <h4 className={`font-bold ${textColor}`}>{role.role}</h4>
                        <div className={`text-sm ${textColor} opacity-80 mb-1`}>{role.organization}</div>
                        <p className="text-sm text-white/70">{role.details.join(" ")}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
