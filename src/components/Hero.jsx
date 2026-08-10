import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-tag">
            ✦ Your Health, Our Priority
          </p>

          <h1>
            Better Health Starts
            <span> With Better Care.</span>
          </h1>

          <p className="hero-description">
            Discover trusted medicines, healthcare essentials, and
            wellness products — all in one place, delivered with care
            right to your doorstep.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Shop Medicines →
            </button>

            <button className="secondary-btn">
              Explore Categories
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>10K+</h3>
              <p>Products</p>
            </div>

            <div>
              <h3>5K+</h3>
              <p>Happy Customers</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="glow"></div>

          <div className="medicine-card card-one">
            💊
            <span>Quality Medicines</span>
          </div>

          <div className="medicine-card card-two">
            🩺
            <span>Expert Care</span>
          </div>

          <div className="hero-circle">
            <div className="cross">✚</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;