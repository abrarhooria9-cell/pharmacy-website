import React from "react";
import "../css/Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">

        <div className="newsletter-content">
          <p className="newsletter-tag">✦ STAY HEALTHY, STAY INFORMED</p>

          <h2>
            Get Healthcare Tips &
            <span> Exclusive Updates.</span>
          </h2>

          <p>
            Subscribe to our newsletter and receive helpful health tips,
            wellness updates, and special offers directly in your inbox.
          </p>
        </div>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe →
          </button>
        </form>

      </div>
    </section>
  );
}

export default Newsletter;