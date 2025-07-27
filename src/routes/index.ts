import { createFileRoute } from "@tanstack/react-router";
import MainPage from "../widgets/Main";

export const Route = createFileRoute("/")({
  component: MainPage,
});
