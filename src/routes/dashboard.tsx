import DashBoard from "@/pages/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: () => (
    <div>
      <DashBoard />
    </div>
  ),
});
