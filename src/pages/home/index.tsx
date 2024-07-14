import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

function Home() {
  return (
    <>
      <Navbar />
      <AuroraBackground>
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold cursor-pointer text-9xl text-center  bg-gradient-to-tr from-red-600 to-purple-600 bg-clip-text text-transparent">
            Auction House
          </h1>
          <span className="text-3xl text-zinc-700 dark:text-zinc-400">
            Coming soon to your city!
          </span>
        </div>
      </AuroraBackground>
    </>
  );
}

export default Home;
