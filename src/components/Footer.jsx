import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span>✚</span> MediCare
          </div>

          <p>
            Your trusted healthcare partner, providing quality products
            and a convenient pharmacy experience for you and your family.
          </p>

          <div className="social-icons">
            <a href="#facebook">f</a>
            <a href="#instagram">◎</a>
            <a href="#twitter">𝕏</a>
            <a href="#linkedin">in</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#categories">Categories</a>
          <a href="#products">Medicines</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Categories */}
        <div className="footer-column">
          <h3>Categories</h3>

          <a href="#medicines">Medicines</a>
          <a href="#vitamins">Vitamins</a>
          <a href="#skincare">Skincare</a>
          <a href="#personal-care">Personal Care</a>
          <a href="#healthcare">Healthcare</a>
        </div>

        {/* Contact */}
        <div className="footer-column contact-column">
          <h3>Contact Us</h3>

          <p>📍 Your City, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ support@medicare.com</p>
          <p>🕐 Mon - Sun | 24/7 Support</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 MediCare. All Rights Reserved.
        </p>

        <div>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;