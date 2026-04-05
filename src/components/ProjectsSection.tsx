import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application with real-time features, authentication, and cloud deployment.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Beta",
    description: "Machine learning powered analytics dashboard with interactive visualizations.",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Gamma",
    description: "Mobile-first e-commerce platform with payment integration and inventory management.",
    tech: ["Next.js", "Stripe", "MongoDB", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Delta",
    description: "Open source CLI tool for automating development workflows and code generation.",
    tech: ["TypeScript", "Node.js", "CLI", "NPM"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">What I Built</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">PROJECTS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:glow-red"
            >
              <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-secondary/20 text-secondary-foreground/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
                <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
