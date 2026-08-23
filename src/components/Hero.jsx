import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const STATS = [
  { value: "3", label: "Branches connected" },
  { value: "30 min", label: "Express delivery" },
  { value: "24/7", label: "Pharmacist support" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Trusted online pharmacy</span>

          <h1 className="hero__headline">
            Your health, delivered{" "}
            <span className="hero__headline-accent">wherever</span> you are
          </h1>

          <p className="hero__subtext">
            Order medicines, book pharmacist consultations, and manage
            prescriptions for your whole family — from one platform, backed
            by real branches near you.
          </p>

          <div className="hero__cta-row">
            <Link to="/catalog" className="hero__btn hero__btn--primary">
              Browse medicines
            </Link>
            <Link to="/consultation" className="hero__btn hero__btn--outline">
              Book a consultation
            </Link>
          </div>

          <div className="hero__stats">
            {STATS.map((stat, index) => (
              <React.Fragment key={stat.label}>
                {index > 0 && <span className="hero__stat-divider" />}
                <div className="hero__stat">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__emblem-wrap">
            <div className="hero__emblem-ring hero__emblem-ring--outer" />
            <div className="hero__emblem-ring hero__emblem-ring--inner" />

            <div className="hero__emblem">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="9" width="18" height="9" rx="2" />
                <path d="M3 13h18" />
                <path d="M8 9V6a4 4 0 0 1 8 0v3" />
              </svg>
            </div>

            <div className="hero__orbit-icon hero__orbit-icon--pill">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="8" width="20" height="8" rx="4" transform="rotate(-45 12 12)" />
                <line x1="12" y1="8" x2="12" y2="16" transform="rotate(-45 12 12)" />
              </svg>
            </div>

            <div className="hero__orbit-icon hero__orbit-icon--pulse">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 12h4l2-5 3 10 2-7h7" />
              </svg>
            </div>

            <div className="hero__orbit-icon hero__orbit-icon--leaf">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 21c8-1 13-6 14-14C11 8 6 13 5 21Z" />
                <path d="M9 17c2-3 4-5 8-7" />
              </svg>
            </div>

            <div className="hero__orbit-icon hero__orbit-icon--drop">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2s6 7.5 6 12a6 6 0 0 1-12 0c0-4.5 6-12 6-12Z" />
              </svg>
            </div>

            <span className="hero__emblem-badge">Est. quality care</span>
          </div>
        </div>
      </div>
    </section>
  );
}