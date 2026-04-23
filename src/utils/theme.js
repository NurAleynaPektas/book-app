const THEME_KEY = "theme";

export const getTheme = () => {
  return localStorage.getItem(THEME_KEY) || "light";
};

export const setTheme = (theme) => {
  localStorage.setItem(THEME_KEY, theme);
};
