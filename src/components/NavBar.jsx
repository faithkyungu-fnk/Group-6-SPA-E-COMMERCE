import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-mark">B</div>
          <div className="logo-name">Brew Coffee</div>
        </Link>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path}>
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={closeMenu}>
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default NavBar;