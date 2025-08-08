import { RouterProvider } from "@tanstack/react-router";
import { router } from "../index.tsx";

export const App = () => {
  const isAuthenticated = false;
  return (
    <RouterProvider router={router} context={{ auth: { isAuthenticated } }} />
  );
};
