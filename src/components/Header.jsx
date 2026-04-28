import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header({ onAuthOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={css.header}>
        <Link to="/" className={css.logo}>
          📚 Bookshelf
        </Link>

        {/* DESKTOP NAV */}
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shopping"
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

          {/* HAMBURGER */}
          <button className={css.menuBtn} onClick={() => setIsMenuOpen(true)}>
            ☰
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      {isMenuOpen && <div className={css.backdrop} onClick={closeMenu}></div>}

      {/* DRAWER MENU */}
      <nav className={`${css.drawer} ${isMenuOpen ? css.open : ""}`}>
        <button className={css.closeBtn} onClick={closeMenu}>
          ×
        </button>

        <NavLink to="/" onClick={closeMenu} className={css.drawerLink}>
          Home
        </NavLink>

        <NavLink to="/shopping" onClick={closeMenu} className={css.drawerLink}>
          Shopping List
        </NavLink>
      </nav>
    </>
  );
}
