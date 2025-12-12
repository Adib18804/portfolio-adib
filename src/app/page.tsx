import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border bg-background">
        <p>© {new Date().getFullYear()} Mohammad Adib Abtahi. All rights reserved.</p>
        <p className="text-xs mt-1">Built with Next.js, Tailwind CSS & Shadcn UI</p>
      </footer>
    </main>
  );
}
