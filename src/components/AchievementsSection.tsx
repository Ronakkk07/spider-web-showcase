import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Target, Rocket, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Winner",
    description: "Won first place at XYZ Hackathon 2024 building an AI-powered solution.",
  },
  {
    icon: Target,
    title: "500+ Contributions",
    description: "Active open source contributor with 500+ contributions on GitHub.",
  },
  {
    icon: Rocket,
    title: "Launched 3 Products",
    description: "Successfully launched 3 production applications serving thousands of users.",
  },
  {
    icon: Star,
    title: "Speaker at Tech Conf",
    description: "Spoke at major tech conferences about web performance and scalability.",
  },
];

const upcoming = [
  "🎯 Preparing for AWS DevOps Professional Certification",
  "🚀 Building an AI-powered open source tool",
  "📚 Writing a technical blog series on system design",
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Milestones</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">ACHIEVEMENTS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Upcoming / What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-8 rounded-xl bg-card border border-primary/20"
        >
          <h3 className="font-display text-3xl text-foreground mb-6">What's Next</h3>
          <div className="space-y-3">
            {upcoming.map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-muted-foreground"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
