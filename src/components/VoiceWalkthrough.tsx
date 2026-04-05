import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, Radio, Sparkles } from "lucide-react";

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
      "Meet Ronak at the center of this Spider Verse portfolio. This opening section sets the tone immediately: full stack capability, confident presentation, and a builder mindset that is ready for impact from day one.",
  },
  {
    id: "about",
    label: "About",
    script:
      "In the about section, Ronak comes through as a developer who pairs curiosity with responsibility. That combination matters because strong teams need someone who learns fast, writes thoughtfully, and keeps quality high while solving real problems.",
  },
  {
    id: "experience",
    label: "Experience",
    script:
      "Here the experience timeline highlights growth, ownership, and consistent delivery. Ronak is positioned as someone who can contribute across the stack, move features forward, and support teams with practical engineering judgment.",
  },
  {
    id: "skills",
    label: "Skills",
    script:
      "The skills section shows breadth without losing focus. Frontend, backend, tooling, and systems knowledge together make Ronak a well rounded candidate who can ramp up quickly and add value across product and engineering needs.",
  },
  {
    id: "projects",
    label: "Projects",
    script:
      "Projects are where execution becomes visible. This section showcases Ronak as a hands on problem solver who can turn ideas into polished, usable products with modern technologies and clear technical direction.",
  },
  {
    id: "education",
    label: "Education",
    script:
      "The education section reinforces technical foundation and long term discipline. It supports the bigger story that Ronak combines formal learning with practical building, which makes him a dependable candidate for ambitious teams.",
  },
  {
    id: "certificates",
    label: "Certificates",
    script:
      "These certifications and publications add external proof of effort and growth. They help frame Ronak as someone who keeps leveling up and invests seriously in staying current with modern engineering practices.",
  },
  {
    id: "achievements",
    label: "Achievements",
    script:
      "Achievements provide the strongest signal of momentum. They position Ronak as a candidate who not only learns and builds, but also delivers outcomes that stand out and create confidence for hiring teams.",
  },
  {
    id: "contact",
    label: "Contact",
    script:
      "The walkthrough ends at contact because this portfolio is built to convert interest into conversation. Ronak is presented here as a high potential candidate worth reaching out to for impactful engineering roles and collaboration.",
  },
];

const WAKE_WORD = "ronak";
const COMMAND_KEYWORDS = ["walkthrough", "walk through", "tour", "portfolio", "sections"];

const VoiceWalkthrough = () => {
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const isRunningRef = useRef(false);
  const [isSupported, setIsSupported] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
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
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-background/90 px-4 py-4 shadow-[0_0_30px_rgba(239,68,68,0.2)] backdrop-blur-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-primary" />
          <div className="mb-3 flex items-center gap-3">
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
        </div>
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
