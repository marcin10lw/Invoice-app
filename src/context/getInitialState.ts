import { Theme } from "./ThemeContext";

export const getInitialState = (
  initialState: Theme | "no-preference"
): Theme => {
  const localStorageTheme: Theme | null = JSON.parse(
    localStorage.getItem("theme") as string
  );

  if (localStorageTheme === null) {
    if (initialState === "no-preference") {
      return "light";
    } else {
      return initialState;
    }
  }

  return localStorageTheme;
};
