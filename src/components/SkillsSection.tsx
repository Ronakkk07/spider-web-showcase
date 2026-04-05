import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Software Development",
    skills: [ "Python", "Object-Oriented Programming (OOPS)", "Data Structures and Algorithms", "RESTful APIs", "DjangoRestFramework", "React", "pytest" ],
  },
  {
    title: "Core Concepts",
    skills: ["Linux Systems", "Operating Systems", "Networking (TCP/IP, DNS, Subnets)", "OSI Model", "CIDR Notation", "HTTP", "HTTPS"],
  },
  {
    title: "Cloud Platforms/DevOps",
    skills: ["Docker", "AWS", "Github", "CI/CD", "Azure", "Kubernetes", "Infrastructure as a Code", "automated testing", "unit testing"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "DynamoDB", "Relational Database Design", "Redis", "Celery"],
  },
  {
    title: "Other",
    skills: ["Quick Learner", "Troubleshooting", "Agile", "Testing", "System Design"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative spider-web-bg">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">What I Know</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">SKILLS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all"
            >
              <h3 className="font-display text-2xl text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
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
