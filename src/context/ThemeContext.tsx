import { PropsWithChildren, createContext, useEffect, useState } from "react";
import usePrefersColorScheme from "use-prefers-color-scheme";

import { getInitialState } from "./getInitialState";

export type Theme = "dark" | "light";

type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextState);

const ThemeProvider = ({ children }: PropsWithChildren) => {
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

export default ThemeProvider;
