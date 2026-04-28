import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header({ onAuthOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={css.header}>
      <Link to="/" className={css.logo} onClick={closeMenu}>
        📚 Bookshelf
      </Link>

      <nav className={`${css.nav} ${isMenuOpen ? css.open : ""}`}>
        <NavLink
          to="/"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shopping"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? `${css.link} ${css.active}` : css.link
          }
        >
          Shopping List
        </NavLink>
      </nav>

      <div className={css.actions}>
        <button className={css.authBtn} onClick={onAuthOpen}>
          Sign up →
        </button>

        <button
          type="button"
          className={css.menuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
