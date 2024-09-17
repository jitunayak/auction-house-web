import { DemoRequest } from "@/pages/demoRequest";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo-request")({
  component: () => <DemoRequest />,
});
