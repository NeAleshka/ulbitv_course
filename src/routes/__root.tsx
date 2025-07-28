import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import type { RouterContext } from "../index.tsx";
import "../styles/index.scss";
import { useContext } from "react";
import {
  LOCAL_STORAGE_KEY_THEME,
  ThemeContext,
  Themes,
} from "../theme/ThemeContext.ts";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const { auth } = Route.useRouteContext();
    const { theme, setTheme } = useContext(ThemeContext);

    const handleTheme = () => {
      const newTheme = theme === Themes.LIGHT ? "dark" : "light";
      localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme);
      setTheme?.(newTheme);
    };

    return (
      <div className={`app ${theme}`}>
        <nav>
          <Link to="/">Main</Link>
          {auth && <Link to="/about">About</Link>}{" "}
          {!auth && <Link to="/">Login</Link>}
          <button type={"button"} onClick={handleTheme}>
            theme
          </button>
        </nav>
        <Outlet />
      </div>
    );
  },
});
