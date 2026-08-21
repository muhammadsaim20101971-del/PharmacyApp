import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const LINK_GROUPS = [
  {
    title: "Shop",
    links: [
      { label: "Medicines", path: "/catalog" },
      { label: "Health Devices", path: "#" },
      { label: "Subscriptions", path: "/subscriptions" },
      { label: "Gift a Package", path: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", path: "#" },
      { label: "Branch Locator", path: "#" },
      { label: "Careers", path: "#" },
      { label: "Blog", path: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", path: "#" },
      { label: "Track Order", path: "#" },
      { label: "Returns & Exchanges", path: "#" },
      { label: "Contact Us", path: "#" },
    ],
  },
  {
    title: "For Business",
    links: [
      { label: "Retailer Registration", path: "/register" },
      { label: "Bulk Ordering", path: "#" },
      { label: "Partner With Us", path: "#" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.55.45-1 1-1Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.98c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.3 1.55-2.3 3.16V20h-3.37V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.06 2.26 4.06 5.2V20Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">
                <span className="footer__logo-bar footer__logo-bar--v" />
                <span className="footer__logo-bar footer__logo-bar--h" />
              </span>
              <span className="footer__logo-text">
                HealthAnchor
                <span className="footer__logo-sub">Pharmacy</span>
              </span>
            </Link>

            <p className="footer__tagline">
              Medicines, health devices, and pharmacist guidance — backed by
              real branches near you.
            </p>

            <div className="footer__socials">
              {SOCIALS.map((social) => (
                <button
                  type="button"
                  className="footer__social-btn"
                  aria-label={social.label}
                  key={social.label}
                  style={{ background: "none", cursor: "pointer" }}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="footer__links">
            {LINK_GROUPS.map((group) => (
              <div className="footer__link-group" key={group.title}>
                <h4 className="footer__link-title">{group.title}</h4>
                <ul className="footer__link-list">
                  {group.links.map((link) =>
                    link.path === "#" ? (
                      <li key={link.label}>
                        <button
                          type="button"
                          className="footer__link"
                          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                        >
                          {link.label}
                        </button>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link to={link.path} className="footer__link">
                          {link.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} HealthAnchor Pharmacy. All
            rights reserved.
          </p>

          <div className="footer__legal">
            <button
              type="button"
              className="footer__legal-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="footer__legal-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Terms of Service
            </button>
            <button
              type="button"
              className="footer__legal-link"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              Pharmacy License Info
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}