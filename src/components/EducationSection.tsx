import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Cloud Computing",
    school: "National College of Ireland",
    location: "Dublin, Ireland",
    period: "2025 - 2026",
    description: "Focused on AWS Cloud Services, DevOps principles, Distributed Systems, and Software Engineering principles. GPA: 2:1 (Expected)",
    highlights: ["Research Project: Intelligent Multi-Cloud LLM Serving: A Cost aware Kubernetes Framework (Ongoing)"],
  },
  {
    degree: "B.Tech in Information Technology and Minors in Data Science",
    school: "Dwarkadas Jivanlal Sanghvi College of Engineering",
    location: "Mumbai, India",
    period: "2021 - 2025",
    description: "Strong foundation in Data Structures, Algorithms, Operating Systems, Databases, and Computer Networks. GPA: 7.9/10 (First Class Honors)",
    highlights: ["Research Project: Multilingual Minutes of Meeting Generator for Offline Meetings (Published)" ],
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative spider-web-bg">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Academic Background</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">EDUCATION</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span className="font-tech">{edu.period}</span>
                </div>
              </div>

              <h3 className="font-display text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <p className="text-sm text-primary/80 mb-1">{edu.school}</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                <MapPin size={12} /> {edu.location}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{edu.description}</p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {h}
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

export default EducationSection;
