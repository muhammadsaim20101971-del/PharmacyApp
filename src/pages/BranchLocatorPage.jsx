import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./BranchLocatorPage.css";

const BRANCHES = [
  {
    id: 1,
    name: "HealthAnchor - Model Town",
    address: "12-B Model Town Extension",
    city: "Rawalpindi",
    distance: "1.2 km away",
    status: "Open now",
    hours: "8:00 AM - 12:00 AM",
    phone: "051-1234567",
  },
  {
    id: 2,
    name: "HealthAnchor - Satellite Town",
    address: "Chandni Chowk Road",
    city: "Rawalpindi",
    distance: "3.8 km away",
    status: "Open now",
    hours: "9:00 AM - 11:00 PM",
    phone: "051-2345678",
  },
  {
    id: 3,
    name: "HealthAnchor - Cantt",
    address: "The Mall, Rawalpindi Cantt",
    city: "Rawalpindi",
    distance: "6.5 km away",
    status: "Closes 10 PM",
    hours: "9:00 AM - 10:00 PM",
    phone: "051-3456789",
  },
  {
    id: 4,
    name: "HealthAnchor - Bahria Town",
    address: "Bahria Town Phase 4",
    city: "Rawalpindi",
    distance: "9.1 km away",
    status: "Open now",
    hours: "24 hours",
    phone: "051-4567890",
  },
];

export default function BranchLocatorPage() {
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);

  const mapQuery = encodeURIComponent(
    `${selectedBranch.name}, ${selectedBranch.address}, ${selectedBranch.city}`
  );
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <div>
      <Navbar />

      <section className="branch-locator-page">
        <div className="branch-locator-page__inner">
          <div className="branch-locator-page__heading">
            <span className="branch-locator-page__eyebrow">Branch network</span>
            <h1 className="branch-locator-page__title">Find a branch near you</h1>
            <p className="branch-locator-page__subtext">
              Every branch shares stock — so if one is running low, another
              nearby can fulfil your order.
            </p>
          </div>

          <div className="branch-locator-page__layout">
            <div className="branch-locator-page__list">
              {BRANCHES.map((branch) => (
                <button
                  key={branch.id}
                  className={`branch-locator-item ${
                    selectedBranch.id === branch.id ? "branch-locator-item--active" : ""
                  }`}
                  onClick={() => setSelectedBranch(branch)}
                >
                  <div className="branch-locator-item__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
                      <circle cx="12" cy="9.5" r="2.4" />
                    </svg>
                  </div>

                  <div className="branch-locator-item__info">
                    <span className="branch-locator-item__name">{branch.name}</span>
                    <span className="branch-locator-item__address">
                      {branch.address}, {branch.city}
                    </span>

                    <div className="branch-locator-item__meta">
                      <span className="branch-locator-item__distance">
                        {branch.distance}
                      </span>
                      <span className="branch-locator-item__divider" />
                      <span
                        className={`branch-locator-item__status ${
                          branch.status !== "Open now" ? "branch-locator-item__status--closing" : ""
                        }`}
                      >
                        {branch.status}
                      </span>
                    </div>

                    <div className="branch-locator-item__extra">
                      <span>{branch.hours}</span>
                      <span>{branch.phone}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="branch-locator-page__map">
              <iframe
                title="Branch location map"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}