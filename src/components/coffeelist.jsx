import { useState } from "react";
import { link } from "react-router-dom";

export default function CoffeeList({ coffeeItems }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoffees = coffeeItems.filter(
    (coffee) =>
      coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.origin?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="coffee-panel">
      <div className="section-heading">
        <h2>Our Menu</h2>
        <span className="coffee-count">{filteredCoffees.length} items</span>
      </div>

      <form className="coffee-form" onSubmit={(e) => e.preventDefault()}>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Search coffee..."
          aria-label="Search coffee"
        />
        <button className="button button-dark" disabled={!searchTerm.trim()}>Search</button>
      </form>
      <div className="coffee-list">
        {filteredCoffees.length === 0 && (
          <div className="coffee-empty">No coffee found. Try searching again.</div>
        )}
        
      {filteredCoffees.map((coffee) => (
          <article className="coffee-card" key={coffee.id}>
            <img src={coffee.image} alt={coffee.name} />
            <div>
              <h3>{coffee.name}</h3>
              <p>Origin: {coffee.origin}</p>
              <p>Ksh {coffee.price}</p>
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