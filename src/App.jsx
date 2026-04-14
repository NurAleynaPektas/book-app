import { useState } from "react";
import AuthModal from "./components/AuthModal";

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px",
        }}
      >
        <button onClick={() => setIsAuthOpen(true)}>Sign up</button>
      </header>

      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

export default App;
