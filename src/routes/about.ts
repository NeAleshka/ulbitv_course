import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../widgets/About";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
