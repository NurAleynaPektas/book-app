import css from "./BookCard.module.css";

export default function BookCard({ book, onClick }) {
  return (
    <div className={css.card} onClick={() => onClick(book._id)}>
      <img src={book.book_image} alt={book.title} className={css.image} />
      <h4 className={css.title}>{book.title}</h4>
      <p className={css.author}>{book.author}</p>
    </div>
  );
}
