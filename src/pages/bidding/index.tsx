import { Button } from "@/components/ui/button";
import SparklesText from "@/components/ui/sparkles-text";
import { CURRENCY_SYMBOL } from "@/types/enum";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const BID_TIME_LIMIT_IN_SECONDS = 15;
function Bidding() {
  const [timeLeft, setTimeLeft] = useState(BID_TIME_LIMIT_IN_SECONDS);
  const [price, setPrice] = useState(10000);
  const [bidInterval] = useState(5000);
  const [winned, setWinned] = useState(false);
  const [isBiddingClosed, setisBiddingClosed] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        if (isBiddingClosed) {
          clearInterval(timer);
          return;
        }
        setTimeLeft((prev) => prev - 1);
      } else {
        if (isBiddingClosed) {
          clearInterval(timer);
          return;
        }
        setPrice(price + bidInterval);
        setTimeLeft(BID_TIME_LIMIT_IN_SECONDS);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [bidInterval, isBiddingClosed, price, timeLeft]);

  return (
    <div className="p-2 md:p-10 mt-14 mx-2 md:mx-16 flex justify-center flex-col items-center">
      <h1 className="text-3xl font-semibold">Bidding Page</h1>
      <div>Id: 12223323 </div>

      {winned && (
        <>
          <Confetti numberOfPieces={60} width={1600} height={800} />

          <SparklesText text="Congratulations" />

          <div className="mt-2 text-2xl font-semibold">You won the bid</div>
        </>
      )}

      <div className="max-w-[600px] flex flex-col shadow-md space-y-4 mt-10 border p-10 rounded">
        <div className="py-6">
          <div className="text-zinc-400">Bidding Price </div>
          <div className="text-6xl font-semibold">
            {CURRENCY_SYMBOL} {price.toLocaleString()}
          </div>
        </div>

        <div className="text-zinc-500">
          Bid interval {CURRENCY_SYMBOL}
          {bidInterval.toLocaleString()}
        </div>
        <div>
          Time Left:
          <span>
            <span className="text-3xl font-semibold text-red-400 px-2">
              {timeLeft}
            </span>
          </span>
          seconds
        </div>

        <div className="pt-6 text-zinc-700 text-xl font-semibold">
          Bid higher
        </div>
        <div className="flex flex-wrap gap-2 ">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setPrice(price * (i + 2));
                setTimeLeft(BID_TIME_LIMIT_IN_SECONDS);
              }}
              className="cursor-pointer px-6 py-2 border border-green-500 text-green-600 hover:bg-black hover:text-white  bg-zinc-50 rounded-full"
            >
              {CURRENCY_SYMBOL} {(price * (i + 2)).toLocaleString()}
            </div>
          ))}
        </div>

        {!winned && (
          <div className="flex space-x-4">
            <Button size={"lg"} variant={"ghost"}>
              Exit
            </Button>
            <Button
              onClick={() => {
                setWinned(true);
                setisBiddingClosed(true);
                setTimeLeft(0);
              }}
              className="w-56 rounded-full py-6"
              size={"lg"}
            >
              Bid Now{" "}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bidding;
