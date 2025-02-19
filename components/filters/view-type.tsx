"use client";

import { cn } from "@/lib/utils";
import { AlignJustify, Grid2x2 } from "lucide-react";
import { useQueryState } from "nuqs";

export default function ViewType() {
  const [viewType, setViewType] = useQueryState("viewType", {
    defaultValue: "grid",
    parse: (value) => value as "grid" | "list",
  });

  return (
    <div className="py-1 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200 text-sm bg-[#F2F2F3] px-2">
      <div className="flex items-center gap-2">
        <div
          onClick={() => setViewType("grid")}
          className={cn(
            "p-1 rounded-sm  hover:bg-white transition-all duration-200 cursor-pointer",
            viewType === "grid" && "bg-white"
          )}
        >
          <Grid2x2 />
        </div>
        <div
          onClick={() => setViewType("list")}
          className={cn(
            "p-1 rounded-sm hover:bg-white transition-all duration-200 cursor-pointer",
            viewType === "list" && "bg-white"
          )}
        >
          <AlignJustify />
        </div>
      </div>
    </div>
  );
}
