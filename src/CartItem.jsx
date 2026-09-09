import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, removeItem } from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const checkout = () => {
    window.alert("Coming Soon! Checkout will be available soon.");
  };

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="page-heading">
          <h1>Your Shopping Cart</h1>
          <p>Your cart is currently empty.</p>
        </div>
        <div className="cart-empty">
          <div style={{ fontSize: "3rem" }}>🪴</div>
          <h2>Nothing here yet</h2>
          <p>Add a beautiful plant and it will appear here.</p>
          <Link className="primary-btn" to="/plants">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="page-heading">
        <p className="eyebrow" style={{ color: "#4f7e59" }}>Your selections</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} item{totalItems !== 1 ? "s" : ""} in your cart</p>
      </div>

      <section aria-label="Shopping cart items">
        {items.map((item) => (
          <article className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <div className="unit-price">Unit price: ${item.price.toFixed(2)}</div>
            </div>

            <div className="quantity-controls" aria-label={`Quantity controls for ${item.name}`}>
              <button
                className="quantity-btn"
                aria-label={`Decrease ${item.name} quantity`}
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                −
              </button>
              <strong>{item.quantity}</strong>
              <button
                className="quantity-btn"
                aria-label={`Increase ${item.name} quantity`}
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>

            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>

            <button
              className="danger-btn"
              onClick={() => dispatch(removeItem(item.id))}
              aria-label={`Remove ${item.name}`}
            >
              Delete
            </button>
          </article>
        ))}
      </section>

      <section className="cart-summary">
        <div>
          <div className="total-label">Total cart amount</div>
          <div className="total-amount">${totalAmount.toFixed(2)}</div>
        </div>

        <div className="cart-actions">
          <Link className="secondary-btn" to="/plants">
            Continue Shopping
          </Link>
          <button className="checkout-btn" onClick={checkout}>
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
}