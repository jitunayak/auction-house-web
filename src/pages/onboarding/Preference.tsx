import { Button } from "@/components/ui/button";
import { useAuthSlice } from "@/hooks/useAuthSlice";
import { cn } from "@/lib/utils";
import {
  CarFrontIcon,
  FactoryIcon,
  HouseIcon,
  LandPlotIcon,
  WeightIcon,
} from "lucide-react";
import { useState } from "react";
function Preference() {
  const { nextStage, user, setUser } = useAuthSlice();
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  const handleSubmit = () => {
    console.log(selected);
    if (selected.length === 0) {
      return;
    }
    setUser({ ...user, preferences: selected });
    nextStage();
  };

  return (
    <div>
      <span className="text-2xl ">Select your preference</span>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Car", "Plot", "House", "Gold", "Factory"].map((title, index) => (
          <div
            key={index}
            onClick={() => handleClick(title)}
            className={cn(
              "flex items-center p-4 border-[1.6px] rounded-lg shadow-sm cursor-pointer",
              selected.includes(title)
                ? "border-primary/80 text-primary bg-primary/10"
                : "border-input text-muted-foreground hover:bg-muted/5"
            )}
          >
            <div className="flex items-center justify-center w-12 h-12 mr-4">
              {index === 0 ? (
                <CarFrontIcon className="w-6 h-6" />
              ) : index === 1 ? (
                <LandPlotIcon className="w-6 h-6" />
              ) : index === 2 ? (
                <HouseIcon className="w-6 h-6" />
              ) : index === 3 ? (
                <WeightIcon className="w-6 h-6" />
              ) : index === 4 ? (
                <FactoryIcon className="w-6 h-6" />
              ) : null}
            </div>
            <p className="text-sm font-medium">{title}</p>
          </div>
        ))}
      </div>
      <Button
        className="w-full mt-4"
        disabled={selected.length === 0}
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </div>
  );
}

export default Preference;
