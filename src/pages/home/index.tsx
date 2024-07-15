import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import ShineBorder from "@/components/ui/shine-border";
import { Link } from "@tanstack/react-router";

function Home() {
  return (
    <>
      <Navbar />
      <AuroraBackground>
        <div className="flex justify-center flex-col items-center">
          <h1 className="p-10 font-bold cursor-pointer text-[70px] lg:text-9xl text-center  bg-gradient-to-tr from-red-600 to-purple-600 bg-clip-text text-transparent">
            Auction House
          </h1>
          <span className="text-2xl text-zinc-700 dark:text-zinc-400">
            Coming soon to your city!
          </span>
          <Link to="/onboard">
            <ShineBorder
              className="text-center text-lg font-bold capitalize mt-6"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              Get started
            </ShineBorder>
          </Link>
        </div>
      </AuroraBackground>
    </>
  );
}

export default Home;
