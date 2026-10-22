import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const KB = [
  { patterns: ["who are you", "who is karthik", "tell me about yourself", "introduce yourself", "about you", "about karthik"], response: "Hi! I'm Karthik H M - a third-year CSE student specialising in AI & ML and a Full-Stack Developer from Karnataka, India. I build modern web apps and love exploring AI/ML!" },
  { patterns: ["email", "contact", "reach", "mail", "message"], response: "You can reach Karthik at:\n karthikhm171205-dev@gmail.com\n karthikhm171205@gmail.com\nFeel free to drop a message anytime!" },
  { patterns: ["github", "code", "repository", "repo", "source"], response: "Karthik's GitHub: github.com/karthikhm171205-dev\nAll his projects are there - Task Manager, E-Commerce App, Student Tracking System, and this portfolio!" },
  { patterns: ["location", "where", "city", "state", "country", "india", "karnataka"], response: "Karthik is based in Karnataka, India." },
  { patterns: ["college", "university", "education", "study", "studying", "degree", "institute", "institution", "school", "vtu", "jyothy"], response: "Karthik is pursuing B.E. in CSE (AI & ML) at Jyothy Institute of Technology, Bengaluru (VTU). He completed 12th (PCMB) from Govt. PU College, Channapatna with 84%." },
  { patterns: ["cgpa", "gpa", "marks", "score", "grade", "percentage", "result", "academic performance"], response: "Karthik has a CGPA of 8.0 / 10.0 in his B.E. (AIML) at Jyothy Institute of Technology. He scored 84% in his 12th grade." },
  { patterns: ["year", "semester", "third year", "3rd year", "graduation"], response: "Karthik is currently in his 3rd year of B.E. CSE (AI & ML) - expected graduation in 2026." },
  { patterns: ["skills", "technologies", "tech stack", "tools", "know", "languages", "programming"], response: "Karthik's tech stack:\nFrontend: React.js, HTML5, CSS3, JavaScript, TypeScript\nBackend: Node.js, Express.js\nDatabase: MongoDB, MySQL\nAI/ML: Python, NumPy, Pandas, Matplotlib, Scikit-learn\nTools: Git, GitHub, Postman, VS Code, Render, Vercel" },
  { patterns: ["frontend", "react", "html", "css", "javascript", "typescript", "ui"], response: "On the frontend, Karthik works with React.js, HTML5, CSS3, JavaScript, and TypeScript - building responsive, modern UIs with great user experience." },
  { patterns: ["backend", "node", "express", "server", "api", "rest"], response: "Karthik builds backend systems with Node.js and Express.js - REST APIs, JWT authentication, role-based authorization, and MongoDB CRUD operations." },
  { patterns: ["database", "mongodb", "mysql", "db", "data"], response: "Karthik is experienced with MongoDB (including MongoDB Atlas cloud) and MySQL for database design and management." },
  { patterns: ["machine learning", "ml", "ai", "artificial intelligence", "python", "numpy", "pandas", "scikit", "data science"], response: "Karthik specialises in AI & ML. His toolkit:\nPython, NumPy, Pandas, Matplotlib, Scikit-learn.\nHe works on data analysis and ML model development as part of his AIML specialisation." },
  { patterns: ["projects", "what have you built", "what did you build", "portfolio projects", "work", "built"], response: "Karthik has built 4 projects:\n1. Task Management App - MERN + JWT (Live on Render)\n2. E-Commerce Web App - Full-stack with cart & orders (Live on Render)\n3. Personal Portfolio - This very website (Live on Vercel)\n4. Student Academic Tracking System (GitHub)\n\nAsk me about any specific project!" },
  { patterns: ["task manager", "task management", "task app", "todo"], response: "Task Management App:\n- Full-stack MERN application\n- User registration & secure login\n- JWT auth & protected routes\n- Task CRUD operations\n- MongoDB Atlas cloud\nLive: task-manager-frontend-7qxt.onrender.com" },
  { patterns: ["ecommerce", "e-commerce", "shop", "shopping", "cart", "order"], response: "E-Commerce Web Application:\n- Full-stack MERN project\n- User auth & role-based access\n- Product management & catalog\n- Shopping cart & checkout\n- Order management system\nLive: ecommerce-app-qr67.onrender.com" },
  { patterns: ["student", "academic", "tracking", "typescript"], response: "Student Academic Tracking System - TypeScript web app for managing and tracking student academic records with performance tracking and structured reporting.\nGitHub: github.com/karthikhm171205-dev/Student-Academic-Tracking-System" },
  { patterns: ["internship", "job", "career", "looking for", "hire", "hiring", "opportunity", "open to", "work for"], response: "Karthik is actively seeking internship opportunities in:\n- Full-Stack Development\n- Backend Development\n- AI/ML Engineering\n\nOpen to remote and hybrid roles.\nContact: karthikhm171205-dev@gmail.com" },
  { patterns: ["strengths", "qualities", "traits", "personality", "soft skills"], response: "Karthik's key strengths:\n- Problem Solving: breaking complex challenges into manageable solutions\n- Team Collaboration: works effectively in agile teams\n- Continuous Learning: always picking up new technologies\n- Goal-Oriented: delivers structured, quality results" },
  { patterns: ["coursework", "subjects", "courses", "curriculum"], response: "Karthik's relevant coursework:\n- Data Structures & Algorithms\n- Machine Learning\n- Computer Networks\n- Database Management Systems\n- Operating Systems\n- Python Programming\n- Object-Oriented Programming" },
  { patterns: ["resume", "cv", "download"], response: "Click the 'View Resume' button in the Hero section or the navbar to open the resume modal - you can preview and download the PDF from there!" },
  { patterns: ["linkedin", "social", "profile", "connect"], response: "You can find Karthik on LinkedIn - the link is available in the Contact section and footer of this portfolio!" },
  { patterns: ["hello", "hi", "hey", "good morning", "good evening", "good afternoon", "howdy", "greet"], response: "Hey there! I'm Karthik's portfolio assistant. Ask me about his skills, projects, education, internship availability, or how to contact him!" },
  { patterns: ["thank", "thanks", "thank you", "awesome", "great", "cool", "nice", "wonderful"], response: "You're welcome! Feel free to ask anything else about Karthik anytime!" },
  { patterns: ["bye", "goodbye", "see you", "later", "cya"], response: "Goodbye! Come back anytime if you have more questions about Karthik. Have a great day!" },
  { patterns: ["help", "what can you do", "what can you tell", "options", "guide", "menu"], response: "I can answer questions about Karthik H M! Try:\n- Who is Karthik?\n- What are his skills?\n- Tell me about his projects\n- What is his CGPA?\n- Is he open to internships?\n- How to contact him?\n- What is his education?" }
];

const SUGGESTIONS = [
  "Who is Karthik?",
  "What are his skills?",
  "Tell me about his projects",
  "Is he open to internships?",
  "How to contact him?"
];

function getResponse(input) {
  const text = input.toLowerCase().trim();
  for (const entry of KB) {
    if (entry.patterns.some((p) => text.includes(p))) {
      return entry.response;
    }
  }
  return "I can only answer questions about Karthik H M. Try asking about his skills, projects, education, or contact info!";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hi! I'm Karthik's portfolio assistant. Ask me anything about Karthik - his skills, projects, education, or how to get in touch!", time: new Date() }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showSugg, setShowSugg] = useState(true);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  function sendMessage(text) {
    const userText = text || input.trim();
    if (!userText) return;
    setInput("");
    setShowSugg(false);
    const userMsg = { id: Date.now(), from: "user", text: userText, time: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);
    setTimeout(() => {
      const botText = getResponse(userText);
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: "bot", text: botText, time: new Date() }]);
      setTyping(false);
    }, 700 + Math.random() * 400);
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  }

  function fmt(d) {
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <>
      <button
        className={"chatbot-fab" + (open ? " chatbot-fab--open" : "")}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle chatbot"
        id="chatbot-fab-btn"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && <span className="chatbot-fab-pulse" />}
      </button>

      <div
        className={"chatbot-window" + (open ? " chatbot-window--open" : "")}
        role="dialog"
        aria-label="Portfolio chatbot"
      >
        <div className="chatbot-header">
          <div className="chatbot-header-avatar"><Bot size={20} /></div>
          <div className="chatbot-header-info">
            <span className="chatbot-header-name">Karthik's Assistant</span>
            <span className="chatbot-header-status">
              <span className="chatbot-online-dot" />
              Online - Ask me anything!
            </span>
          </div>
          <button className="chatbot-close-btn" onClick={() => setOpen(false)} aria-label="Close chat">
            <X size={18} />
          </button>
        </div>

        <div className="chatbot-messages" id="chatbot-messages-area">
          {messages.map((msg) => (
            <div key={msg.id} className={"chatbot-msg chatbot-msg--" + msg.from}>
              {msg.from === "bot" && (
                <div className="chatbot-msg-avatar"><Bot size={14} /></div>
              )}
              <div className="chatbot-msg-bubble">
                <p className="chatbot-msg-text">{msg.text}</p>
                <span className="chatbot-msg-time">{fmt(msg.time)}</span>
              </div>
              {msg.from === "user" && (
                <div className="chatbot-msg-avatar chatbot-msg-avatar--user"><User size={14} /></div>
              )}
            </div>
          ))}

          {typing && (
            <div className="chatbot-msg chatbot-msg--bot">
              <div className="chatbot-msg-avatar"><Bot size={14} /></div>
              <div className="chatbot-msg-bubble chatbot-typing">
                <span /><span /><span />
              </div>
            </div>
          )}

          {showSugg && !typing && messages.length < 2 && (
            <div className="chatbot-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="chatbot-suggestion-btn"
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={endRef} />
        </div>

        <div className="chatbot-input-area">
          <input
            ref={inputRef}
            type="text"
            className="chatbot-input"
            placeholder="Ask about Karthik..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            id="chatbot-input-field"
            aria-label="Chat input"
          />
          <button
            className="chatbot-send-btn"
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            aria-label="Send"
            id="chatbot-send-btn"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
