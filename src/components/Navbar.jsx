import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Catalog", path: "/catalog" },
  { label: "Consultation", path: "/" },
  { label: "Blog", path: "/" },
  { label: "About", path: "/" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-icon">
            <span className="navbar__brand-icon-bar navbar__brand-icon-bar--v" />
            <span className="navbar__brand-icon-bar navbar__brand-icon-bar--h" />
          </span>
          <span className="navbar__brand-text">
            HealthAnchor
            <span className="navbar__brand-sub">Pharmacy</span>
          </span>
        </Link>

        <nav
          className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.path !== "#" && location.pathname === link.path;
            const isPlaceholder = link.path === "#";

            if (isPlaceholder) {
              return (
                <a key={link.label} href="#" className="navbar__link">
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`navbar__link ${isActive ? "navbar__link--active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbar__actions">
          <div className="navbar__icon-group">
            <button className="navbar__icon-btn" aria-label="Search">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <span className="navbar__icon-divider" />

            <button className="navbar__icon-btn" aria-label="Wishlist">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
            </button>

            <span className="navbar__icon-divider" />

            <button className="navbar__icon-btn" aria-label="Cart">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              <span className="navbar__cart-count">2</span>
            </button>
          </div>

          <a href="#" className="navbar__login-btn">
            Log in
          </a>
        </div>

        <button
          className={`navbar__hamburger ${
            isMenuOpen ? "navbar__hamburger--open" : ""
          }`}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}