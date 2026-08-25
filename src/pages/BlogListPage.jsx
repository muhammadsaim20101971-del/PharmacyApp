import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BLOG_POSTS from "../data/blogPosts";
import "./BlogListPage.css";

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
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-list-card__thumb-img"
                    loading="lazy"
                  />
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