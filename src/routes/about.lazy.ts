import { createLazyFileRoute } from "@tanstack/react-router";
import AboutPage from "../widgets/About";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});
