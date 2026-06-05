import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Luna Web Browser Agent",
    subtitle: null as string | null,
    bullets: [
      "Built Django REST backend for assistant workflows (reminders, automation, user management) supporting 5+ workflow modules via modular API design.",
      "Improved responsiveness by reducing synchronous delays using Celery and Redis for asynchronous task execution.",
      " Designed AI pipelines integrating Whisper STT and LLMs with structured logging across multiple workflow stages for traceability.",
    ],
    tech: ["DjangoRestFramework", "Celery", "Redis", "Whisper STT", "LLMs", "AWS"],
    github: "https://github.com/Ronakkk07/Luna_your_webbrowser_ai",
  },
  {
    number: "02",
    title: "SmartTrack Trip Planner",
    subtitle: null as string | null,
    bullets: [
      "Built scalable backend services integrating 4+ external APIs using AWS Lambda, S3, SSM, and DynamoDB.",
      "Improved reliability with 40% fewer runtime errors through structured logging and error handling across backend systems.",
      "Enhanced debugging efficiency by analyzing logs and AWS service interactions for faster issue resolution.",
    ],
    tech: ["AWS Lambda", "S3", "DynamoDB", "Django", "REST APIs", "CloudWatch"],
    github: null as string | null,
  },
  {
    number: "03",
    title: "RunFog Dublin",
    subtitle: "Fog & Distributed System",
    bullets: [
      "Designed a distributed fog computing simulation handling sensor ingestion, batching, and processing across multiple virtual nodes.",
      "Built event-driven backend pipelines using AWS SQS, Lambda, and EventBridge for asynchronous telemetry processing and persistence.",
      "Developed real-time Django analytics dashboard with polling-based updates for anomaly detection and system monitoring.",
    ],
    tech: ["Django", "AWS SQS", "AWS Lambda", "EventBridge"],
    github: "https://github.com/Ronakkk07/RunFog-Dublin",
  },
  {
    number: "04",
    title: "DevOps E-learning Platform",
    subtitle: null as string | null,
    bullets: [
      "Developed automated CI/CD pipelines using GitHub Actions for testing, code quality checks, and deployment.",
      "Integrated pytest, Django tests, and SonarQube to detect failures early, resolving 50% of vulnerability issues.",
      "Debugged and resolved build, test, and deployment failures ensuring reliable application releases.",
    ],
    tech: ["GitHub Actions", "CI/CD", "SonarQube", "pytest"],
    github: "https://github.com/RonakNCI/cloudlearn",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">What I Built</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">PROJECTS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 flex flex-col"
            >
              {/* Project number watermark */}
              <span className="font-display text-6xl text-primary/8 group-hover:text-primary/15 transition-colors absolute top-3 right-5 select-none leading-none">
                {project.number}
              </span>

              {/* Title */}
              <div className="mb-4 pr-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-tech text-muted-foreground mt-0.5 tracking-wider uppercase">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-5 flex-1">
                {project.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-[7px] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-tech rounded-md bg-primary/5 text-primary/80 border border-primary/15 hover:border-primary/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer link */}
              <div className="pt-3 border-t border-border">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-tech"
                  >
                    <Github size={13} />
                    View on GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/35 font-tech">
                    <Github size={13} />
                    Private Repository
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
