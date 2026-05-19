import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mic, MicOff, Radio, Sparkles, X } from "lucide-react";

type SpeechRecognitionAlternative = {
  transcript: string;
};

type SpeechRecognitionResultLike = {
  isFinal: boolean;
  0: SpeechRecognitionAlternative;
};

type SpeechRecognitionEventLike = Event & {
  resultIndex: number;
  results: ArrayLike<SpeechRecognitionResultLike>;
};

type SpeechRecognitionLike = EventTarget & {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onend: (() => void) | null;
  onerror: ((event: Event) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  }
}

const sections = [
  {
    id: "home",
    label: "Hero",
    script:
      "This is Ronak Rajput's portfolio. The headline is simple: software engineer, cloud engineer, and problem solver. Ronak is positioning himself for graduate software engineering and cloud support associate roles, with a profile built around practical backend work, cloud services, and clear troubleshooting ability.",
  },
  {
    id: "about",
    label: "About",
    script:
      "The about section adds the human side through Ronak's introduction video. It gives recruiters a quick sense of communication, motivation, and how he explains his journey beyond a list of technologies.",
  },
  {
    id: "experience",
    label: "Experience",
    script:
      "Experience is one of the strongest parts of the page. Ronak has worked as an AWS Cloud Intern at F13 Technologies, building Python and Lambda based serverless backend services and improving observability with CloudWatch. Before that, he supported cloud and VDI migration work at Anunta, troubleshooting networking, DNS, TCP/IP, operating system issues, and client requirements. He also has software developer internship experience debugging across frontend and backend layers in Agile teams.",
  },
  {
    id: "skills",
    label: "Skills",
    script:
      "The skills section is aimed directly at graduate software and cloud support roles. Ronak brings Python, data structures, REST APIs, Django REST Framework, React, Linux, networking, distributed systems, AWS services, Azure, Docker, CI/CD, Terraform fundamentals, monitoring, logging, databases, Redis, Celery, debugging, and cross functional collaboration.",
  },
  {
    id: "projects",
    label: "Projects",
    script:
      "Projects show how Ronak turns skills into working systems. Luna WebBrowser Agent includes Django backend services, Celery, Redis, Whisper, LLM pipelines, and structured logging. SmartTrack Trip Planner uses REST APIs, AWS services, logging, and error handling. RunFog Dublin demonstrates distributed fog computing with SQS, Lambda, EventBridge, and a Django dashboard. The e-learning management project shows DevOps practice with GitHub Actions, testing, and SonarQube.",
  },
  {
    id: "education",
    label: "Education",
    script:
      "Education gives the technical foundation behind the work. Ronak is pursuing an MSc in Cloud Computing at National College of Ireland, focused on AWS, DevOps, distributed systems, and software engineering. His BTech in Information Technology with a Data Science minor built the core base in data structures, algorithms, operating systems, databases, and computer networks.",
  },
  {
    id: "certificates",
    label: "Certificates",
    script:
      "Certificates back up the cloud story. Ronak has Microsoft Azure Fundamentals and multiple AWS Partner credentials across technical accreditation, containers, cloud economics, workload migration, generative AI, IoT, and security governance. The publication adds research credibility through an IEEE Xplore paper on a multilingual minutes of meeting generator using speech to text, speaker diarization, and AI summarization.",
  },
  {
    id: "achievements",
    label: "Achievements",
    script:
      "Achievements show momentum. Ronak has published research on IEEE Xplore, solved more than 150 LeetCode problems, and placed in the top 10 across UI UX, web development, and AI ML hackathons. The what's next section shows he is still actively sharpening DSA, Linux, networking, Luna, and new research work.",
  },
  {
    id: "contact",
    label: "Contact",
    script:
      "The contact section is the call to action. Ronak is actively looking for graduate software engineering roles, cloud support associate roles, and internships. The page gives recruiters direct email, LinkedIn, GitHub, LeetCode, and a contact form so the next step is easy.",
  },
];

const WAKE_WORD = "Ronak";
const COMMAND_KEYWORDS = ["walkthrough", "walk through", "tour", "portfolio", "sections"];

const VoiceWalkthrough = () => {
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const isRunningRef = useRef(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [status, setStatus] = useState("Say \"Ronak walkthrough my portfolio\" after arming the mic.");
  const [heardText, setHeardText] = useState("");
  const [webShots, setWebShots] = useState<number[]>([]);
  const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setStatus("Voice wake word is not supported in this browser. Manual walkthrough is still available.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .slice(event.resultIndex)
        .filter((result) => result.isFinal)
        .map((result) => result[0].transcript)
        .join(" ")
        .trim();

      if (!transcript) {
        return;
      }

      const normalized = transcript.toLowerCase();
      setHeardText(transcript);

      if (!normalized.includes(WAKE_WORD)) {
        setStatus("Listening for the wake word \"Ronak\".");
        return;
      }

      if (!COMMAND_KEYWORDS.some((keyword) => normalized.includes(keyword))) {
        setStatus("Wake word detected. This assistant only supports the portfolio walkthrough command.");
        return;
      }

      if (isRunningRef.current) {
        setStatus("Walkthrough is already in progress.");
        return;
      }

      void startWalkthrough();
    };

    recognition.onerror = () => {
      setIsListening(false);
      setStatus("Microphone access was interrupted. Re-arm the mic to listen for Ronak again.");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    setIsSupported(true);

    return () => {
      recognition.stop();
      if (speechSupported) {
        window.speechSynthesis.cancel();
      }
      timeoutsRef.current.forEach((timeout) => window.clearTimeout(timeout));
      timeoutsRef.current = [];
    };
  }, [speechSupported]);

  const triggerWebShot = () => {
    const shotId = Date.now() + Math.random();
    setWebShots((current) => [...current, shotId]);

    const timeout = window.setTimeout(() => {
      setWebShots((current) => current.filter((id) => id !== shotId));
    }, 1800);

    timeoutsRef.current.push(timeout);
  };

  const speak = (text: string) =>
    new Promise<void>((resolve) => {
      if (!speechSupported) {
        resolve();
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 0.95;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.speak(utterance);
    });

  const startWalkthrough = async () => {
    if (isRunningRef.current) {
      return;
    }

    setIsRunning(true);
    setStatus("Walkthrough started. Ronak is guiding the page section by section.");
    recognitionRef.current?.stop();

    for (const section of sections) {
      const element = document.getElementById(section.id);
      triggerWebShot();
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
      setStatus(`Highlighting ${section.label}.`);
      await speak(section.script);
      await new Promise<void>((resolve) => {
        const timeout = window.setTimeout(resolve, 500);
        timeoutsRef.current.push(timeout);
      });
    }

    setIsRunning(false);
    setStatus("Walkthrough complete. Re-arm the mic to listen for Ronak again.");
  };

  const toggleListening = () => {
    if (!isSupported || isRunning) {
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      setStatus("Mic disarmed. Arm it again when you want to listen for Ronak.");
      return;
    }

    try {
      recognitionRef.current?.start();
      setIsListening(true);
      setStatus("Mic armed. Listening for the wake word \"Ronak\".");
    } catch {
      setStatus("The microphone could not start just yet. Give it another try.");
    }
  };

  return (
    <>
      <div className="fixed bottom-6 left-4 z-50 sm:bottom-8 sm:left-6">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="voice-guide-panel"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-primary/30 bg-background/90 px-4 py-4 shadow-[0_0_30px_rgba(239,68,68,0.2)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-primary" />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Minimize voice guide"
              >
                <X size={15} />
              </button>

              <div className="mb-3 flex items-center gap-3 pr-10">
                <div className="web-shooter-body">
                  <div className="web-shooter-core" />
                </div>
                <div>
                  <p className="font-tech text-[10px] uppercase tracking-[0.3em] text-primary">Voice Guide</p>
                  <p className="text-sm font-semibold text-foreground">Wake word: Ronak</p>
                </div>
              </div>

              <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">{status}</p>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={toggleListening}
                  disabled={!isSupported || isRunning}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isListening ? <MicOff size={14} /> : <Mic size={14} />}
                  {isListening ? "Disarm Mic" : "Arm Mic"}
                </button>
                <button
                  type="button"
                  onClick={() => void startWalkthrough()}
                  disabled={isRunning}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Sparkles size={14} />
                  Start Walkthrough
                </button>
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Radio size={12} className={isListening ? "text-primary" : ""} />
                  {isListening ? "Listening" : "Idle"}
                </span>
              </div>

              {heardText ? (
                <p className="mt-3 max-w-xs text-[11px] text-muted-foreground">
                  Heard: <span className="text-foreground">{heardText}</span>
                </p>
              ) : null}
            </motion.div>
          ) : (
            <motion.button
              key="voice-guide-launcher"
              type="button"
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background/90 text-primary shadow-[0_0_24px_rgba(239,68,68,0.28)] backdrop-blur-md transition-colors hover:bg-primary/10"
              aria-label="Open voice guide"
            >
              <MessageCircle size={22} />
              {isListening ? <span className="absolute right-1 top-1 h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(239,68,68,0.9)]" /> : null}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="pointer-events-none fixed inset-y-0 left-0 z-40 hidden w-full overflow-hidden sm:block">
        <AnimatePresence>
          {webShots.map((shotId, index) => (
            <motion.div
              key={shotId}
              initial={{ x: -220, opacity: 0 }}
              animate={{ x: "105vw", opacity: [0, 1, 1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="web-shot"
              style={{ top: `${18 + (index % 5) * 14}%` }}
            >
              <div className="web-shot-line" />
              <div className="web-shot-burst" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default VoiceWalkthrough;
