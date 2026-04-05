import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SmartTrack Trip Planner",
    description: `• Built RESTful backend services in Django integrating 4+ external APIs and AWS services 
(Lambda, S3, DynamoDB)  
• Implemented structured error handling and logging, reducing unresolved runtime errors by 
40% 
• Resolved user-reported issues by analysing backend behaviour and AWS service 
integration` ,
    tech: ["AWS Lambda", "S3", "DynamoDB","Django", "REST APIs", "Cloudwatch"],
    github: "#",
    live: "#",
  },
  {
    title: "Luna_WebBrowser_Agent",
    description: `• Engineered scalable backend services in Python (Django) for assistant, reminders, shopping, 
and user management, exposing clean REST APIs for client consumption. 
• Optimized backend reliability by experimenting with Celery/Redis for reminder scheduling and 
delivering a simplified, robust polling-based notification pipeline. 
• Implemented audio processing and LLM workflows (Whisper/Gemini) as modular services, 
logging pipeline events and failures to support monitoring and debugging. `,
    tech: ["DjangoRestFramework", "Celery", "Redis", "Whisper STT", "LLMs", "AWS"],
    github: "https://github.com/Ronakkk07/Luna_your_webbrowser_ai",
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
