import { useEffect, useState } from "react";
import css from "./AuthModal.module.css";

export default function AuthModal({ onClose }) {
  const [isSignUp, setIsSignUp] = useState(true);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onClose}>
          ×
        </button>

        <form className={css.form}>
          {isSignUp && (
            <input className={css.input} type="text" placeholder="NAME" />
          )}

          <input className={css.input} type="email" placeholder="EMAIL" />

          <input className={css.input} type="password" placeholder="PASSWORD" />

          <button className={css.submitBtn} type="submit">
            {isSignUp ? "SIGN UP" : "SIGN IN"}
          </button>
        </form>

        <div className={css.switchWrap}>
          <button
            type="button"
            className={`${css.switchBtn} ${isSignUp ? css.active : ""}`}
            onClick={() => setIsSignUp(true)}
          >
            SIGN UP
          </button>

          <button
            type="button"
            className={`${css.switchBtn} ${!isSignUp ? css.active : ""}`}
            onClick={() => setIsSignUp(false)}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}
