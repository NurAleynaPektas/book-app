import { useState } from "react";
import AuthModal from "./components/AuthModal";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Categories from "./components/Categories";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div>
      <Header onAuthOpen={() => setIsAuthOpen(true)} />

      <Layout sidebar={<Categories onSelect={setSelectedCategory} />}>
        <h1>
          {selectedCategory === "all" ? "Best Sellers Books" : selectedCategory}
        </h1>

        <p>Buraya kitaplar gelecek...</p>
      </Layout>

      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

export default App;
