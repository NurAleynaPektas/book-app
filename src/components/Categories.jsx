import { useEffect, useState } from "react";
import { getCategories } from "../services/api";

export default function Categories({ onSelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <div>
      <p
        style={{ cursor: "pointer", fontWeight: "bold" }}
        onClick={() => onSelect("all")}
      >
        ALL CATEGORIES
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => (
          <li
            key={cat.list_name}
            style={{ cursor: "pointer", marginBottom: "8px" }}
            onClick={() => onSelect(cat.list_name)}
          >
            {cat.list_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
