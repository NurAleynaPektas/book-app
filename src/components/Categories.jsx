import { useEffect, useState } from "react";
import { getCategories } from "../services/api";
import css from "./Categories.module.css";

export default function Categories({ onSelect }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleSelect = (value) => {
    setActive(value);
    onSelect(value);
  };

  return (
    <div className={css.container}>
      <p
        className={`${css.all} ${active === "all" ? css.active : ""}`}
        onClick={() => handleSelect("all")}
      >
        ALL CATEGORIES
      </p>

      <ul className={css.list}>
        {categories.map((cat) => (
          <li
            key={cat.list_name}
            className={`${css.item} ${
              active === cat.list_name ? css.active : ""
            }`}
            onClick={() => handleSelect(cat.list_name)}
          >
            {cat.list_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
