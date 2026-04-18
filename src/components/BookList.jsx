import { useEffect, useState } from "react";
import { getTopBooks, getBooksByCategory } from "../services/api";

export default function BookList({ selectedCategory }) {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  if (selectedCategory === "all") {
    return (
      <div>
        {booksData.map((category) => (
          <div key={category.list_name} style={{ marginBottom: "32px" }}>
            <h3>{category.list_name}</h3>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {category.books.slice(0, 5).map((book) => (
                <div key={book._id} style={{ width: "120px" }}>
                  <img
                    src={book.book_image}
                    alt={book.title}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <p style={{ fontWeight: "700", fontSize: "12px" }}>
                    {book.title}
                  </p>
                  <p style={{ fontSize: "11px", color: "gray" }}>
                    {book.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {booksData.map((book) => (
        <div key={book._id} style={{ width: "120px" }}>
          <img
            src={book.book_image}
            alt={book.title}
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <p style={{ fontWeight: "700", fontSize: "12px" }}>{book.title}</p>
          <p style={{ fontSize: "11px", color: "gray" }}>{book.author}</p>
        </div>
      ))}
    </div>
  );
}
