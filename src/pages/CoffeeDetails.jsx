import { Link, useNavigate, useParams } from "react-router-dom";

const fallbackImage =
  "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?w=500";

function CoffeeDetails({ coffeeItems, setCoffees }) {
  const { coffeeId } = useParams();
  const navigate = useNavigate();

  const coffee = coffeeItems.find(
    (item) => item.id === Number(coffeeId)
  );

  if (!coffee) {
    return (
      <main className="page-stack">
        <h1>Coffee not found</h1>
        <Link to="/menu">Back to Menu</Link>
      </main>
    );
  }

  function handleDelete() {
    const confirmed = window.confirm(
      `Delete ${coffee.name} from the menu?`
    );

    if (!confirmed) return;

    const remaining = coffeeItems.filter(
      (item) => item.id !== coffee.id
    );

    setCoffees(remaining);
    navigate("/menu");
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
          <p className="subtitle">COFFEE DETAILS</p>

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

            <Link
              className="button button-dark"
              to="/menu"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CoffeeDetails;
