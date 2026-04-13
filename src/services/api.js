const BASE_URL = "https://books-backend.p.goit.global";

// 1. Kategoriler
export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/books/category-list`);
  return res.json();
};

// 2. Top books
export const getTopBooks = async () => {
  const res = await fetch(`${BASE_URL}/books/top-books`);
  return res.json();
};

// 3. Category books
export const getBooksByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/books/category?category=${category}`);
  return res.json();
};

// 4. Book detail
export const getBookById = async (id) => {
  const res = await fetch(`${BASE_URL}/books/${id}`);
  return res.json();
};
