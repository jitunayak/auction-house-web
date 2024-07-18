import { Button } from "@/components/ui/button";
import { IAuction } from "@/types";
import { useParams } from "@tanstack/react-router";
import {
  BookmarkIcon,
  CalendarIcon,
  GavelIcon,
  LocateIcon,
  MapPinIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

function AuctionDetailPage() {
  const { id } = useParams({ from: "/auctions/$id" });

  const [auction, setAuction] = useState<IAuction>();

  useEffect(() => {
    fetch("/api/auctions/" + id)
      .then((res) => res.json())
      .then((auction) => setAuction(auction));
  });

  if (!auction) return <div>Loading...</div>;
  return (
    <div className="p-2 md:p-10 mt-14 mx-2 md:mx-16">
      <h1 className="text-3xl font-semibold">
        {auction.name},{auction.location}
      </h1>
      <div className="py-2">{auction.description}</div>
      <div className="grid grid-cols-1  md:grid-cols-2 space-y-2 md:space-x-10">
        <div>
          <img src={auction.image[0]} className="w-[800px] rounded" />
          <div>{auction.type}</div>
          <div>{auction.status}</div>
        </div>

        <div>
          <p className="text-zinc-600 text-xl pb-4 font-semibold">
            Bidding Price &#8377;
            {Number(auction.currentPrice).toLocaleString()}
          </p>
          <div className="border bg-muted rounded p-2 text-sm">
            To be auctioned in 40 days Registration will close at 2:00 PM, (1)
            working days before auction date
          </div>
          <div className="py-2 flex space-x-4 inset-0">
            <span className="pt-1">
              <MapPinIcon className="w-5 h-5 " />
            </span>
            <span>
              <span>
                <p className="text-zinc-400 font-light">Location</p>
                <p className="text-sm font-semibold">{auction.location}</p>
              </span>
            </span>
          </div>

          <div className="py-2 flex space-x-4 inset-0">
            <span className="pt-1">
              <CalendarIcon className="w-5 h-5 " />
            </span>
            <span>
              <p className="text-zinc-400 font-light">Auction Date </p>
              <p className="text-sm font-semibold">
                {new Date(auction.bidDate).toLocaleString()}
              </p>
            </span>
          </div>

          <div className="space-y-4 pt-10 space-x-4 ">
            <Button variant={"outline"}>
              <BookmarkIcon className="w-4 h-4 mr-2" /> Watchlist
            </Button>
            <Button className="bg-amber-500 ">
              <GavelIcon className="w-4 h-4 mr-2" /> Bid Now
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-row py-10">
        <LocateIcon className="w-6 h-6 mr-2" />
        <span className="text-2xl font-medium">Map location</span>
      </div>
      <div className="h-[300px] w-full rounded">
        <iframe
          src={`https://www.openstreetmap.org/export/embed.html?bbox=77.1024980545044,28.644299438476562,77.20855712890625,28.753642013549805&amp;layer=mapnik&amp;marker=28.69847052601309,77.15552783203125`}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default AuctionDetailPage;
