"use client";

import { cn } from "@/lib/utils";
import {
  AlignJustify,
  ArrowUpDown,
  Calendar,
  Grid2x2,
  Plus,
  Search,
} from "lucide-react";

export default function Filters() {
  return (
    <div className="w-full flex justify-end gap-2">
      <FilterButton onClick={() => {}}>
        <ArrowUpDown />
      </FilterButton>
      <FilterButton onClick={() => {}}>
        <div className="flex items-center gap-2">
          <Calendar /> All Time
        </div>
      </FilterButton>
      <FilterButton onClick={() => {}} className="bg-[#F2F2F3]">
        <div className="flex items-center gap-1">
          <div className="p-1 rounded-sm bg-white">
            <Grid2x2 />
          </div>
          <div className="p-1 rounded-sm bg-white">
            <AlignJustify />
          </div>
        </div>
      </FilterButton>
      <FilterButton onClick={() => {}}>
        <Search />
      </FilterButton>
      <NewMemoryButton />
    </div>
  );
}

function FilterButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-white px-3 py-1 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200",
        className
      )}
    >
      {children}
    </button>
  );
}

function NewMemoryButton() {
  return (
    <button className="bg-black text-white px-3 py-1 rounded-md flex items-center gap-2 hover:bg-black/80 transition-all duration-200">
      <Plus /> New Memory
    </button>
  );
}
