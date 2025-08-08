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
      <Link
        to="/"
        className={styles.main_link}
        activeProps={{ className: styles.active_link }}
      >
        Main
      </Link>
      {!auth?.isAuthenticated && (
        <Link
          to="/about"
          className={styles.about_link}
          activeProps={{ className: styles.active_link }}
        >
          About
        </Link>
      )}
      {!auth?.isAuthenticated && <Link to="/">Login</Link>}
      <button
        type={"button"}
        onClick={handleTheme}
        className={styles.theme_toggle}
      >
        theme
      </button>
    </nav>
  );
};
