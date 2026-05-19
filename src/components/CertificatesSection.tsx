import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";

const certificates = [
  { title: "AWS Partner: Technical Accredited", issuer: "Amazon Web Services Training and Certification", date: "2025", link: "https://www.credly.com/badges/6036ade8-0a80-43d6-ade4-5924e16ba61f/public_url" },
  { title: "AWS Partner: Containers on AWS (Technical)", issuer: "Amazon Web Services Training and Certification", date: "2025", link: "https://drive.google.com/file/d/1fMzwhIL7eiRWcagJE-swQCuh48DdZdF1/view?usp=sharing" },
  { title: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "2024", link: "https://learn.microsoft.com/en-us/users/ronakrajput-1724/credentials/7695465692502e48?ref=https%3A%2F%2Fwww.linkedin.com%2F" },
  { title: "AWS Partner: Cloud Economics Essentials", issuer: "Amazon Web Services Training and Certification", date: "2025", link: "https://www.credly.com/badges/dc54bcdf-49a4-4053-8ad1-408a3ba71c7c/public_url" },
  { title: "AWS Partner: Migrating Workloads to AWS (Technical)", issuer: "Amazon Web Services Training and Certification", date: "2025", link: "https://drive.google.com/file/d/10yXj9N7ekGdWA4T-yNEmN5sA4DiICggS/view?usp=sharing" },
  { title: "AWS Partner: Generative AI Essentials ", issuer: "Amazon Web Services Training and Certification", date: "2025", link: "https://www.credly.com/badges/9eb9354d-7ca8-47c0-bf2d-ab81e728d7e2/public_url" },
  { title: "AWS Partner: IoT on AWS (Business)", issuer: "Amazon Web Services Training and Certification", date: "2025", link: "https://drive.google.com/file/d/1nKUM87IHgAmZte4o4Mxh2_se65fJfFVi/view?usp=sharing" },
  { title: "AWS Partner:Security Governance at Scale", issuer: "Amazon Web Services Training and Certification", date: "2025", link: "https://drive.google.com/file/d/1Cq5MT2x3vUZXqr2BvxYOTzRX98kVJRIq/view?usp=sharing" },
  { title: "Get Job Ready: Power BI Data Analytics for All Levels 2.0", issuer: "Codebasics", date: "2024", link: "https://codebasics.io/certificate/CB-49-232002" },
  { title: "Excel: Mother of Business Intelligence", issuer: "Codebasics", date: "2024", link: "https://codebasics.io/certificate/CB-51-232002" },
];

const publications = [
  { title: "Multilingual Minutes of Meeting Generator for Offline Meetings", venue: "IEEE Xplore 2025", description: "Developed an AI-powered system that automatically generates structured Minutes of Meeting (MoM) from offline multilingual audio (Hindi, English, Marathi, Gujarati). The solution integrates OpenAI Whisper for accurate speech-to-text transcription, SpeechBrain for speaker diarization, and Gemini Flash 1.5 for concise summarization. It supports customizable formatting templates and enhanced speaker recognition using trained voice samples. The system significantly reduces manual effort while improving accuracy in documenting multilingual meetings across academic, corporate environments.", link: "https://ieeexplore.ieee.org/document/11336609" },
];

const CertificateCard = ({ cert }: { cert: typeof certificates[0] }) => (
  <div className="min-w-[280px] md:min-w-[320px] p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group flex-shrink-0">
    <div className="flex items-start justify-between mb-3">
      <Award className="w-8 h-8 text-primary" />
      <span className="font-tech text-xs text-muted-foreground">{cert.date}</span>
    </div>
    <h4 className="font-display text-xl text-foreground mb-1">{cert.title}</h4>
    <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
    >
      Verify <ExternalLink size={12} />
    </a>
  </div>
);

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Duplicate for seamless loop
  const duplicatedCerts = [...certificates, ...certificates];

  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-tech text-xs tracking-[0.3em] text-primary mb-2 uppercase">Proof of Excellence</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">CERTIFICATES & PUBLICATIONS</h2>
        </motion.div>

        {/* Certificates - infinite marquee */}
        <div className="mb-16">
          <h3 className="font-display text-3xl text-foreground mb-6">Certificates</h3>
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 36,
                  ease: "linear",
                },
              }}
            >
              {duplicatedCerts.map((cert, i) => (
                <CertificateCard key={`${cert.title}-${i}`} cert={cert} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="font-display text-3xl text-foreground mb-6">Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <motion.a
                key={pub.title}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <div>
                  <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">{pub.title}</h4>
          
                  <p className="text-sm text-muted-foreground mb-1 ">{pub.venue}</p>

                  <p className="text-sm text-muted-foreground">{pub.description}</p>
                </div>
                <ExternalLink size={60} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary"
          >
            <X size={24} />
          </button>
          <img src={selectedImage} alt="Certificate" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
