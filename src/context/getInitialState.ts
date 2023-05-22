import { Theme } from "./ThemeContext";

export const getInitialState = (
  initialState: Theme | "no-preferenceMode"
): Theme => {
  const localStorageTheme: Theme | null = JSON.parse(
    localStorage.getItem("theme") as string
  );

  if (localStorageTheme === null) {
    if (initialState === "no-preferenceMode") {
      return "lightMode";
    } else {
      return initialState;
    }
  }

  return localStorageTheme;
};
