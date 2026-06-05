import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Cloud, Database, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Software Development",
    icon: Code2,
    skills: [
      "Python",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "REST APIs",
      "DjangoRestFramework",
      "React",
      "pytest",
    ],
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    skills: [
      "Linux Systems",
      "Operating Systems",
      "Networking (TCP/IP, DNS)",
      "OSI Model",
      "CIDR Notation",
      "Distributed Systems",
      "Microservices",
    ],
  },
  {
    title: "Cloud Platforms & DevOps",
    icon: Cloud,
    skills: [
      "Docker",
      "GitHub",
      "CI/CD",
      "Kubernetes",
      "Monitoring & Logging",
      "AWS (Lambda, SQS, S3, DynamoDB, CloudWatch)",
      "Azure",
      "Terraform",
      "System Reliability",
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MySQL",
      "DynamoDB",
      "Relational Database Design",
      "Redis",
      "Celery",
    ],
  },
  {
    title: "Development Practices",
    icon: Lightbulb,
    skills: [
      "Agile Development",
      "Debugging",
      "Cross-functional Collaboration",
      "Problem Solving",
      "Software Design Principles",
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative spider-web-bg">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">What I Know</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">SKILLS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group shadow-lg ${
                i === skillCategories.length - 1 && skillCategories.length % 2 !== 0
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-tech rounded-lg bg-primary/5 text-primary/80 border border-primary/15 hover:bg-primary/15 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
