const STORAGE_KEY = "shopping-list";

export const getShoppingList = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveShoppingList = (books) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
};

export const isBookInShoppingList = (bookId) => {
  const books = getShoppingList();
  return books.some((book) => book._id === bookId);
};

export const toggleShoppingList = (book) => {
  const books = getShoppingList();
  const exists = books.some((item) => item._id === book._id);

  if (exists) {
    const updatedBooks = books.filter((item) => item._id !== book._id);
    saveShoppingList(updatedBooks);
    return false;
  } else {
    const updatedBooks = [...books, book];
    saveShoppingList(updatedBooks);
    return true;
  }
};
