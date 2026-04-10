 "use client";
 
 import { motion } from "framer-motion";
 import Link from "next/link";
 import { portfolioData } from "@/data/portfolio";
 import { CyberButton } from "@/components/ui/cyber-button";
 
 export default function ResumePage() {
   const container = {
     hidden: { opacity: 0 },
     show: {
       opacity: 1,
       transition: { staggerChildren: 0.08 }
     }
   };
   const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };
 
   const handleDownload = () => {
     if (typeof window !== "undefined") {
       window.print();
     }
   };
 
   return (
     <main className="min-h-screen bg-background text-foreground">
       <section className="py-16">
         <div className="container mx-auto px-4 max-w-4xl">
           <div className="flex justify-between items-center mb-8 print:hidden">
             <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
               {portfolioData.personalInfo.name}
             </h1>
             <div className="flex gap-3">
               <CyberButton size="sm" onClick={handleDownload} className="rounded-none">
                 Download PDF
               </CyberButton>
               <CyberButton size="sm" variant="outline" asChild className="rounded-none">
                 <Link href={portfolioData.personalInfo.linkedinUrl}>LinkedIn</Link>
               </CyberButton>
             </div>
           </div>
 
           <motion.div variants={container} initial="hidden" animate="show" className="bg-card/40 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-none">
             <motion.div variants={item} className="grid md:grid-cols-[1fr_auto] gap-4 md:gap-6 mb-6">
               <div>
                 <div className="text-xl font-semibold">{portfolioData.personalInfo.title}</div>
                 <div className="text-sm text-muted-foreground mt-1">
                   {portfolioData.personalInfo.location} • {portfolioData.personalInfo.email} • {portfolioData.personalInfo.phone}
                 </div>
               </div>
               <div className="flex flex-wrap gap-3 text-sm justify-start md:justify-end">
                 <Link href={portfolioData.personalInfo.portfolioUrl} className="text-primary">Portfolio</Link>
                 <Link href={portfolioData.personalInfo.githubUrl} className="text-primary">GitHub</Link>
                 <Link href={portfolioData.personalInfo.linkedinUrl} className="text-primary">LinkedIn</Link>
               </div>
             </motion.div>
 
             <motion.div variants={item} className="mb-6">
               <h2 className="text-lg font-bold tracking-tight">Summary</h2>
               <p className="text-sm text-muted-foreground mt-2">{portfolioData.personalInfo.summary}</p>
             </motion.div>
 
             <motion.div variants={item} className="mb-6">
               <h2 className="text-lg font-bold tracking-tight">Skills</h2>
               <div className="grid md:grid-cols-3 gap-4 mt-3">
                 <div>
                   <div className="text-sm font-semibold mb-2">Programming</div>
                   <div className="flex flex-wrap gap-2">
                     {portfolioData.skills.programming.map((s, i) => (
                       <span key={i} className={`text-xs px-2 py-1 border ${s.color.split(" ")[1]} ${s.color.split(" ")[2]} rounded-none`}>
                         {s.name}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <div className="text-sm font-semibold mb-2">Tools</div>
                   <div className="flex flex-wrap gap-2">
                     {portfolioData.skills.tools.map((s, i) => (
                       <span key={i} className={`text-xs px-2 py-1 border ${s.color.split(" ")[1]} ${s.color.split(" ")[2]} rounded-none`}>
                         {s.name}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <div className="text-sm font-semibold mb-2">Core Competencies</div>
                   <div className="flex flex-wrap gap-2">
                     {portfolioData.skills.other.map((s, i) => (
                       <span key={i} className={`text-xs px-2 py-1 border ${s.color.split(" ")[1]} ${s.color.split(" ")[2]} rounded-none`}>
                         {s.name}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </motion.div>
 
             <motion.div variants={item} className="mb-6">
               <h2 className="text-lg font-bold tracking-tight">Experience</h2>
               <div className="mt-3 space-y-4">
                 {portfolioData.experience.map((exp, i) => (
                   <div key={i} className="border border-white/10 p-4 rounded-none">
                     <div className="flex justify-between items-start">
                       <div className="font-semibold">{exp.role}</div>
                       <div className="text-xs text-muted-foreground">{exp.period}</div>
                     </div>
                     <div className="text-sm text-primary mt-1">{exp.company}</div>
                     <ul className="mt-2 space-y-1">
                       {exp.details.map((d: string, j: number) => (
                         <li key={j} className="text-sm text-muted-foreground">• {d}</li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             </motion.div>
 
             <motion.div variants={item} className="mb-6">
               <h2 className="text-lg font-bold tracking-tight">Projects</h2>
               <div className="mt-3 grid md:grid-cols-2 gap-4">
                 {portfolioData.projects.map((p, i) => (
                   <div key={i} className="border border-white/10 p-4 rounded-none">
                     <div className="font-semibold">{p.title}</div>
                     <div className="text-xs text-muted-foreground mt-1">{p.tech}</div>
                     <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
                   </div>
                 ))}
               </div>
             </motion.div>
 
             <motion.div variants={item} className="mb-6">
               <h2 className="text-lg font-bold tracking-tight">Education</h2>
               <div className="mt-3 space-y-4">
                 {portfolioData.education.map((edu, i) => (
                   <div key={i} className={`border ${edu.color ? edu.color.split(" ")[1] : "border-white/10"} p-4 rounded-none`}>
                     <div className="flex justify-between items-start">
                       <div className="font-semibold">{edu.degree}</div>
                       <div className="text-xs text-muted-foreground">{edu.period}</div>
                     </div>
                     <div className="text-sm text-primary mt-1">{edu.institution}</div>
                     {edu.details && (
                       <ul className="mt-2 space-y-1">
                         {edu.details.map((d: string, j: number) => (
                           <li key={j} className="text-sm text-muted-foreground">• {d}</li>
                         ))}
                       </ul>
                     )}
                   </div>
                 ))}
               </div>
             </motion.div>
 
             <motion.div variants={item} className="mb-6">
               <h2 className="text-lg font-bold tracking-tight">Leadership</h2>
               <div className="mt-3 space-y-4">
                 {portfolioData.leadership.map((lead, i) => (
                   <div key={i} className={`border ${lead.color ? lead.color.split(" ")[1] : "border-white/10"} p-4 rounded-none`}>
                     <div className="flex justify-between items-start">
                       <div className="font-semibold">{lead.role}</div>
                       <div className="text-xs text-muted-foreground">{lead.period}</div>
                     </div>
                     <div className="text-sm text-primary mt-1">{lead.organization}</div>
                     <ul className="mt-2 space-y-1">
                       {lead.details.map((d: string, j: number) => (
                         <li key={j} className="text-sm text-muted-foreground">• {d}</li>
                       ))}
                     </ul>
                   </div>
                 ))}
               </div>
             </motion.div>
 
             <motion.div variants={item}>
               <h2 className="text-lg font-bold tracking-tight">Certifications</h2>
               <div className="mt-3 flex flex-wrap gap-2">
                 {portfolioData.certifications.map((c, i) => (
                   <span key={i} className="text-xs px-2 py-1 border border-white/10 rounded-none">{c}</span>
                 ))}
               </div>
             </motion.div>
           </motion.div>
         </div>
       </section>
     </main>
   );
 }
