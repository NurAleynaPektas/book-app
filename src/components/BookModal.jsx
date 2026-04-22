import { useEffect, useState } from "react";
import { getBookById } from "../services/api";
import { isBookInShoppingList, toggleShoppingList } from "../utils/storage";
import css from "./BookModal.module.css";

export default function BookModal({ bookId, onClose }) {
  const [book, setBook] = useState(null);
  const [isInList, setIsInList] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await getBookById(bookId);
      setBook(data);
      setIsInList(isBookInShoppingList(data._id));
    };

    fetchBook();
  }, [bookId]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleToggleShoppingList = () => {
    const updatedStatus = toggleShoppingList(book);
    setIsInList(updatedStatus);
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div className={css.backdrop} onClick={handleBackdrop}>
      <div className={css.modal}>
        <button className={css.close} onClick={onClose}>
          ×
        </button>

        <img src={book.book_image} alt={book.title} className={css.image} />

        <h2>{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.description}</p>

        <button className={css.actionBtn} onClick={handleToggleShoppingList}>
          {isInList ? "Remove from shopping list" : "Add to shopping list"}
        </button>
      </div>
    </div>
  );
}
