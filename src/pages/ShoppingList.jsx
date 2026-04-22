import { getShoppingList } from "../utils/storage";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function ShoppingList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getShoppingList());
  }, []);

  if (books.length === 0) {
    return <p>Shopping list boş</p>;
  }

  return (
    <div style={{ padding: "24px" }}>
      <h1>Shopping List</h1>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard key={book._id} book={book} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}
