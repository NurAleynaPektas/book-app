import css from "./BookCard.module.css";

export default function BookCard({ book }) {
  return (
    <div className={css.card}>
      <img src={book.book_image} alt={book.title} className={css.image} />

      <h4 className={css.title}>{book.title}</h4>
      <p className={css.author}>{book.author}</p>
    </div>
  );
}
