import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Your University Name",
    location: "City, Country",
    period: "2022 - 2024",
    description: "Focused on Machine Learning, Distributed Systems, and Software Engineering. GPA: 3.9/4.0",
    highlights: ["Research Assistant", "Dean's List", "Published 2 papers"],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Your College Name",
    location: "City, Country",
    period: "2018 - 2022",
    description: "Strong foundation in Data Structures, Algorithms, and Full-Stack Development. GPA: 8.5/10",
    highlights: ["Class Topper", "Hackathon Winner", "Technical Club Lead"],
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
