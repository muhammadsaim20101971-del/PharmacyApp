import React from "react";
import { Link } from "react-router-dom";
import "./BranchLocator.css";

const BRANCHES = [
  {
    name: "HealthAnchor - Model Town",
    address: "12-B Model Town Extension",
    distance: "1.2 km away",
    status: "Open now",
  },
  {
    name: "HealthAnchor - Satellite Town",
    address: "Chandni Chowk Road",
    distance: "3.8 km away",
    status: "Open now",
  },
  {
    name: "HealthAnchor - Cantt",
    address: "The Mall, Cantt",
    distance: "6.5 km away",
    status: "Closes 10 PM",
  },
];

export default function BranchLocator() {
  return (
    <section className="branch-locator">
      <div className="branch-locator__inner">
        <div className="branch-locator__heading">
          <span className="branch-locator__eyebrow">Branch network</span>
          <h2 className="branch-locator__title">
            Real branches, ready to fulfil your order
          </h2>
          <p className="branch-locator__subtext">
            When one branch runs low, another one nearby covers it — so you
            rarely wait on stock.
          </p>
        </div>

        <div className="branch-locator__grid">
          {BRANCHES.map((branch) => (
            <div className="branch-card" key={branch.name}>
              <div className="branch-card__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
                  <circle cx="12" cy="9.5" r="2.4" />
                </svg>
              </div>

              <h3 className="branch-card__name">{branch.name}</h3>
              <p className="branch-card__address">{branch.address}</p>

              <div className="branch-card__meta">
                <span className="branch-card__distance">{branch.distance}</span>
                <span className="branch-card__divider" />
                <span className="branch-card__status">{branch.status}</span>
              </div>
            </div>
          ))}
        </div>

        <Link to="/branches" className="branch-locator__cta">
          Find a branch near you
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}