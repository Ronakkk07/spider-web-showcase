import { motion } from "framer-motion";
import { Download, Github, Linkedin, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-spider.jpg";

const stats = [
  { number: "3",    label: "Internships" },
  { number: "2",    label: "Research Papers" },
  { number: "6+",  label: "Certifications" },
  { number: "180+", label: "LeetCode Solved" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Spider-Man themed hero" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Web lines */}
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

        {/* Name + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-tech text-xs md:text-sm tracking-[0.3em] text-primary mb-4 uppercase">
            Welcome to my Multiverse
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4">
            Ronak <span className="text-gradient-spider">Rajput</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Software Engineer · Cloud Engineer · Problem Solver
          </p>

          {/* Location + availability — inline, lightweight */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground/60">
              <MapPin size={13} className="text-primary" />
              Ireland
            </span>
            <span className="w-px h-3.5 bg-border self-center" />
            <span className="flex items-center gap-1.5 text-xs font-tech text-emerald-400">
              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Open to Work · 2026 Graduate
            </span>
          </div>
        </motion.div>

        {/* Quick Stats — horizontal strip, no cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center divide-x divide-border/60 mb-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 + i * 0.07 }}
              className="px-4 md:px-7 text-center"
            >
              <p className="font-display text-2xl md:text-3xl text-primary leading-none">{stat.number}</p>
              <p className="text-[10px] text-muted-foreground font-tech mt-1 leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <a
            href="https://www.linkedin.com/in/ronak-rajput-a748681b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Ronakkk07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://leetcode.com/u/ronakrajput1106/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-4 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all text-sm font-tech"
          >
            LeetCode
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-red"
          >
            View My Work
          </a>
          <a
            href="/Ronak_Rajput_CV.pdf"
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
      </div>
    </section>
  );
};

export default HeroSection;
