import { useState, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import robAnimation from "../utils/rob.json";

// ── Markdown-lite renderer ────────────────────────────────────────────────
function FormattedMessage({ content }) {
  const lines = content.split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (/^\d+[\.\)]\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^\d+[\.\)]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+[\.\)]\s/, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} style={{ paddingLeft: "1.1rem", margin: "6px 0", listStyleType: "decimal" }}>
          {items.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "5px" }}>
              <InlineFormat text={item} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    if (/^[-•]\s/.test(line.trim())) {
      const items = [];
      while (i < lines.length && /^[-•]\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-•]\s/, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} style={{ paddingLeft: "1.1rem", margin: "6px 0", listStyleType: "disc" }}>
          {items.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "5px" }}>
              <InlineFormat text={item} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    elements.push(
      <p key={`p-${i}`} style={{ margin: "3px 0" }}>
        <InlineFormat text={line} />
      </p>
    );
    i++;
  }

  return <div style={{ lineHeight: "1.55" }}>{elements}</div>;
}

function InlineFormat({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**")
          ? <strong key={i} style={{ fontWeight: 700 }}>{part.slice(2, -2)}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

// ── Typewriter hook ───────────────────────────────────────────────────────
function useTypewriter(text, speed = 18) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!text) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text]);

  return { displayed, done };
}

// ── Typewriter message component ──────────────────────────────────────────
function TypewriterMessage({ content }) {
  const { displayed, done } = useTypewriter(content, 18);
  return (
    <>
      <FormattedMessage content={displayed} />
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "13px",
            background: "currentColor",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "tbBlink 0.75s infinite",
          }}
        />
      )}
    </>
  );
}

// ── Knowledge base ────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Thunderbeast — Vedant Purkar's personal portfolio assistant. You answer questions ONLY about Vedant Purkar. If someone asks anything unrelated to Vedant, politely say you can only answer questions about Vedant.

Be concise, confident, and direct. No filler phrases. Respond in a clean, modern tone matching a developer portfolio.

FORMATTING RULES (strictly follow):
- When listing multiple items (projects, skills, achievements, etc.), always put each item on its own line using a numbered list (1. 2. 3.) or bullet list (- item).
- Use **bold** for project names, section labels, and key terms.
- Never dump everything in one paragraph when a list would be clearer.
- Keep responses tight — no unnecessary preamble.

=== VEDANT PURKAR — COMPLETE KNOWLEDGE BASE ===

PERSONAL
- Name: Vedant Purkar
- Email: vedant.purkar05@gmail.com | Phone: +91 8446995092
- Location: Nashik, Maharashtra, India
- GitHub: Thunderbeast5 | Portfolio: vedantpurkar.me
- LinkedIn: Vedant Purkar

EDUCATION
- B.Tech Computer Engineering (Honors: Quantum Computing) — K K Wagh Institute of Engineering Education & Research, Nashik (2023–Present) | SGPA: 9.21/10
- HSC — Matoshri Junior College, Mhasrul (2021–2023) | Score: 77%
- SSC (CBSE) — Kendriya Vidyalaya Air Force Station, Ojhar (2011–2021) | Score: 93.6%

EXPERIENCE
- Machine Learning Intern at 1Stop.ai (Jul–Aug 2025): Built ML pipelines (Python, NumPy, Pandas) on 3+ datasets boosting accuracy by 12%. Deployed object/landmark detection with TensorFlow + OpenCV, reducing inference latency ~40%.

SKILLS
- Languages: Java, Python, C++, C, SQL, HTML, CSS
- Frameworks: React.js, Spring Boot, Node.js, Express.js, React Native, Tailwind CSS, RESTful APIs
- Databases: MySQL, MongoDB, Firebase, Supabase
- Tools: Git, GitHub, Maven, Postman, Figma, Expo Go, Vercel, Render
- Libraries/Tech: Hibernate JPA, JWT, OpenCV, TensorFlow, NumPy, Pandas, LangChain
- Concepts: DSA, OOP, OS, Database Design, Generative AI, AI & ML

PROJECTS
1. Sahara (2025) — Digital epilepsy care ecosystem (React Native, React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind). Emergency ambulance alerts, medication reminders, AI chatbot for parents, doctor dashboard. Live: sahara-il0u.onrender.com

2. Pratibhara (2026) — AI platform for women entrepreneurs (React.js, Node.js, Express.js, MongoDB, Python, Flask, LangChain, AWS). AI chatbot for business plans, mentor-mentee matchmaking, funding discovery. Top 30 at AI Impact Summit. Live: ai-for-her.onrender.com

3. BridgeLink (2025) — Student-alumni networking platform (React.js, Node.js, Express.js, MongoDB, Tailwind, Firebase). Incubated at Kumbathon Foundation. AI mentor matchmaking, social feed, hackathon hosting. Live: bridgelink.in

4. Indic (2025) — Gamified Indian language learning (React.js, Tailwind, Node.js, Framer Motion, AR). Real-time AI avatar conversations, AR Sign Language, quizzes. Winner of Innovera National Hackathon. Live: indic.in.net

5. TEDx KKWIEER (2025) — Official TEDx conference website (React.js, Tailwind, Framer Motion, Vite). Scroll-driven animations, speaker grids, ticket portal. Live: tedxkkwieer.com

6. SVICSM (2026) — Institutional platform for admissions (React.js, Node.js, Express.js, MongoDB, Tailwind, PDF Generation). Online admission workflow, admin portal, automated PDF generation. Live: svicsm.com

7. Prana Elixir (2026) — Luxury artisanal soap e-commerce (React.js, Node.js, Express.js, MongoDB, Tailwind, Razorpay, Shiprocket). Payment gateway, shipping automation, admin dashboard. Live: thepranaelixir.com

ACHIEVEMENTS
- Top 30 — AI Impact Summit, AI by Her Challenge 2026 (Feb 2026)
- Winner — Innovera National-Level Hackathon 2025 (beat 100+ teams) (Mar 2025)
- Selected Participant — Kumbhathon Foundational Idea Incubation Program (Jan 2025)
- Global Finalist — NASA Space Apps Challenge 2024 (Global Top 40 out of 100,000+ participants)
- Runner-Up — NASA Space Apps Challenge 2024, Local Event, Nashik
- Winner/Runner-Up — Python, Java & IoT Mini Project Competitions at KKWIEER (Aug 2024)

CO-CURRICULAR
- Website Manager — TEDx KKWIEER (built official site with integrated ticketing system) — Dec 2025–Present
- Technical Co-Head — ECell KKWIEER (deployed site handling 500+ student registrations) — Aug 2025–Present
- Campus Ambassador — OpenAI (promoted initiatives, drove student engagement) — Jul 2025–Present

CERTIFICATIONS
- AWS Academy Cloud Foundations (Mar 2026)
- The Complete Full-Stack Web Development Bootcamp — Udemy (Jan 2026)
- Career Essentials in Generative AI — Microsoft via LinkedIn Learning (Nov 2025)
- Database Management System — NPTEL (IIT) (Sept 2025)
- React – Complete Guide to Building Real-World Applications — Udemy (Jul 2024)
- 100 Days of Code: The Complete Python Pro Bootcamp — Udemy (Jun 2023)

EXTRA-CURRICULAR
- Sports: Active member of the Computer Engineering Department Volleyball Team
- Arts & Crafts: Applies design thinking and visual aesthetics to UI/UX decisions
- Esports: Competes in Call of Duty Mobile — sharpens strategic thinking and teamwork

SERVICES OFFERED
- Web Design & Development
- App Design & Development (iOS & Android)
- SEO Optimization
- API Integration
- Database & Cloud Integration

Only answer questions about Vedant Purkar using this knowledge. Keep answers concise and well-formatted.`;

// ── Shared fetch helper ───────────────────────────────────────────────────
async function fetchGroqReply(conversationMessages) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      max_tokens: 1000,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...conversationMessages.map((m) => ({ role: m.role, content: m.content })),
      ],
    }),
  });
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Something went wrong. Please try again.";
}

// ── Main component ─────────────────────────────────────────────────────────
export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! I'm Thunderbeast — Vedant's assistant. Ask me anything about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // Track the index of the latest assistant message so only it gets typewriter
  const [latestAssistantIdx, setLatestAssistantIdx] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const reply = await fetchGroqReply(newMessages);
      const withReply = [...newMessages, { role: "assistant", content: reply }];
      setMessages(withReply);
      setLatestAssistantIdx(withReply.length - 1);
    } catch {
      const withError = [...newMessages, { role: "assistant", content: "Connection error. Please try again." }];
      setMessages(withError);
      setLatestAssistantIdx(withError.length - 1);
    } finally {
      setLoading(false);
    }
  }

  async function sendSuggested(q) {
    if (loading) return;
    const newMessages = [...messages, { role: "user", content: q }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const reply = await fetchGroqReply(newMessages);
      const withReply = [...newMessages, { role: "assistant", content: reply }];
      setMessages(withReply);
      setLatestAssistantIdx(withReply.length - 1);
    } catch {
      const withError = [...newMessages, { role: "assistant", content: "Connection error. Please try again." }];
      setMessages(withError);
      setLatestAssistantIdx(withError.length - 1);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const suggestedQuestions = [
    "What projects has Vedant built?",
    "What are his top achievements?",
    "What tech stack does he use?",
  ];

  return (
    <>
      {/* ── Floating trigger button ── */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 font-titillium border-none bg-transparent p-0 shadow-none"
        style={{ background: "transparent", border: "none", padding: 0 }}
      >
        {isOpen ? (
          <svg width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="bg-black rounded-full p-2 text-[#E3E3E3] shadow-lg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <img src="/bot1.png" alt="Chat with Thunderbeast" className="w-11 h-11 object-contain" />
        )}
      </button>

      {/* ── Chat panel ── */}
      <div
        className="fixed bottom-44 right-6 z-50 font-titillium"
        style={{
          width: "min(380px, calc(100vw - 2rem))",
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.22s ease",
          transformOrigin: "bottom right",
        }}
      >
        <div
          className="bg-[#E3E3E3] rounded-3xl overflow-hidden"
          style={{ border: "1.5px solid rgba(0,0,0,0.12)", boxShadow: "0 8px 40px rgba(0,0,0,0.13)" }}
        >
          {/* Header */}
          <div className="px-5 pt-4 pb-3 border-b border-black/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {/* <img src="/bot1.png" alt="Thunderbeast Bot" className="w-7 h-7 rounded-full flex-shrink-0 object-cover" /> */}
              <span className="text-sm font-black uppercase tracking-[0.2em] text-black">Thunderbeast</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black/40 hover:text-black transition-colors"
              aria-label="Close"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="px-4 py-4 overflow-y-auto space-y-3"
            style={{ maxHeight: "340px", minHeight: "200px" }}
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[86%] px-4 py-2.5 text-sm font-medium ${
                    msg.role === "user"
                      ? "bg-black text-[#E3E3E3] rounded-2xl rounded-br-sm leading-relaxed"
                      : "bg-white/70 text-black rounded-2xl rounded-bl-sm"
                  }`}
                  style={{
                    wordBreak: "break-word",
                    border: msg.role === "assistant" ? "1px solid rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  {msg.role === "assistant" ? (
                    i === latestAssistantIdx && !loading ? (
                      <TypewriterMessage content={msg.content} />
                    ) : (
                      <FormattedMessage content={msg.content} />
                    )
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {/* Dots typing indicator — shown while waiting for response */}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="bg-white/70 text-black rounded-2xl rounded-bl-sm px-4 py-3"
                  style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                >
                  <div className="flex gap-1 items-center h-4">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="w-1.5 h-1.5 rounded-full bg-black/40"
                        style={{ animation: "tbBounce 1.1s infinite", animationDelay: `${dot * 0.18}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions — only on first load */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendSuggested(q)}
                  className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-black/20 bg-white/50 hover:bg-black hover:text-[#E3E3E3] transition-all duration-200"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input row */}
          <div className="px-4 pb-4 pt-2 flex gap-2 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about Vedant..."
              rows={1}
              disabled={loading}
              className="flex-1 bg-white/60 text-black text-sm font-medium placeholder:text-black/30 resize-none rounded-2xl px-4 py-2.5 outline-none border border-black/10 focus:border-black/30 transition-colors duration-200 leading-relaxed"
              style={{ maxHeight: "90px", fontFamily: "'Titillium Web', sans-serif", scrollbarWidth: "none" }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 90) + "px";
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="w-10 h-10 flex-shrink-0 rounded-2xl bg-black text-[#E3E3E3] flex items-center justify-center hover:opacity-80 active:scale-95 transition-all duration-200 disabled:opacity-30"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tbBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes tbBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}