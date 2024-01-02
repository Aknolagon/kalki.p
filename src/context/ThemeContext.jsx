import { createContext, useState, useContext } from "react";
import "../styles/ThemeContext.scss";

export const ThemeContext = createContext();

export function ThemeProvider({ children, }) {
  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
