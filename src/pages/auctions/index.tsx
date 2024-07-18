import DashBoardNavbar from "@/components/DashBoardNavbar";
import AuctionDetailPage from "./AuctionDetailPage";
import Suggestions from "./Suggestions";

function index() {
  return (
    <>
      <DashBoardNavbar />
      <AuctionDetailPage />;
      <Suggestions />
    </>
  );
}

export default index;
