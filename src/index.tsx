import { createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App.tsx";
import ThemeProvider from "./app/theme/ThemeProvider.tsx";
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

export const router = createRouter({
  routeTree,
});

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
