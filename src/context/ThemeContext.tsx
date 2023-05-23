import { PropsWithChildren, createContext, useEffect, useState } from "react";

import { getInitialState } from "./getInitialState";
import usePrefersColorScheme from "use-prefers-color-scheme";

export type Theme = "dark" | "light";

type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextState);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const prefersColorScheme = usePrefersColorScheme();
  const [theme, setTheme] = useState<Theme>(
    getInitialState(`${prefersColorScheme}`)
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`rootContainer ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
