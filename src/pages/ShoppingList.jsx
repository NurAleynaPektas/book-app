import { useEffect, useState } from "react";
import { getShoppingList, removeFromShoppingList } from "../utils/storage";

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
      <div style={{ padding: "24px" }}>
        <h1>Shopping List</h1>
        <p>There is no book from this shopping list yet.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>Shopping List</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {books.map((book) => (
          <div
            key={book._id}
            style={{
              display: "flex",
              gap: "20px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              alignItems: "flex-start",
            }}
          >
            <img
              src={book.book_image}
              alt={book.title}
              style={{
                width: "100px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />

            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 8px" }}>{book.title}</h3>
              <p style={{ margin: "0 0 8px", color: "#666" }}>{book.author}</p>
              <p style={{ margin: 0 }}>{book.description}</p>
            </div>

            <button
              onClick={() => handleRemove(book._id)}
              style={{
                padding: "10px 16px",
                border: "none",
                borderRadius: "20px",
                backgroundColor: "#4f2ee8",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
