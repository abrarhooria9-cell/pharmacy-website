import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">✚</span>
        Medi<span>Care</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#products">Medicines</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button className="search-btn">⌕</button>
        <button className="cart-btn">🛒</button>
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;