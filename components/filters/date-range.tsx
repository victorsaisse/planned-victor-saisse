"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useQueryState } from "nuqs";

const RANGE_OPTIONS = [
  {
    label: "All Time",
    value: "allTime",
  },
  {
    label: "This Year",
    value: "thisYear",
  },
  {
    label: "Last 3 Months",
    value: "last3Months",
  },
  {
    label: "Last 6 Months",
    value: "last6Months",
  },
  {
    label: "Last 12 Months",
    value: "last12Months",
  },
];

export default function DateRange() {
  const [range, setRange] = useQueryState("range", {
    defaultValue: RANGE_OPTIONS[0].value,
    parse: (value) => value as (typeof RANGE_OPTIONS)[number]["value"],
  });

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger className="bg-white px-3 py-1 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200 text-sm">
              <div className="flex items-center gap-2">
                <CalendarIcon />
                {RANGE_OPTIONS.find((option) => option.value === range)?.label}
              </div>
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Date Range</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <PopoverContent className="w-auto p-4">
        <div className="flex items-center gap-2 flex-col">
          {RANGE_OPTIONS.map((option) => (
            <Button
              key={option.value}
              variant={"outline"}
              onClick={() => setRange(option.value)}
              className={cn(
                range === option.value && "bg-primary text-white",
                "w-full hover:bg-primary hover:text-white transition-all duration-200"
              )}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
