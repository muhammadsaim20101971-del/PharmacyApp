import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BLOG_POSTS from "../data/blogPosts";
import "./BlogArticlePage.css";

const THUMB_ICONS = {
  "Chronic Care": (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 12h4l2-5 3 10 2-7h7" />
    </svg>
  ),
  "Seasonal Health": (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2v4M6 4l2 3M18 4l-2 3" />
      <circle cx="12" cy="14" r="7" />
      <path d="M12 10.5v4l2.5 2" />
    </svg>
  ),
  "Family Care": (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12v4M10 14h4" />
    </svg>
  ),
};

export default function BlogArticlePage() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((item) => item.id === id) || BLOG_POSTS[0];

  const otherPosts = BLOG_POSTS.filter((item) => item.id !== post.id).slice(0, 2);

  return (
    <div>
      <Navbar />

      <article className="blog-article">
        <div className="blog-article__inner">
          <div className="blog-article__breadcrumb">
            <Link to="/blog">Blog</Link>
            <span>/</span>
            <span className="blog-article__breadcrumb-current">{post.title}</span>
          </div>

          <span className="blog-article__category">{post.category}</span>
          <h1 className="blog-article__title">{post.title}</h1>

          <div className="blog-article__meta">
            <span>{post.date}</span>
            <span className="blog-article__dot" />
            <span>{post.readTime}</span>
          </div>

          <div className="blog-article__hero">
            <div className="blog-article__hero-circle" />
            <span className="blog-article__hero-icon">
              {THUMB_ICONS[post.category]}
            </span>
          </div>

          <div className="blog-article__content">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="blog-article__cta">
            <h3>Have a question about your medication?</h3>
            <p>Chat with a licensed pharmacist for free, right now.</p>
            <Link to="/consultation" className="blog-article__cta-btn">
              Talk to a pharmacist
            </Link>
          </div>

          {otherPosts.length > 0 && (
            <div className="blog-article__more">
              <h3 className="blog-article__more-title">More from the blog</h3>
              <div className="blog-article__more-grid">
                {otherPosts.map((item) => (
                  <Link to={`/blog/${item.id}`} className="blog-article__more-card" key={item.id}>
                    <span className="blog-article__more-category">{item.category}</span>
                    <span className="blog-article__more-post-title">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}