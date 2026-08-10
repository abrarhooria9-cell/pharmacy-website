import React from "react";
import "../css/Categories.css";

function Categories() {
  const categories = [
    {
      icon: "💊",
      title: "Medicines",
      description: "Trusted medicines for your everyday healthcare needs.",
      count: "250+ Products",
    },
    {
      icon: "🌿",
      title: "Vitamins & Supplements",
      description: "Support your health with quality vitamins and supplements.",
      count: "150+ Products",
    },
    {
      icon: "🧴",
      title: "Skincare",
      description: "Take care of your skin with premium healthcare products.",
      count: "120+ Products",
    },
    {
      icon: "🩺",
      title: "Personal Care",
      description: "Essential personal care products for your daily routine.",
      count: "180+ Products",
    },
  ];

  return (
    <section className="categories-section" id="categories">
      <div className="categories-container">

        <div className="section-heading">
          <p className="section-tag">✦ SHOP BY CATEGORY</p>

          <h2>
            Everything You Need,
            <span> All In One Place.</span>
          </h2>

          <p className="section-description">
            Explore our wide range of healthcare and wellness products
            carefully selected to support your healthy lifestyle.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>

              <div className="category-icon">
                {category.icon}
              </div>

              <div className="category-content">
                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <div className="category-bottom">
                  <span>{category.count}</span>

                  <button>→</button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;