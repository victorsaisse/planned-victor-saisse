"use client";

import DateRange from "@/components/filters/date-range";
import SortBy from "@/components/filters/sort-by";
import ViewType from "@/components/filters/view-type";
import MemorySheet from "@/components/global/memory-sheet";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Search, X } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";

export default function Filters() {
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
    parse: (value) => value as string,
  });

  return (
    <div className="w-full flex sm:justify-end gap-2 mt-8 flex-wrap justify-evenly items-center">
      <AnimatePresence mode="wait">
        {openSearch ? (
          <motion.div
            key="search"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex relative"
          >
            <Input
              autoFocus
              className="py-2.5 h-auto pr-8 md:min-w-[300px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type to search..."
            />
            <X
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              size={16}
              onClick={() => {
                setSearch("");
                setOpenSearch(false);
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="filters"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-2 items-center"
          >
            <SortBy />
            <DateRange />
            <ViewType />
            <button
              className="bg-white px-3 py-2 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200 text-sm cursor-pointer flex items-center justify-center"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <Search />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <MemorySheet>
        <button className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-black/80 transition-all duration-200 font-medium">
          <Plus /> New Memory
        </button>
      </MemorySheet>
    </div>
  );
}
