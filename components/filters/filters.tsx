"use client";

import DateRange from "@/components/filters/date-range";
import SearchFilter from "@/components/filters/search-filter";
import SortBy from "@/components/filters/sort-by";
import ViewType from "@/components/filters/view-type";
import MemorySheet from "@/components/global/memory-sheet";
import { Plus } from "lucide-react";

export default function Filters() {
  return (
    <div className="w-full flex sm:justify-end gap-2 mt-8 flex-wrap justify-evenly items-center">
      <SortBy />
      <DateRange />
      <ViewType />
      <SearchFilter />
      <MemorySheet>
        <button className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-black/80 transition-all duration-200 font-medium">
          <Plus /> New Memory
        </button>
      </MemorySheet>
    </div>
  );
}
