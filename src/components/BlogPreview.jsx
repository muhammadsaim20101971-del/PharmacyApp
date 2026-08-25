import React from "react";
import { Link } from "react-router-dom";
import "./BlogPreview.css";

const POSTS = [
  {
    id: "diabetes-habits",
    category: "Chronic Care",
    title: "5 daily habits that help manage diabetes better",
    excerpt:
      "Small, consistent changes make the biggest difference in long-term blood sugar control.",
    readTime: "4 min read",
    image: "https://loremflickr.com/800/500/diabetes,health?lock=101",
  },
  {
    id: "fever-doctor",
    category: "Seasonal Health",
    title: "When a fever needs a doctor, not just paracetamol",
    excerpt:
      "Most fevers resolve on their own — here's how to tell when it's time to seek care.",
    readTime: "3 min read",
    image: "https://loremflickr.com/800/500/thermometer,fever?lock=202",
  },
  {
    id: "first-aid-kit",
    category: "Family Care",
    title: "Building a first-aid kit that actually covers your family",
    excerpt:
      "A practical checklist for what belongs at home versus what to keep in a travel bag.",
    readTime: "5 min read",
    image: "https://loremflickr.com/800/500/firstaidkit,medical?lock=303",
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

          <Link to="/blog" className="blog-preview__view-all">
            View all articles
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="blog-preview__grid">
          {POSTS.map((post) => (
            <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
              <div className="blog-card__thumb">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card__thumb-img"
                  loading="lazy"
                />
              </div>

              <div className="blog-card__body">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <span className="blog-card__meta">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}