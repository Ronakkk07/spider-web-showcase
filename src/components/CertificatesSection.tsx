import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, BookOpen, FileText } from "lucide-react";

const certificates = [
  { title: "AWS Partner: Technical Accredited", issuer: "Amazon Web Services", date: "2025", link: "https://www.credly.com/badges/6036ade8-0a80-43d6-ade4-5924e16ba61f/public_url" },
  { title: "AWS Partner: Containers on AWS (Technical)", issuer: "Amazon Web Services", date: "2025", link: "https://drive.google.com/file/d/1fMzwhIL7eiRWcagJE-swQCuh48DdZdF1/view?usp=sharing" },
  { title: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "2024", link: "https://learn.microsoft.com/en-us/users/ronakrajput-1724/credentials/7695465692502e48?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
  { title: "AWS Partner: Cloud Economics Essentials", issuer: "Amazon Web Services", date: "2025", link: "https://www.credly.com/badges/dc54bcdf-49a4-4053-8ad1-408a3ba71c7c/public_url" },
  { title: "AWS Partner: Migrating Workloads to AWS (Technical)", issuer: "Amazon Web Services", date: "2025", link: "https://drive.google.com/file/d/10yXj9N7ekGdWA4T-yNEmN5sA4DiICggS/view?usp=sharing" },
  { title: "AWS Partner: Generative AI Essentials", issuer: "Amazon Web Services", date: "2025", link: "https://www.credly.com/badges/9eb9354d-7ca8-47c0-bf2d-ab81e728d7e2/public_url" },
  { title: "AWS Partner: IoT on AWS (Business)", issuer: "Amazon Web Services", date: "2025", link: "https://drive.google.com/file/d/1nKUM87IHgAmZte4o4Mxh2_se65fJfFVi/view?usp=sharing" },
  { title: "AWS Partner: Security Governance at Scale", issuer: "Amazon Web Services", date: "2025", link: "https://drive.google.com/file/d/1Cq5MT2x3vUZXqr2BvxYOTzRX98kVJRIq/view?usp=sharing" },
  { title: "Get Job Ready: Power BI Data Analytics 2.0", issuer: "Codebasics", date: "2024", link: "https://codebasics.io/certificate/CB-49-232002" },
  { title: "Excel: Mother of Business Intelligence", issuer: "Codebasics", date: "2024", link: "https://codebasics.io/certificate/CB-51-232002" },
];

const publication = {
  title: "Multilingual Minutes of Meeting Generator for Offline Meetings",
  venue: "ICFT 2025 — IEEE Xplore",
  doi: "10.1109/ICFT11336609",
  link: "https://ieeexplore.ieee.org/document/11336609",
  abstract:
    "AI-powered system that automatically generates structured Minutes of Meeting from offline multilingual audio (Hindi, English, Marathi, Gujarati). Integrates OpenAI Whisper for accurate speech-to-text transcription, SpeechBrain for speaker diarization, and Gemini Flash 1.5 for concise summarization. Supports customisable formatting templates and enhanced speaker recognition using trained voice samples.",
  tags: ["OpenAI Whisper", "SpeechBrain", "Gemini Flash 1.5", "Speaker Diarization", "NLP", "AI"],
};

const CertificateCard = ({ cert }: { cert: typeof certificates[0] }) => (
  <div className="min-w-[280px] md:min-w-[300px] p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all group flex-shrink-0 shadow-md">
    <div className="flex items-start justify-between mb-3">
      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Award className="w-4 h-4 text-primary" />
      </div>
      <span className="font-tech text-xs text-muted-foreground">{cert.date}</span>
    </div>
    <h4 className="font-display text-lg text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
      {cert.title}
    </h4>
    <p className="text-xs text-muted-foreground mb-4">{cert.issuer}</p>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-tech"
    >
      Verify Credential <ExternalLink size={11} />
    </a>
  </div>
);

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const duplicatedCerts = [...certificates, ...certificates];

  return (
    <section id="certificates" className="py-24 relative spider-web-bg">
      <div className="container mx-auto px-6 max-w-5xl" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Proof of Excellence</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground">CERTIFICATES & PUBLICATIONS</h2>
        </motion.div>

        {/* Certificates marquee */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display text-3xl text-foreground">Certificates</h3>
            <span className="font-tech text-xs text-muted-foreground border border-border px-3 py-1 rounded-full">
              {certificates.length} credentials
            </span>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max gap-5"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 38, ease: "linear" } }}
            >
              {duplicatedCerts.map((cert, i) => (
                <CertificateCard key={`${cert.title}-${i}`} cert={cert} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Publication — featured card */}
        <div>
          <h3 className="font-display text-3xl text-foreground mb-6">Publications</h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-card border border-border overflow-hidden shadow-lg group hover:border-primary/30 transition-all duration-300"
          >
            {/* IEEE accent header */}
            <div className="flex items-center justify-between px-6 py-3 bg-blue-500/5 border-b border-blue-500/15">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span className="font-tech text-xs text-blue-400 uppercase tracking-wider">IEEE Xplore · ICFT 2025</span>
              </div>
              <span className="px-2.5 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-tech">
                Published
              </span>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors leading-tight hover:underline underline-offset-2 inline-flex items-start gap-2"
                    >
                      {publication.title}
                      <ExternalLink size={16} className="flex-shrink-0 mt-1 text-primary/60" />
                    </a>
                    <p className="text-xs text-muted-foreground mt-1 font-tech">{publication.venue}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{publication.abstract}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md bg-blue-500/5 text-blue-400/80 border border-blue-500/15 font-tech"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/25 hover:bg-blue-500/20 transition-colors text-xs font-tech"
              >
                <ExternalLink size={12} />
                Read on IEEE Xplore
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
