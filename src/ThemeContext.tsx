import { PropsWithChildren, createContext, useState } from "react";
import "./sass/style.scss";

type ThemeContextState = {
  theme: "darkMode" | "lightMode";
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextState);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"lightMode" | "darkMode">("lightMode");

  const toggleTheme = () => {
    theme === "lightMode" ? setTheme("darkMode") : setTheme("lightMode");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
