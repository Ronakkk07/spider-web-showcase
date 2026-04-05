import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "Express", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD", "Linux", "Kubernetes"],
  },
  {
    title: "Other",
    skills: ["Machine Learning", "REST APIs", "GraphQL", "Agile", "Testing", "System Design"],
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
