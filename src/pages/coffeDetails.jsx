import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const fallbackImage =
  "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?w=500";

export default function CoffeeDetails({ coffeeItems, setCoffees }) {const { coffeeId } = useParams();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);

  const coffee = coffeeItems.find((c) => c.id === Number(coffeeId));

  function handleDelete() {
    if (!window.confirm(`Delete "${coffee.name}" from menu?`)) return;
    setBusy(true);
    const remaining = coffeeItems.filter((item) => item.id !== coffee.id);
    setCoffees(remaining);
    navigate(remaining[0] ? `/coffee/${remaining[0].id}` : "/menu");
  }

  if (!coffee) {
    return (
      <div>
        <h2>Coffee not found</h2>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="page-stack">
      <section className="hero-card">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={coffee.image || fallbackImage}
            alt={coffee.name}
            onError={(e) => (e.currentTarget.src = fallbackImage)}
          />
        </div>

        <div className="hero-copy">
          <h1>{coffee.name}</h1>
          <p className="hero-description">{coffee.description}</p>

          <div className="meta-row">
            <div>
              <strong>Ksh {coffee.price}</strong>
              <span>price</span>
            </div>
          </div>

          <div className="action-row">
            <Link className="button button-primary" to={`/coffee/${coffee.id}/edit`}>
              Edit coffee
            </Link>
            <button
              className="button button-ghost danger-text"
              onClick={handleDelete}
              disabled={busy}
            >
              {busy ? "Deleting..." : "Delete coffee"}
            </button>
          </div>

          <Link className="back-link" to="/menu">
           Back to Menu
          </Link>
        </div>
      </section>
    </div>
  );
}