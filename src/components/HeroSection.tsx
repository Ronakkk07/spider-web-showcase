import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import heroImage from "@/assets/hero-spider.jpg";
import LeetCodeIcon from "@/components/LeetCodeIcon";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Spider-Man themed hero" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Web lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute web-line animate-web-shoot"
            style={{
              top: `${15 + i * 15}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-tech text-xs md:text-sm tracking-[0.3em] text-primary mb-4 uppercase">
            Welcome to my universe
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4">
            Ronak <span className="text-gradient-spider">Rajput</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Software Engineer · Cloud Engineer · Problem Solver
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://www.linkedin.com/in/ronak-rajput-a748681b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Ronakkk07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://leetcode.com/u/ronakrajput1106/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-red"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/40 text-foreground font-semibold hover:bg-primary/10 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-muted-foreground font-semibold hover:text-foreground hover:border-primary/30 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
