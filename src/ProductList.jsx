import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    name: "Low Light Favorites",
    plants: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
        description: "Hardy upright foliage that thrives with little attention."
      },
      {
        id: "zz-plant",
        name: "ZZ Plant",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1632207691143-643e2c0f5f48?auto=format&fit=crop&w=700&q=80",
        description: "Glossy green leaves and excellent low-light tolerance."
      },
      {
        id: "cast-iron",
        name: "Cast Iron Plant",
        price: 27.5,
        image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=700&q=80",
        description: "A resilient leafy plant for shaded rooms."
      },
      {
        id: "peace-lily",
        name: "Peace Lily",
        price: 22.0,
        image: "https://images.unsplash.com/photo-1593482892290-f54927ae2a84?auto=format&fit=crop&w=700&q=80",
        description: "Elegant leaves with beautiful white blooms."
      },
      {
        id: "parlor-palm",
        name: "Parlor Palm",
        price: 31.0,
        image: "https://images.unsplash.com/photo-1597055181300-2f1c7b9a2b1a?auto=format&fit=crop&w=700&q=80",
        description: "A classic compact palm for soft indoor greenery."
      },
      {
        id: "chinese-evergreen",
        name: "Chinese Evergreen",
        price: 26.75,
        image: "https://images.unsplash.com/photo-1614594576114-54c0f2b2f5f1?auto=format&fit=crop&w=700&q=80",
        description: "Patterned foliage that brightens darker corners."
      }
    ]
  },
  {
    name: "Pet-Friendly Picks",
    plants: [
      {
        id: "spider-plant",
        name: "Spider Plant",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80",
        description: "Easy-growing striped leaves with playful plantlets."
      },
      {
        id: "boston-fern",
        name: "Boston Fern",
        price: 21.5,
        image: "https://images.unsplash.com/photo-1614594576114-54c0f2b2f5f1?auto=format&fit=crop&w=700&q=80",
        description: "Lush, feathery fronds that love humidity."
      },
      {
        id: "calathea",
        name: "Calathea",
        price: 34.0,
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80",
        description: "Striking patterned leaves with a tropical feel."
      },
      {
        id: "prayer-plant",
        name: "Prayer Plant",
        price: 28.0,
        image: "https://images.unsplash.com/photo-1597055181300-2f1c7b9a2b1a?auto=format&fit=crop&w=700&q=80",
        description: "Colorful foliage that folds upward in the evening."
      },
      {
        id: "african-violet",
        name: "African Violet",
        price: 19.75,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80",
        description: "Small flowering beauty perfect for a windowsill."
      },
      {
        id: "peperomia",
        name: "Peperomia",
        price: 23.5,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80",
        description: "Compact, textured foliage for desks and shelves."
      }
    ]
  },
  {
    name: "Statement Tropicals",
    plants: [
      {
        id: "monstera",
        name: "Monstera Deliciosa",
        price: 42.0,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80",
        description: "Iconic split leaves that create an instant jungle vibe."
      },
      {
        id: "bird-of-paradise",
        name: "Bird of Paradise",
        price: 54.99,
        image: "https://images.unsplash.com/photo-1597055181300-2f1c7b9a2b1a?auto=format&fit=crop&w=700&q=80",
        description: "Large tropical leaves for a bold focal point."
      },
      {
        id: "fiddle-leaf",
        name: "Fiddle Leaf Fig",
        price: 49.5,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80",
        description: "Sculptural fiddle-shaped leaves for bright rooms."
      },
      {
        id: "rubber-plant",
        name: "Rubber Plant",
        price: 36.0,
        image: "https://images.unsplash.com/photo-1600411520197-2f0f9b9a2b1a?auto=format&fit=crop&w=700&q=80",
        description: "Bold glossy leaves and an elegant upright habit."
      },
      {
        id: "alocasia",
        name: "Alocasia",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80",
        description: "Dramatic arrow-shaped leaves with tropical character."
      },
      {
        id: "pothos",
        name: "Golden Pothos",
        price: 20.0,
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=700&q=80",
        description: "Trailing vines with cheerful golden variegation."
      }
    ]
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="page">
      <header className="page-heading">
        <p className="eyebrow" style={{ color: "#4f7e59" }}>Shop our collection</p>
        <h1>Find your perfect plant</h1>
        <p>{totalItems} item{totalItems !== 1 ? "s" : ""} currently in your cart</p>
      </header>

      {plantCategories.map((category) => (
        <section className="category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => (
              <article className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} loading="lazy" />
                <div className="product-info">
                  <h3>{plant.name}</h3>
                  <p className="product-description">{plant.description}</p>
                  <div className="product-bottom">
                    <span className="price">${plant.price.toFixed(2)}</span>
                    <button
                      className="add-btn"
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}