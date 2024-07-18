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
    <div className="mt-14 px-10 py-6 bg-zinc-100 dark:bg-zinc-800 shadow">
      <h1 className="text-xl font-semibold pb-4"> Filters</h1>
      <div className="flex md:flex-row gap-2 md:gap-6 flex-col">
        <StatesDropDown />
        <Select>
          <SelectTrigger className="w-[180px] bg-white dark:bg-black">
            <SelectValue placeholder="Auction Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Auction Type</SelectLabel>
              <SelectItem value="bank_bid">Bank Bid</SelectItem>
              <SelectItem value="tender_case">Tender Case</SelectItem>
              <SelectItem value="non_tender_case">Non Tender Case</SelectItem>
              <SelectItem value="individual_bid">Individual Bid</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[220px] bg-white dark:bg-black">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="flex flex-row justify-between">
                <div>
                  {CURRENCY_SYMBOL}
                  {priceRange.at(0)?.toLocaleString()}
                </div>
                <div>
                  {CURRENCY_SYMBOL}
                  {priceRange.at(1)?.toLocaleString()}
                </div>
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
