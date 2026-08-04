import React from "react";
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
            <a href="#" className="hero__btn hero__btn--primary">
              Browse medicines
            </a>
            <a href="#" className="hero__btn hero__btn--outline">
              Book a consultation
            </a>
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
          <div className="hero__card">
            <div className="hero__badge hero__badge--top">
              Verified pharmacist
            </div>

            <div className="hero__card-header">
              <span className="hero__card-dot" />
              <span className="hero__card-title">Order #HA-2291</span>
            </div>

            <div className="hero__card-row">
              <span className="hero__card-label">Metformin 500mg</span>
              <span className="hero__card-value">Qty 2</span>
            </div>
            <div className="hero__card-row">
              <span className="hero__card-label">Vitamin D3</span>
              <span className="hero__card-value">Qty 1</span>
            </div>

            <div className="hero__card-progress">
              <div className="hero__card-progress-step hero__card-progress-step--done">
                <span className="hero__card-progress-dot" />
                Confirmed
              </div>
              <div className="hero__card-progress-step hero__card-progress-step--active">
                <span className="hero__card-progress-dot" />
                Out for delivery
              </div>
              <div className="hero__card-progress-step">
                <span className="hero__card-progress-dot" />
                Delivered
              </div>
            </div>

            <div className="hero__badge hero__badge--bottom">
              Nearest branch: 1.2 km
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}