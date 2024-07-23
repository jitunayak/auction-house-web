import Bidding from "@/pages/bidding";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bidding/$id")({
  component: () => <Bidding />,
});
