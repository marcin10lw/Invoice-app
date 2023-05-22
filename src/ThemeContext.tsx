import { PropsWithChildren, createContext, useEffect, useState } from "react";
import "./sass/style.scss";
import usePrefersColorScheme from "use-prefers-color-scheme";

const key = "theme";

type Theme = "darkMode" | "lightMode";

const getInitialState = (initialState: Theme | "no-preferenceMode"): Theme => {
  const localStorageTheme: Theme = JSON.parse(
    localStorage.getItem(key) as string
  );

  if (localStorageTheme === null) {
    if (initialState === "no-preferenceMode") {
      return "darkMode";
    } else {
      return initialState;
    }
  }

  return localStorageTheme;
};

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
    localStorage.setItem(key, JSON.stringify(theme));
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
