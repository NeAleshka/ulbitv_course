import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import type { RouterContext } from "../index.tsx";
import "../app/styles/index.scss";
import { useContext } from "react";
import { Navbar } from "widgets/NavBar";
import SideBar from "widgets/SideBar/ui/SideBar.tsx";
import { ThemeContext } from "../app/theme/ThemeContext.ts";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const { auth } = Route.useRouteContext();
    const { theme } = useContext(ThemeContext);

    return (
      <div className={`app ${theme}`}>
        <Navbar auth={auth} />
        <div className={"container"}>
          <SideBar />
          <div className={"page"}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  },
});
