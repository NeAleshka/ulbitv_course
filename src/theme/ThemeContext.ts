import { createContext } from "react";

export const Themes = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ThemesType = (typeof Themes)[keyof typeof Themes];

type ContextType = {
  theme?: ThemesType;
  setTheme?: (newTheme: ThemesType) => void;
};

export const ThemeContext = createContext<ContextType>({});

export const LOCAL_STORAGE_KEY_THEME = "theme";
