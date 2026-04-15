import { useState } from "react";
import AuthModal from "./components/AuthModal";
import Header from "./components/Header";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onAuthOpen={() => setIsAuthOpen(true)} />

      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

export default App;
