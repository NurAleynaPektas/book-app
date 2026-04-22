import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";

export default function Header({ onAuthOpen }) {
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        📚 Bookshelf
      </Link>

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

      <div className={css.right}>
        <div className={css.toggle}></div>

        <button className={css.authBtn} onClick={onAuthOpen}>
          Sign up →
        </button>
      </div>
    </header>
  );
}
