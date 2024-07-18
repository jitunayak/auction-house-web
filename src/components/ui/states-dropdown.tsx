"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import states from "@/data/in_states.json";
import { ny } from "@/lib/utils";

function StatesDropDown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const statesDropDown = states.map((state) => ({
    value: state.state_code,
    label: state.name,
  }));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-max justify-between"
        >
          {value
            ? statesDropDown.find((state) => state.value === value)?.label
            : "Select state..."}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0">
        <Command>
          <CommandInput placeholder="Search state..." />
          <CommandList>
            <CommandEmpty>No state found.</CommandEmpty>
            <CommandGroup>
              {statesDropDown.map((state) => (
                <CommandItem
                  key={state.value}
                  value={state.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={ny(
                      "mr-2 size-4",
                      value === state.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {state.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default StatesDropDown;
