import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Navbar() {
  const location = useLocation();
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        <span className="brand-icon">🌿</span>
        Paradise Nursery
      </Link>

      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/plants" ? "active" : ""} to="/plants">Plants</Link>
        <Link className={location.pathname === "/cart" ? "active" : ""} to="/cart">
          <span className="cart-link">🛒 Cart <span className="cart-badge">{totalItems}</span></span>
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="eyebrow">Bring nature home</p>
            <h1>Paradise Nursery</h1>
            <p>
              Discover beautiful, healthy houseplants carefully selected to
              bring fresh energy and natural beauty into your space.
            </p>
            <Link className="primary-btn" to="/plants">Get Started</Link>
          </div>
        </div>
      </section>

      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer>
        <p>© {new Date().getFullYear()} Paradise Nursery · Grow something beautiful.</p>
      </footer>
    </div>
  );
}