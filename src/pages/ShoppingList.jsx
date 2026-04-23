import { useEffect, useState } from "react";
import { getShoppingList, removeFromShoppingList } from "../utils/storage";
import css from "./ShoppingList.module.css";

export default function ShoppingList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getShoppingList());
  }, []);

  const handleRemove = (bookId) => {
    const updatedBooks = removeFromShoppingList(bookId);
    setBooks(updatedBooks);
  };

  if (books.length === 0) {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Shopping List</h1>
        <p className={css.empty}>
          There is no book from this shopping list yet.
        </p>
      </div>
    );
  }

  return (
    <div className={css.container}>
      <h1 className={css.title}>Shopping List</h1>

      <div className={css.list}>
        {books.map((book) => (
          <div key={book._id} className={css.card}>
            <img src={book.book_image} alt={book.title} className={css.image} />

            <div className={css.info}>
              <h3 className={css.bookTitle}>{book.title}</h3>
              <p className={css.author}>{book.author}</p>
              <p className={css.description}>{book.description}</p>
            </div>

            <button
              onClick={() => handleRemove(book._id)}
              className={css.removeBtn}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
