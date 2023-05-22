import { PropsWithChildren, createContext, useEffect, useState } from "react";
import usePrefersColorScheme from "use-prefers-color-scheme";
import { getInitialState } from "./getInitialState";

export type Theme = "darkMode" | "lightMode";

type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextState);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const prefersColorScheme = usePrefersColorScheme();
  const [theme, setTheme] = useState<Theme>(
    getInitialState(`${prefersColorScheme}Mode`)
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    theme === "lightMode" ? setTheme("darkMode") : setTheme("lightMode");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
