import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme ? storedTheme === "dark" : false;
    }
    return false;
  });

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme) {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const toggleTheme = theme ? "dark" : "light";
  const data = [toggleTheme, handleTheme];

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
