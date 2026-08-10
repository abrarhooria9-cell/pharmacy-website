```jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <span className="product-badge">
          {product.badge}
        </span>

        <button
          className="heart-btn"
          type="button"
        >
          ♡
        </button>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>
          {product.name}
        </h3>

        <div className="rating">
          <span>★★★★★</span>
          <small>
            ({product.reviews})
          </small>
        </div>

        <div className="product-bottom">

          <div className="price">
            <span>
              Rs. {product.price}
            </span>
          </div>

          <button
            className="add-cart"
            type="button"
          >
            + Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
```
