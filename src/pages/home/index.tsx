import Navbar from "@/components/Navbar";
import Globe from "@/components/ui/globe";
import ShineBorder from "@/components/ui/shine-border";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center flex-col items-center mt-16">
        <div className=" relative flex size-full w-full items-center justify-center overflow-hidden  px-96 pb-56 ">
          <Globe className="top-2 " />
        </div>

        <div className="text-6xl font-bold">
          What is <span className="text-[#A07CFE]">Auction House ?</span>
        </div>
        <div className="text-md text-gray-500 align-middle">
          A platform for buying and selling prepossessed cars, houses, plots,
          golds, etc.
        </div>
        <a
          target="_blank"
          href="https://app.formbricks.com/s/cm2dnk050000cjl3dsz7ebrej"
        >
          <ShineBorder
            className="text-center text-sm  capitalize mt-6"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            Request to connect
          </ShineBorder>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Home;
