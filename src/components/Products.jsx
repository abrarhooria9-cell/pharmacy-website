import React from "react";

function Products() {
  const products = [
    {
      id: 1,
      name: "Vitamin C Tablets",
      category: "Vitamins & Supplements",
      price: "Rs. 1,250",
      image: "/images/vitamin-c.jpg",
    },
    {
      id: 2,
      name: "Daily Multivitamin",
      category: "Vitamins & Supplements",
      price: "Rs. 1,850",
      image: "/images/multivitamin.jpg",
    },
    {
      id: 3,
      name: "Gentle Face Cleanser",
      category: "Skincare",
      price: "Rs. 950",
      image: "/images/cleanser.jpg",
    },
    {
      id: 4,
      name: "Digital Thermometer",
      category: "Healthcare",
      price: "Rs. 1,500",
      image: "/images/thermometer.jpg",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#0b0f0e",
        color: "white",
        padding: "80px 7%",
      }}
    >
      <h2 style={{ fontSize: "40px" }}>
        Popular Healthcare Essentials
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#111816",
              border: "1px solid #263832",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                display: "block",
              }}
            />

            <p style={{ color: "#20c997" }}>
              {product.category}
            </p>

            <h3>{product.name}</h3>

            <strong>{product.price}</strong>

            <button
              style={{
                display: "block",
                marginTop: "15px",
                backgroundColor: "#20c997",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              + Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;