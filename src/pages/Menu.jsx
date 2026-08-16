import CoffeeList from "../components/coffeelist";

function Menu({ coffeeItems }) {
  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-content">
          <span className="menu-label">OUR MENU</span>

          <h1>
            Find Your
            <span> Perfect Coffee</span>
          </h1>

          <p>
            Explore our selection of freshly brewed coffee,
            crafted with quality beans and a whole lot of love.
          </p>
        </div>
      </section>

      <CoffeeList coffeeItems={coffeeItems} />
    </main>
  );
}

export default Menu;
