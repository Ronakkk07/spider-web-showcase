import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Luna_WebBrowser_Agent",
    description: `• Built Django-based backend services for assistant workflows (reminders, user management, 
automation) exposed via REST APIs.  
• Implemented Celery and Redis-based asynchronous processing to improve responsiveness 
and enable reliable background task execution.  
• Built modular AI pipelines (Whisper + LLMs) with structured logging across 5+ workflow 
stages to support monitoring, debugging, and workflow traceability. `,
    tech: ["DjangoRestFramework", "Celery", "Redis", "Whisper STT", "LLMs", "AWS"],
    github: "https://github.com/Ronakkk07/Luna_your_webbrowser_ai",
    live: "#",
  },
  {
    title: "SmartTrack Trip Planner",
    description: `• Built scalable RESTful backend services integrating 4+ external APIs and AWS services.    
• Implemented error handling and logging, reducing unresolved runtime errors by 40%  
• Resolved user-reported issues by analysing backend behaviour and AWS service 
integration ` ,
    tech: ["AWS Lambda", "S3", "DynamoDB","Django", "REST APIs", "Cloudwatch"],
    github: "#",
    live: "#",
  },
  {
    title: "RunFog Dublin (Fog & Distributed System) ",
    description: `• Designed a distributed fog computing simulation with sensor data ingestion, batching and 
processing across virtual fog nodes.     
• Built an event-driven data pipeline using AWS SQS, Lambda, and EventBridge for 
asynchronous telemetry processing and backend persistence.  
• Developed a Django based analytics dashboard with real time polling, detect anomalies. `,
    tech: [ "Django", "AWS SQS", "AWS Lambda", "EventBridge" ],
    github: "https://github.com/Ronakkk07/RunFog-Dublin",
    live: "#",
  },
  {
    title: "DevOps-Focused E-learning Management System",
    description: `• Developed an automated CI/CD pipelines using GitHub Actions to streamline testing, code 
quality checks, and deployement workflows.    
• Integrated pytest, Django tests, and SonarQube to detect failures early in the pipeline, 
resolving 50% vulnerability issues.   
• Debugged and resolved build, test, and deployment failures, ensuring reliable application 
releases  ` ,
    tech: [ "GitHub Actions", "CI/CD", "SonarQube", "pytest" ],
    github: "https://github.com/RonakNCI/cloudlearn",
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
                {/* <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
