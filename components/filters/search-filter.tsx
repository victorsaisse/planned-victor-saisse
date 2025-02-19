"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Search } from "lucide-react";
import { useQueryState } from "nuqs";

export default function SearchFilter() {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
    parse: (value) => value as string,
  });

  return (
    <Popover>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <PopoverTrigger className="bg-white px-3 py-1 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200 text-sm cursor-pointer flex items-center justify-center">
              <Search />
            </PopoverTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Search</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <PopoverContent className="w-auto p-4">
        <div className="flex gap-2 flex-col items-start">
          <Label>Search</Label>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type to search..."
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
