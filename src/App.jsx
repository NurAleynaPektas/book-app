import { useEffect, useState } from "react";
import AuthModal from "./components/AuthModal";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingList from "./pages/ShoppingList";
import { getTheme, setTheme } from "./utils/theme";
function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [theme, setThemeState] = useState(getTheme());

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    setTheme(theme);
  }, [theme]);

  

  return (
    <div>
      <Header
        onAuthOpen={() => setIsAuthOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />

        <Route path="/shopping" element={<ShoppingList />} />
      </Routes>

      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

export default App;
