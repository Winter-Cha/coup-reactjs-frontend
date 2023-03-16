import { useState, useEffect } from "react";

type Theme = "light" | "dark";

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const initialTheme = localStorage.getItem("theme") as Theme | null;

    if (initialTheme) {
      setTheme(initialTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const body = document.querySelector("body");

    if (body) {
      body.dataset.theme = theme;
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;