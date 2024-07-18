import Auctions from "@/pages/auctions";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auctions/$id")({
  component: () => <Auctions />,
});
