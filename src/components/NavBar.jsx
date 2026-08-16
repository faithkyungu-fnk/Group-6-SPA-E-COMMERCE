import { useState } from "react";
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Add Coffee", path: "/add-coffee" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-mark">BC</div>
          <div className="logo-name">
            Brew<span>Coffee</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={link.name === "Home" ? "active" : ""}
            >
              {link.name}
            </NavLink>
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
          <NavLink key={link.name} to={link.path} onClick={closeMenu}>
            {link.name}
          </NavLink>
        ))}

        <a href="/cart" onClick={closeMenu}>
          🛒 Cart
        </a>
      </div>
    </header>
  );
}

export default NavBar;