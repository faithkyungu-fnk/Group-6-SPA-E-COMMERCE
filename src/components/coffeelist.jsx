import { useState } from "react";
import { Link } from "react-router-dom";
import CoffeeCard from "./coffeecard";
import SearchBar from "./searchbar";

export default function CoffeeList({ coffeeItems }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoffees = coffeeItems.filter(
    (coffee) =>
      coffee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.origin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coffee.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="coffee-panel">
      <div className="section-heading">
        <div>
          <span className="subtitle">MENU</span>
          <h2>Our Coffee Selection</h2>
        </div>

        <div className="heading-actions">
          <span className="coffee-count">{filteredCoffees.length}</span>

          <Link to="/add-coffee" className="button button-dark">
            Add Coffee
          </Link>
        </div>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="coffee-list">
        {filteredCoffees.length === 0 ? (
          <div className="coffee-empty">No coffee found.</div>
        ) : (
          filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))
        )}
      </div>
    </section>
  );
}