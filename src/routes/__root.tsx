import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import type { RouterContext } from "../index.tsx";

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    const { auth } = Route.useRouteContext(); // <-- достаём auth

    return (
      <>
        <nav>
          <Link to="/">Main</Link>
          {auth && <Link to="/about">About</Link>}{" "}
          {!auth && <Link to="/">Login</Link>}
        </nav>
        <Outlet />
      </>
    );
  },
});
