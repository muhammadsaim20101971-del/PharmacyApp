import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BLOG_POSTS from "../data/blogPosts";
import "./BlogArticlePage.css";

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
            <img
              src={post.image}
              alt={post.title}
              className="blog-article__hero-img"
              loading="lazy"
            />
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