import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import StatesDropDown from "@/components/ui/states-dropdown";
import { CURRENCY_SYMBOL } from "@/types/enum";
import { useState } from "react";

function AuctionFilter() {
  const [priceRange, setPriceRange] = useState([10000, 90000]);

  return (
    <div className="mt-20 px-10">
      <h1 className="text-xl font-semibold pb-4"> Filters</h1>
      <div className="flex gap-6">
        <StatesDropDown />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Auction Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Auction Type</SelectLabel>
              <SelectItem value="tender_case">Tender Case</SelectItem>
              <SelectItem value="non_tender_case">Non Tender Case</SelectItem>
              <SelectItem value="jom_bid">Jom Bid</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>
                {CURRENCY_SYMBOL}
                {priceRange.at(0)?.toLocaleString()}-{CURRENCY_SYMBOL}
                {priceRange.at(1)?.toLocaleString()}
              </SelectLabel>
              <Slider
                value={priceRange}
                onValueChange={(e) => setPriceRange(e)}
                className="py-4"
                defaultValue={[10000, 500000]}
                max={1000000}
                min={1000}
                step={1000}
              />
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default AuctionFilter;
