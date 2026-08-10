import React from "react";
import "../css/WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        <div className="why-heading">
          <p className="section-tag">✦ WHY CHOOSE US</p>

          <h2>
            Your Health,
            <span> Our Priority.</span>
          </h2>

          <p className="why-description">
            We make healthcare simple, reliable, and accessible.
            Get quality healthcare products delivered right to your door.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🛡️</div>
            <h3>Trusted Products</h3>
            <p>
              Carefully selected healthcare products from trusted sources.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your essential healthcare products delivered quickly.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">💚</div>
            <h3>Expert Care</h3>
            <p>
              We are committed to helping you make better healthcare choices.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔒</div>
            <h3>Safe & Secure</h3>
            <p>
              Your privacy and shopping experience are always our priority.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;