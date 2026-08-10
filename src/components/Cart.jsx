import React from "react";
import "../css/Cart.css";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price.replace(",", "")) * item.quantity,
    0
  );

  return (
    <section className="cart-section" id="cart">
      <div className="cart-container">

        <div className="cart-heading">
          <p>✦ YOUR SHOPPING CART</p>
          <h2>
            Your <span>Cart.</span>
          </h2>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>
              Looks like you haven't added anything to your cart yet.
            </p>
            <a href="#products">
              Explore Products →
            </a>
          </div>
        ) : (
          <div className="cart-content">

            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <p>{item.category}</p>
                    <h3>{item.name}</h3>
                    <strong>
                      Rs. {item.price}
                    </strong>
                  </div>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, -1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>Free</span>
              </div>

              <div className="summary-line"></div>

              <div className="total-row">
                <span>Total</span>
                <strong>
                  Rs. {totalPrice.toLocaleString()}
                </strong>
              </div>

              <button className="checkout-btn">
                Proceed to Checkout →
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Cart;