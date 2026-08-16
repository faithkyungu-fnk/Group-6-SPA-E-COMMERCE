import { useState } from "react";
import { Link } from "react-router-dom";

const fallbackImage =
  "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?w=500";

export default function CoffeeList({ coffeeItems }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoffees = coffeeItems.filter((coffee) =>
    coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coffee.origin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coffee.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="coffee-panel">
      <div className="section-heading">
        <div>
          <span className="subtitle">Menu</span>
          <h2>Our Coffee Selection</h2>
        </div>
        <div className="heading-actions">
          <span className="coffee-count">{filteredCoffees.length}</span>
          <Link to="/coffee/new" className="button button-dark">
            Add
          </Link>
        </div>
      </div>

      <form className="coffee-form" onSubmit={(e) => e.preventDefault()}>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search coffee, origin, description…"
          aria-label="Search coffee"
        />
        <button 
          className="button button-dark" 
          disabled={!searchTerm.trim()}
          type="button"
        >
          Search
        </button>
      </form>
      
      <div className="coffee-list">
        {filteredCoffees.length === 0 && (
          <div className="coffee-empty">No coffee yet. Add your first brew.</div>
        )}

        {filteredCoffees.map((coffee) => (
          <article className="coffee-card" key={coffee.id}>
            <img 
              src={coffee.image || fallbackImage} 
              alt={coffee.name}
              onError={(e) => (e.currentTarget.src = fallbackImage)}
            />
            <div className="coffee-copy">
              <h3>{coffee.name}</h3>
              {coffee.origin && <p className="origin">{coffee.origin}</p>}
              <p>{coffee.description}</p>
              <p className="price"><strong>Ksh {coffee.price}</strong></p>
            </div>
            <Link
              to={`/coffee/${coffee.id}`}
              className="button button-dark"
              aria-label={`View details for ${coffee.name}`}
            >
              View
            </Link>
          </article>
        ))}   
      </div>
    </section>
  );
}