import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, FlaskConical, CheckCircle, Clock, ExternalLink } from "lucide-react";

const education = [
  {
    degree: "Master of Science",
    field: "Cloud Computing",
    subtitle: null as string | null,
    school: "National College of Ireland",
    location: "Dublin, Ireland",
    period: "2025 - 2026",
    status: "In Progress" as "In Progress" | "Completed",
    gpa: "2:1",
    gpaNote: "Expected Grade",
    courses: [
      "AWS Cloud Services",
      "DevOps",
      "Distributed Systems",
      "Kubernetes",
      "Cloud Architecture",
      "Software Engineering",
    ],
    research: {
      title: "Intelligent Multi-Cloud LLM Serving: A Cost-aware Kubernetes Framework",
      status: "Ongoing" as "Ongoing" | "Published",
      link: null as string | null,
    },
  },
  {
    degree: "B.Tech — Information Technology",
    field: null as string | null,
    subtitle: "Minor in Data Science",
    school: "Dwarkadas Jivanlal Sanghvi College of Engineering",
    location: "Mumbai, India",
    period: "2021 - 2025",
    status: "Completed" as "In Progress" | "Completed",
    gpa: "1:1",
    gpaNote: "First Class Honours",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Systems",
      "Computer Networks",
      "Machine Learning",
    ],
    research: {
      title: "Multilingual Minutes of Meeting Generator for Offline Meetings",
      status: "Published" as "Ongoing" | "Published",
      link: "https://ieeexplore.ieee.org/document/11336609",
    },
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative spider-web-bg">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Academic Background</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">EDUCATION</h2>
        </motion.div>

        <div className="relative">
          {/* Animated vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
            className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent origin-top hidden sm:block"
          />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.25, ease: "easeOut" }}
              className="relative flex items-start mb-10 last:mb-0 sm:pl-16"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.25, type: "spring", stiffness: 300 }}
                className="absolute left-5 hidden sm:block w-4 h-4 rounded-full bg-primary border-2 border-background -translate-x-2 mt-8 z-10 animate-pulse-glow"
              />

              {/* Card */}
              <div className="w-full p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group shadow-lg hover:shadow-primary/5">

                {/* Institution row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-tech text-sm text-primary leading-tight">{edu.school}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {edu.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status pill */}
                  <span
                    className={`self-start flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full border font-tech whitespace-nowrap ${
                      edu.status === "In Progress"
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/25"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                    }`}
                  >
                    {edu.status === "In Progress" ? <Clock size={10} /> : <CheckCircle size={10} />}
                    {edu.status}
                  </span>
                </div>

                {/* Degree title */}
                <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors leading-tight">
                  {edu.degree}
                </h3>
                {edu.field && (
                  <p className="font-display text-xl text-primary/60 mt-0.5">{edu.field}</p>
                )}
                {edu.subtitle && (
                  <p className="text-xs font-tech text-muted-foreground mt-1 tracking-widest uppercase">
                    {edu.subtitle}
                  </p>
                )}

                {/* GPA + Focus areas */}
                <div className="flex flex-col md:flex-row gap-5 mt-6">
                  <div className="flex-shrink-0 px-5 py-4 rounded-xl bg-primary/5 border border-primary/15 text-center min-w-[130px]">
                    <p className="font-display text-2xl text-primary">{edu.gpa}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-tech tracking-wider">{edu.gpaNote}</p>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-tech text-muted-foreground tracking-[0.2em] uppercase mb-2">
                      Key Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-xs rounded-md bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors font-tech"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Research callout */}
                <div className="mt-5 p-4 rounded-xl bg-blue-500/5 border border-blue-500/15 flex items-start gap-3">
                  <FlaskConical className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <p className="text-xs font-tech text-blue-400 uppercase tracking-wider">Research Project</p>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full font-tech border ${
                          edu.research.status === "Published"
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                            : "bg-amber-500/10 text-amber-400 border-amber-500/25"
                        }`}
                      >
                        {edu.research.status}
                      </span>
                    </div>

                    {edu.research.link ? (
                      <a
                        href={edu.research.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group/link"
                      >
                        <span className="leading-relaxed group-hover/link:underline underline-offset-2">
                          {edu.research.title}
                        </span>
                        <ExternalLink size={12} className="flex-shrink-0 mt-0.5 text-blue-400" />
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground leading-relaxed">{edu.research.title}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
