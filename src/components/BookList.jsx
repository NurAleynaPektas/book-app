import { useEffect, useState } from "react";
import { getTopBooks, getBooksByCategory } from "../services/api";
import BookCard from "../components/BookCard";
import BookModal from "../components/BookModal";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {selectedCategory === "all" ? (
        <div>
          {booksData.map((category) => (
            <div key={category.list_name} style={{ marginBottom: "32px" }}>
              <h3>{category.list_name}</h3>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
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
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
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
