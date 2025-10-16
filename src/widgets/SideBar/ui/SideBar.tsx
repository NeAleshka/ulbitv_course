import {
  LOCAL_STORAGE_KEY_THEME,
  ThemeContext,
  type ThemeContextType,
  Themes,
} from "app/theme/ThemeContext.ts";
import cn from "classnames";
import ThemeToggle from "public/static-assets/theme-toggle.svg";
import { useContext, useState } from "react";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { setTheme } = useContext<ThemeContextType>(ThemeContext);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  const themeToggle = () => {
    const newTheme =
      localStorage.getItem(LOCAL_STORAGE_KEY_THEME) === Themes.LIGHT
        ? Themes.DARK
        : Themes.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme);
  };

  return (
    <div className={cn(styles.sideBar, { [styles.collapsed]: collapsed })}>
      <ThemeToggle onClick={themeToggle} className={styles.theme_toggle} />
      <button type={"button"} onClick={onToggle}>
        toggle
      </button>
    </div>
  );
};

export default SideBar;
