import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InteractiveCursor } from "@/components/effects/InteractiveCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adib Abtahi | CyberSecurity, AI & Blockchain Portfolio",
  description: "Portfolio of Adib Abtahi, a Computer Science Undergraduate specializing in Cybersecurity, Artificial Intelligence, and Blockchain Technology.",
  keywords: ["Cybersecurity", "AI", "Blockchain", "Ethical Hacking", "Web Development", "Portfolio"],
  authors: [{ name: "Mohammad Adib Abtahi" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0a0a0a",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <InteractiveCursor />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-background to-background pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
