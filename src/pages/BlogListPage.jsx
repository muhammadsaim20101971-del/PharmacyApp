import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BLOG_POSTS from "../data/blogPosts";
import "./BlogListPage.css";

const THUMB_ICONS = {
  "Chronic Care": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 12h4l2-5 3 10 2-7h7" />
    </svg>
  ),
  "Seasonal Health": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 2v4M6 4l2 3M18 4l-2 3" />
      <circle cx="12" cy="14" r="7" />
      <path d="M12 10.5v4l2.5 2" />
    </svg>
  ),
  "Family Care": (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12v4M10 14h4" />
    </svg>
  ),
};

export default function BlogListPage() {
  return (
    <div>
      <Navbar />

      <section className="blog-list-page">
        <div className="blog-list-page__inner">
          <div className="blog-list-page__heading">
            <span className="blog-list-page__eyebrow">HealthAnchor Blog</span>
            <h1 className="blog-list-page__title">Health guidance worth reading</h1>
            <p className="blog-list-page__subtext">
              Practical, no-nonsense articles on chronic care, seasonal
              health, and everyday family wellness.
            </p>
          </div>

          <div className="blog-list-grid">
            {BLOG_POSTS.map((post) => (
              <Link to={`/blog/${post.id}`} className="blog-list-card" key={post.id}>
                <div className="blog-list-card__thumb">
                  <span className="blog-list-card__thumb-icon">
                    {THUMB_ICONS[post.category]}
                  </span>
                </div>

                <div className="blog-list-card__body">
                  <span className="blog-list-card__category">{post.category}</span>
                  <h3 className="blog-list-card__title">{post.title}</h3>
                  <p className="blog-list-card__excerpt">{post.excerpt}</p>
                  <div className="blog-list-card__meta">
                    <span>{post.date}</span>
                    <span className="blog-list-card__dot" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}