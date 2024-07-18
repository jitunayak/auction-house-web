import DashBoardNavbar from "@/components/DashBoardNavbar";
import { useAuthSlice } from "@/hooks/useAuthSlice";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import AuctionFilter from "./AuctionFilter";
import Auctions from "./Auctions";

function DashBoard() {
  const navigate = useNavigate();
  const { user } = useAuthSlice();

  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate({ to: "/" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isAuthenticated]);

  return (
    <div>
      <DashBoardNavbar />
      <AuctionFilter />
      <Auctions />
    </div>
  );
}

export default DashBoard;
