<<<<<<< HEAD
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const fallbackImage =
  "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?w=500";

export default function CoffeeDetails({ coffeeItems, setCoffees }) {
  const { coffeeId } = useParams();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);

  const coffee = coffeeItems.find(
    (item) => item.id === Number(coffeeId)
  );

  function handleDelete() {
    if (!coffee) return;

    const confirmed = window.confirm(
      `Delete "${coffee.name}" from menu?`
    );

    if (!confirmed) return;

    setBusy(true);

    const remaining = coffeeItems.filter(
      (item) => item.id !== coffee.id
    );

    setCoffees(remaining);

    navigate(
      remaining.length > 0
        ? `/coffee/${remaining[0].id}`
        : "/menu"
    );
  }

  if (!coffee) {
    return (
      <div className="page-stack">
        <h2>Coffee not found</h2>

        <Link className="back-link" to="/menu">
          Back to Menu
        </Link>
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
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />
        </div>

        <div className="hero-copy">
          <h1>{coffee.name}</h1>

          <p className="hero-description">
            {coffee.description}
          </p>

          <div className="meta-row">
            <div>
              <strong>Ksh {coffee.price}</strong>
              <span>price</span>
            </div>
          </div>

          <div className="action-row">
            <Link
              className="button button-primary"
              to={`/coffee/${coffee.id}/edit`}
            >
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
=======
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const fallbackImage =
  "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?w=500";

function CoffeeDetails() {
  const { coffeeId } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/coffees/${coffeeId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Coffee not found");
        }

        return response.json();
      })
      .then((data) => {
        setCoffee(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [coffeeId]);

  function handleDelete() {
    fetch(`http://localhost:3000/coffees/${coffeeId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete coffee");
        }

        navigate("/menu");
      })
      .catch((error) => {
        console.error("Error deleting coffee:", error);
      });
  }

  if (loading) {
    return <p>Loading coffee...</p>;
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
    <main className="page-stack">
      <section className="hero-card">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={coffee.image || fallbackImage}
            alt={coffee.name}
            onError={(event) => {
              event.currentTarget.src = fallbackImage;
            }}
          />
        </div>

        <div className="hero-copy">
          <h1>{coffee.name}</h1>

          <p className="hero-description">
            {coffee.description}
          </p>

          <div className="meta-row">
            <div>
              <strong>Ksh {coffee.price}</strong>
              <span>Price</span>
            </div>
          </div>

          <div className="action-row">
            <button
              className="button button-ghost danger-text"
              onClick={handleDelete}
            >
              Delete Coffee
            </button>
          </div>

          <Link className="back-link" to="/menu">
            Back to Menu
          </Link>
        </div>
      </section>
    </main>
  );
}

export default CoffeeDetails;
>>>>>>> origin/main
