import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./app/theme/ThemeProvider";
import { routeTree } from "./routeTree.gen";

// 1. Определите тип контекста
export type RouterContext = {
  auth?: {
    isAuthenticated: boolean;
  };
};

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
});
//test zed 2
const App = () => {
  const isAuthenticated = false;
  return (
    <RouterProvider router={router} context={{ auth: { isAuthenticated } }} />
  );
};

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
