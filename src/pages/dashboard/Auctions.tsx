import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IAuction } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Auctions() {
  const [data, setData] = useState<IAuction[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/auctions")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="mt-10 px-4 space-y-4 grid justify-center">
      <h1 className="text-xl font-semibold">Upcoming Auctions</h1>
      <div className="w-fit grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((auction) => (
          <div key={auction.id} className="w-[300px]">
            <Card
              className="hover:shadow-md cursor-pointer"
              onClick={() => {
                navigate({ to: `/auctions/${auction.id}` });
              }}
            >
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

                <div className="py-2 flex space-x-4 inset-0">
                  <span className="pt-1">
                    <MapPinIcon className="w-4 h-4 " />
                  </span>
                  <span>
                    <span>
                      <p className="text-zinc-400 text-sm">Location</p>
                      <p className="text-sm ">{auction.location}</p>
                    </span>
                  </span>
                </div>

                <div className="py-2 flex space-x-4 inset-0">
                  <span className="pt-1">
                    <CalendarIcon className="w-4 h-4 " />
                  </span>
                  <span>
                    <p className="text-zinc-400 text-sm">Auction Date </p>
                    <p className="text-sm ">
                      {new Date(auction.bidDate).toLocaleString()}
                    </p>
                  </span>
                </div>
                <Button size={"sm"} className="w-full mt-6">
                  Bid for &#8377;
                  {Number(auction.currentPrice).toLocaleString()}
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
