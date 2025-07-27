import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  notFoundComponent: () => <div>Неверный url</div>,
  component: () => (
    <>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  ),
});
