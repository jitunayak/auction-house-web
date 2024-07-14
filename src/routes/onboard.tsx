import Onboard from "@/pages/onboarding";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/onboard")({
  component: () => (
    <div className="mt-24 grid justify-center items-center">
      <Onboard />
    </div>
  ),
});
