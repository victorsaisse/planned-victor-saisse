"use client";

import { MemoryType } from "@/lib/types";
import { useYearsStore } from "@/store/use-years-store";
import { motion } from "framer-motion";
import moment from "moment";
import { useQueryState } from "nuqs";
import { useMemo } from "react";

export default function YearsTimeline({
  memories,
}: {
  memories: MemoryType[];
}) {
  const years = useMemo(() => {
    return Array.from(
      new Set(
        memories.map((memory) =>
          moment(memory.createdAt, "MMM DD, YYYY").year()
        )
      )
    );
  }, [memories]);
  const { currentYear } = useYearsStore();
  const [sortBy] = useQueryState("sortBy");

  const sortedYears =
    sortBy === "desc"
      ? years.sort((a, b) => a - b)
      : years.sort((a, b) => b - a);

  return (
    <div className="flex flex-col text-end">
      {sortedYears.map((year, index) => (
        <div key={year}>
          <motion.p
            className={`font-caveat ${
              year === currentYear ? "text-3xl font-bold" : "text-base"
            }`}
            animate={{
              scale: year === currentYear ? 1.1 : 1,
              opacity: year === currentYear ? 1 : 0.7,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {year}
          </motion.p>
          {index !== sortedYears.length - 1 && (
            <p className="font-caveat text-2xl">-</p>
          )}
        </div>
      ))}
    </div>
  );
}
