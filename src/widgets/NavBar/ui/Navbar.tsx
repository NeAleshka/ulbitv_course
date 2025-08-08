import { Link } from "@tanstack/react-router";
import {
  LOCAL_STORAGE_KEY_THEME,
  ThemeContext,
  Themes,
} from "app/theme/ThemeContext.ts";
import { useContext } from "react";
import type { RouterContext } from "src/index.tsx";
import styles from "./Navbar.module.scss";

export const Navbar = ({ auth }: RouterContext) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    const newTheme = theme === Themes.LIGHT ? "dark" : "light";
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme);
    setTheme?.(newTheme);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">Main</Link>
      {!auth?.isAuthenticated && <Link to="/about">About</Link>}
      {!auth?.isAuthenticated && <Link to="/">Login</Link>}
      <button type={"button"} onClick={handleTheme}>
        theme
      </button>
    </nav>
  );
};
