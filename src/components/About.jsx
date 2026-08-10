import React from "react";
import "../css/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-visual">
          <div className="about-box">
            <div className="about-plus">✚</div>
            <h3>Your Health</h3>
            <p>Our Priority</p>
          </div>

          <div className="about-floating-card">
            <span>✓</span>
            <div>
              <strong>Trusted Care</strong>
              <small>Since 2020</small>
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="about-tag">✦ ABOUT OUR PHARMACY</p>

          <h2>
            Caring For Your Health,
            <span> Every Step Of The Way.</span>
          </h2>

          <p className="about-text">
            At MediCare, we believe that healthcare should be simple,
            accessible, and reliable. Our goal is to make it easier for
            you to find trusted healthcare products and everyday wellness
            essentials from the comfort of your home.
          </p>

          <p className="about-text">
            From essential medicines to vitamins, skincare, and personal
            care products, we are committed to providing a convenient
            shopping experience with care at every step.
          </p>

          <button className="about-btn">
            Learn More About Us →
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;