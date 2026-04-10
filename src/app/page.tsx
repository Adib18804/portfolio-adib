import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-primary/20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl pointer-events-none" />
        <p className="relative z-10 font-mono">© {new Date().getFullYear()} <span className="text-primary">Adib Abtahi</span>. All systems operational.</p>
        <p className="text-xs mt-2 relative z-10 opacity-70">Secured with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}
