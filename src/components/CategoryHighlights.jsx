import React from "react";
import { Link } from "react-router-dom";
import "./CategoryHighlights.css";

const CATEGORIES = [
  {
    label: "Medicines",
    description:
      "Prescription and OTC medicines, delivered from branches near you.",
    cta: "Browse medicines",
    path: "/catalog",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="9" width="18" height="9" rx="2" />
        <path d="M3 13h18" />
        <path d="M8 9V6a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    label: "Health Devices",
    description:
      "BP monitors, glucometers, thermometers, and everyday wellness essentials.",
    cta: "Shop devices",
    path: "#",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="6" x2="13" y2="6" />
        <circle cx="12" cy="15" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Consultation",
    description:
      "Chat or book a call with a licensed pharmacist for OTC guidance.",
    cta: "Talk to a pharmacist",
    path: "#",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.55L3 20l1.05-5.4A8.5 8.5 0 1 1 21 11.5Z" />
        <line x1="8" y1="11.5" x2="16" y2="11.5" />
        <line x1="8" y1="15" x2="13" y2="15" />
      </svg>
    ),
  },
];

export default function CategoryHighlights() {
  return (
    <section className="category-highlights">
      <div className="category-highlights__inner">
        <div className="category-highlights__heading">
          <span className="category-highlights__eyebrow">What we offer</span>
          <h2 className="category-highlights__title">
            Everything your health needs, in one place
          </h2>
        </div>

        <div className="category-highlights__grid">
          {CATEGORIES.map((category) =>
            category.path === "#" ? (
              <button
                type="button"
                className="category-card"
                key={category.label}
                style={{
                  background: "#FAFAF9",
                  border: "1px solid #E2E8E4",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div className="category-card__icon">{category.icon}</div>
                <h3 className="category-card__title">{category.label}</h3>
                <p className="category-card__description">
                  {category.description}
                </p>
                <span className="category-card__cta">
                  {category.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </button>
            ) : (
              <Link to={category.path} className="category-card" key={category.label}>
                <div className="category-card__icon">{category.icon}</div>
                <h3 className="category-card__title">{category.label}</h3>
                <p className="category-card__description">
                  {category.description}
                </p>
                <span className="category-card__cta">
                  {category.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}