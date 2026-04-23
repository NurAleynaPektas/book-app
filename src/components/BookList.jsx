import { useEffect, useState } from "react";
import { getTopBooks, getBooksByCategory } from "../services/api";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";
import css from "./BookList.module.css";

export default function BookList({ selectedCategory }) {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError("");

      try {
        if (selectedCategory === "all") {
          const data = await getTopBooks();
          setBooksData(data);
        } else {
          const data = await getBooksByCategory(selectedCategory);
          setBooksData(data);
        }
      } catch (err) {
        setError("Kitaplar alınamadı");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [selectedCategory]);

  if (loading) return <p className={css.message}>Loading...</p>;
  if (error) return <p className={css.message}>{error}</p>;

  return (
    <>
      {selectedCategory === "all" ? (
        <div className={css.wrapper}>
          {booksData.map((category) => (
            <div key={category.list_name} className={css.categorySection}>
              <h3 className={css.categoryTitle}>{category.list_name}</h3>

              <div className={css.booksGrid}>
                {category.books.slice(0, 5).map((book) => (
                  <BookCard
                    key={book._id}
                    book={book}
                    onClick={setSelectedBook}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={css.booksGrid}>
          {booksData.map((book) => (
            <BookCard key={book._id} book={book} onClick={setSelectedBook} />
          ))}
        </div>
      )}

      {selectedBook && (
        <BookModal
          bookId={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </>
  );
}
