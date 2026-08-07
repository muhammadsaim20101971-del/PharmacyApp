import React from "react";
import "./BlogPreview.css";

const POSTS = [
  {
    category: "Chronic Care",
    title: "5 daily habits that help manage diabetes better",
    excerpt:
      "Small, consistent changes make the biggest difference in long-term blood sugar control.",
    readTime: "4 min read",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12h4l2-5 3 10 2-7h7" />
      </svg>
    ),
  },
  {
    category: "Seasonal Health",
    title: "When a fever needs a doctor, not just paracetamol",
    excerpt:
      "Most fevers resolve on their own — here's how to tell when it's time to seek care.",
    readTime: "3 min read",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v4M6 4l2 3M18 4l-2 3" />
        <circle cx="12" cy="14" r="7" />
        <path d="M12 10.5v4l2.5 2" />
      </svg>
    ),
  },
  {
    category: "Family Care",
    title: "Building a first-aid kit that actually covers your family",
    excerpt:
      "A practical checklist for what belongs at home versus what to keep in a travel bag.",
    readTime: "5 min read",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M12 12v4M10 14h4" />
      </svg>
    ),
  },
];

export default function BlogPreview() {
  return (
    <section className="blog-preview">
      <div className="blog-preview__inner">
        <div className="blog-preview__header">
          <div className="blog-preview__heading">
            <span className="blog-preview__eyebrow">From the blog</span>
            <h2 className="blog-preview__title">Health guidance worth reading</h2>
          </div>

          <button
            type="button"
            className="blog-preview__view-all"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            View all articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        <div className="blog-preview__grid">
          {POSTS.map((post) => (
            <button
              type="button"
              className="blog-card"
              key={post.title}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8E4",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
                padding: 0,
              }}
            >
              <div className="blog-card__thumb">
                <span className="blog-card__thumb-icon">{post.icon}</span>
              </div>

              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <span className="blog-card__meta">{post.readTime}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}