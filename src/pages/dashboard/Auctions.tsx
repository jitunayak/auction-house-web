import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IAuction } from "@/types";
import { useEffect, useState } from "react";

export default function Auctions() {
  const [data, setData] = useState<IAuction[]>([]);

  useEffect(() => {
    fetch("/api/auctions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="mt-14 px-4 space-y-4 grid justify-center">
      <h1 className="text-xl font-semibold">Upcoming Auctions</h1>
      <div className="w-fit grid grid-cols-4 gap-10">
        {data.map((auction) => (
          <div key={auction.id} className="w-[300px]">
            <Card className="hover:shadow-md">
              <CardHeader>
                <CardTitle>{auction.name}</CardTitle>
                <CardDescription>{auction.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={auction.image}
                  alt={auction.name}
                  className="rounded pb-2 h-[200px] w-full object-cover"
                />
                <p>Current Price: &#8377;{auction.currentPrice}</p>
                <p>Highest Bid: &#8377;{auction.highestBid}</p>
                <p>Highest Bidder: &#8377;{auction.highestBidder}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
