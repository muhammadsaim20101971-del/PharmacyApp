import React, { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ChatScreen.css";

const PHARMACISTS = {
  rabia: { name: "Dr. Rabia Naveed", specialty: "General Pharmacology" },
  hamza: { name: "Dr. Hamza Sheikh", specialty: "Chronic Care & Diabetes" },
  ayesha: { name: "Dr. Ayesha Malik", specialty: "Pediatric Medicine" },
  usman: { name: "Dr. Usman Tariq", specialty: "Cardiac Care" },
};

const AUTO_REPLIES = [
  "Thanks for sharing that — can you tell me if you're currently on any other medication?",
  "Based on what you've described, that should be safe, but please space doses 2 hours apart.",
  "I'd recommend monitoring for 24 hours. If symptoms persist, please visit a branch in person.",
  "Happy to help further — let me know if you have any other questions.",
];

export default function ChatScreen() {
  const { pharmacistId } = useParams();
  const navigate = useNavigate();
  const pharmacist = PHARMACISTS[pharmacistId] || PHARMACISTS.rabia;

  const [messages, setMessages] = useState([
    {
      sender: "pharmacist",
      text: `Hi, I'm ${pharmacist.name}. How can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply =
        AUTO_REPLIES[Math.floor(Math.random() * AUTO_REPLIES.length)];
      setMessages((prev) => [...prev, { sender: "pharmacist", text: reply }]);
      setIsTyping(false);
    }, 1600);
  };

  return (
    <div className="chat-screen">
      <div className="chat-screen__header">
        <button className="chat-screen__back" onClick={() => navigate("/consultation")}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="chat-screen__avatar">
          {pharmacist.name.split(" ").slice(-2).map((w) => w[0]).join("")}
        </div>

        <div className="chat-screen__header-info">
          <span className="chat-screen__name">{pharmacist.name}</span>
          <span className="chat-screen__status">
            <span className="chat-screen__status-dot" />
            Online now
          </span>
        </div>

        <Link to={`/consultation/call/${pharmacistId}`} className="chat-screen__call-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 7l-7 5 7 5V7z" />
            <rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        </Link>
      </div>

      <div className="chat-screen__body">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              message.sender === "user" ? "chat-bubble--user" : "chat-bubble--pharmacist"
            }`}
          >
            {message.text}
          </div>
        ))}

        {isTyping && (
          <div className="chat-bubble chat-bubble--pharmacist chat-bubble--typing">
            <span className="chat-screen__typing-dot" />
            <span className="chat-screen__typing-dot" />
            <span className="chat-screen__typing-dot" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form className="chat-screen__input-row" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit" aria-label="Send message">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </form>
    </div>
  );
}