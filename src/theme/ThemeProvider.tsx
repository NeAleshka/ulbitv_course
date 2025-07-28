import { type PropsWithChildren, useMemo, useState } from "react";
import {
  LOCAL_STORAGE_KEY_THEME,
  ThemeContext,
  Themes,
  type ThemesType,
} from "./ThemeContext.ts";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as ThemesType) || Themes.LIGHT;

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemesType>(defaultTheme);

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
