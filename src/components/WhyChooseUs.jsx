import React from "react";
import "./WhyChooseUs.css";

const REASONS = [
  {
    title: "Verified pharmacists",
    description: "Every order is reviewed by a licensed pharmacist before it ships.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Multi-branch network",
    description: "Connected branches share stock, so items reach you faster.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="10" width="6" height="10" rx="1" />
        <rect x="15" y="6" width="6" height="14" rx="1" />
        <rect x="9" y="14" width="6" height="6" rx="1" />
        <path d="M6 10V6l3-2 3 2v2" />
      </svg>
    ),
  },
  {
    title: "Fast, tracked delivery",
    description: "Follow every order in real time, from confirmation to your door.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7h11v10H3z" />
        <path d="M14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="19" r="1.6" />
        <circle cx="17.5" cy="19" r="1.6" />
      </svg>
    ),
  },
  {
    title: "Authentic medicines",
    description: "Sourced and stored correctly, with batch and expiry shown upfront.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2 3 6v6c0 5.2 3.8 9 9 10 5.2-1 9-4.8 9-10V6l-9-4Z" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__inner">
        <div className="why-choose-us__heading">
          <span className="why-choose-us__eyebrow">Why HealthAnchor</span>
          <h2 className="why-choose-us__title">Built around trust, not just transactions</h2>
        </div>

        <div className="why-choose-us__grid">
          {REASONS.map((reason) => (
            <div className="why-choose-us__item" key={reason.title}>
              <div className="why-choose-us__icon">{reason.icon}</div>
              <h3 className="why-choose-us__item-title">{reason.title}</h3>
              <p className="why-choose-us__item-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}