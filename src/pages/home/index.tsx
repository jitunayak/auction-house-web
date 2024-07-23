import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Globe from "@/components/ui/globe";
import ShineBorder from "@/components/ui/shine-border";
import TypingAnimation from "@/components/ui/typing-animation";
import { Link } from "@tanstack/react-router";

function Home() {
  return (
    <>
      <Navbar />
      <AuroraBackground>
        <div className="flex justify-center flex-col items-center">
          <div className=" relative flex size-full w-full items-center justify-center overflow-hidden  px-96 pb-56 ">
            <TypingAnimation
              text="Auction House"
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-zinc-400 dark:from-violet-700 dark:to-red-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent "
            />

            <Globe className="top-28 " />
          </div>

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
