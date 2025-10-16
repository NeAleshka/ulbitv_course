import { createFileRoute } from "@tanstack/react-router";
import MainPage from "../pages/Main.tsx";

export const Route = createFileRoute("/")({
  component: MainPage,
});
