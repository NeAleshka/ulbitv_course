import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { RouterContext } from "../index.tsx";
import "../app/styles/index.scss";
import { useContext } from "react";
import { ThemeContext } from "../app/theme/ThemeContext.ts";
import { Navbar } from "../widgets/NavBar";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const { auth } = Route.useRouteContext();
    const { theme } = useContext(ThemeContext);

    return (
      <div className={`app ${theme}`}>
        <Navbar auth={auth} />
        <Outlet />
      </div>
    );
  },
});
