import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./VideoCallScreen.css";

const PHARMACISTS = {
  rabia: { name: "Dr. Rabia Naveed", specialty: "General Pharmacology" },
  hamza: { name: "Dr. Hamza Sheikh", specialty: "Chronic Care & Diabetes" },
  ayesha: { name: "Dr. Ayesha Malik", specialty: "Pediatric Medicine" },
  usman: { name: "Dr. Usman Tariq", specialty: "Cardiac Care" },
};

export default function VideoCallScreen() {
  const { pharmacistId } = useParams();
  const navigate = useNavigate();
  const pharmacist = PHARMACISTS[pharmacistId] || PHARMACISTS.rabia;

  const [callState, setCallState] = useState("connecting");
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setCallState("connected"), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (callState !== "connected") return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [callState]);

  const formatTime = (totalSeconds) => {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleEndCall = () => {
    navigate(`/consultation/chat/${pharmacistId}`);
  };

  return (
    <div className="video-call">
      <div className="video-call__main">
        {callState === "connecting" ? (
          <div className="video-call__connecting">
            <div className="video-call__ring-wrap">
              <div className="video-call__bg-ring video-call__bg-ring--outer" />
              <div className="video-call__bg-ring video-call__bg-ring--inner" />
              <div className="video-call__avatar video-call__avatar--large">
                {pharmacist.name.split(" ").slice(-2).map((w) => w[0]).join("")}
                <span className="video-call__avatar-pulse" />
              </div>
            </div>
            <h2>{pharmacist.name}</h2>
            <p className="video-call__connecting-text">
              <span className="video-call__spinner" />
              Connecting...
            </p>
          </div>
        ) : (
          <div className="video-call__connected">
            <div className="video-call__remote-placeholder">
              <div className="video-call__ring-wrap">
                <div className="video-call__bg-ring video-call__bg-ring--outer" />
                <div className="video-call__bg-ring video-call__bg-ring--inner" />
                <div className="video-call__avatar video-call__avatar--large">
                  {pharmacist.name.split(" ").slice(-2).map((w) => w[0]).join("")}
                </div>
              </div>
              <span className="video-call__remote-name">{pharmacist.name}</span>
              <span className="video-call__remote-specialty">{pharmacist.specialty}</span>
            </div>

            <div className="video-call__self-preview">
              {isCameraOff ? (
                <span className="video-call__camera-off">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1" />
                    <path d="M9 7h4l2 2h5v9" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                  Camera off
                </span>
              ) : (
                <span className="video-call__self-avatar">You</span>
              )}
            </div>

            <div className="video-call__timer">
              <span className="video-call__timer-dot" />
              {formatTime(seconds)}
            </div>
          </div>
        )}
      </div>

      <div className="video-call__controls">
        <button
          className={`video-call__control ${isMuted ? "video-call__control--off" : ""}`}
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label="Toggle mute"
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
              <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
              <line x1="12" y1="19" x2="12" y2="23" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
            </svg>
          )}
        </button>

        <button
          className={`video-call__control ${isCameraOff ? "video-call__control--off" : ""}`}
          onClick={() => setIsCameraOff((prev) => !prev)}
          aria-label="Toggle camera"
        >
          {isCameraOff ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1" />
              <path d="M9 7h4l2 2h5v9" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" />
            </svg>
          )}
        </button>

        <button className="video-call__control video-call__control--end" onClick={handleEndCall} aria-label="End call">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 9c-3.5 0-6.6 1.1-9.1 2.9-.6.4-.7 1.3-.2 1.9l2.1 2.6c.4.5 1.2.6 1.7.2.9-.7 1.9-1.3 3-1.7.4-.1.6-.5.6-.9v-2.6c1.2-.3 2.5-.5 3.9-.5s2.7.2 3.9.5V14c0 .4.3.8.6.9 1.1.4 2.1 1 3 1.7.5.4 1.3.3 1.7-.2l2.1-2.6c.5-.6.4-1.5-.2-1.9C18.6 10.1 15.5 9 12 9Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}