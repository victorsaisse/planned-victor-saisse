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
import { ArrowUpDown } from "lucide-react";
import { useQueryState } from "nuqs";

export default function SortBy() {
  const [sortBy, setSortBy] = useQueryState("sortBy", {
    defaultValue: "asc",
    parse: (value) => value as "asc" | "desc",
  });

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger className="bg-white px-3 py-1 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200 text-sm">
              <ArrowUpDown />
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Sort by</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <PopoverContent className="w-auto p-4">
        <div className="flex items-center gap-2 flex-col">
          <Button
            variant={"outline"}
            onClick={() => setSortBy("asc")}
            className={cn(
              sortBy === "asc" && "bg-primary text-white",
              "w-full hover:bg-primary hover:text-white transition-all duration-200"
            )}
          >
            Newest first
          </Button>
          <Button
            variant={"outline"}
            onClick={() => setSortBy("desc")}
            className={cn(
              sortBy === "desc" && "bg-primary text-white",
              "w-full hover:bg-primary hover:text-white transition-all duration-200"
            )}
          >
            Oldest first
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
