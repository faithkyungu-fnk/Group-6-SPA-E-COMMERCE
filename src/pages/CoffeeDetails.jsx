import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CoffeeForm from "../components/coffeeform";

const fallbackImage =
  "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?w=500";

function CoffeeDetails() {
  const { coffeeId } = useParams();
  const navigate = useNavigate();

  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

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

  function handleUpdateCoffee(coffeeData) {
    fetch(`http://localhost:3000/coffees/${coffeeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...coffeeData,
        price: Number(coffeeData.price),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update coffee");
        }

        return response.json();
      })
      .then((updatedCoffee) => {
        setCoffee(updatedCoffee);
        setEditing(false);
      })
      .catch((error) => {
        console.error("Error updating coffee:", error);
      });
  }

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
          {editing ? (
            <>
              <h1>Edit Coffee</h1>

              <CoffeeForm
                initialData={coffee}
                onSubmit={handleUpdateCoffee}
                buttonText="Save Changes"
              />

              <button
                className="button button-ghost"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
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
                  className="button button-dark"
                  onClick={() => setEditing(true)}
                >
                  Edit Coffee
                </button>

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
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default CoffeeDetails;