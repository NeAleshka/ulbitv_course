import { createLazyFileRoute } from "@tanstack/react-router";
import AboutPage from "../pages/About.tsx";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});
