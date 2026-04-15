import css from "./Header.module.css";

export default function Header({ onAuthOpen }) {
  return (
    <header className={css.header}>
      <div className={css.logo}>📚 Bookshelf</div>

      <div className={css.right}>
        <div className={css.toggle}></div>

        <button className={css.authBtn} onClick={onAuthOpen}>
          Sign up →
        </button>
      </div>
    </header>
  );
}
