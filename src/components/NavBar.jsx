import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-mark">S</div>
          <div className="logo-name">
            Shop<span>Ease</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={link.name === "Home" ? "active" : ""}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          <button className="nav-icon" aria-label="Search">
            <span>⌕</span>
          </button>

          <a href="/cart" className="cart-link" aria-label="Shopping cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">0</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.path} onClick={closeMenu}>
            {link.name}
          </a>
        ))}

        <a href="/cart" onClick={closeMenu}>
          🛒 Cart
        </a>
      </div>
    </header>
  );
}

export default NavBar;