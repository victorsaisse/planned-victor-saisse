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
import { RANGE_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { useQueryState } from "nuqs";

export default function DateRange() {
  const [dateRange, setDateRange] = useQueryState("dateRange", {
    defaultValue: RANGE_OPTIONS[0].value,
    parse: (value) => value as (typeof RANGE_OPTIONS)[number]["value"],
  });

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger className="bg-white px-3 py-2 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200 text-sm">
              <div className="flex items-center gap-2">
                <CalendarIcon />
                {
                  RANGE_OPTIONS.find((option) => option.value === dateRange)
                    ?.label
                }
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
              onClick={() => setDateRange(option.value)}
              className={cn(
                dateRange === option.value && "bg-primary text-white",
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
