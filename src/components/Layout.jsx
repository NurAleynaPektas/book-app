import css from "./Layout.module.css";

export default function Layout({ children, sidebar }) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <main className={css.main}>{children}</main>
    </div>
  );
}
