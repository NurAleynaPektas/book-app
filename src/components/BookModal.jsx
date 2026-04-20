import { useEffect, useState } from "react";
import { getBookById } from "../services/api";
import css from "./BookModal.module.css";

export default function BookModal({ bookId, onClose }) {
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(bookId).then(setBook);
  }, [bookId]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className={css.backdrop} onClick={handleBackdrop}>
      <div className={css.modal}>
        <button className={css.close} onClick={onClose}>
          ×
        </button>

        <img src={book.book_image} alt={book.title} />
        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}
