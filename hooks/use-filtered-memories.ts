import { MemoryType } from "@/lib/types";
import moment from "moment";
import { useMemo } from "react";

export function useFilteredMemories(
  memories: MemoryType[],
  dateRange: string | null,
  sortBy: string | null,
  search: string | null
) {
  return useMemo(() => {
    switch (dateRange) {
      case "allTime":
        return memories;
      case "thisYear":
        return memories.filter((memory) =>
          moment(memory.createdAt, "MMM DD, YYYY").isSame(moment(), "year")
        );
      case "last3Months":
        return memories.filter((memory) =>
          moment(memory.createdAt, "MMM DD, YYYY").isAfter(
            moment().subtract(3, "months"),
            "day"
          )
        );
      case "last6Months":
        return memories.filter((memory) =>
          moment(memory.createdAt, "MMM DD, YYYY").isAfter(
            moment().subtract(6, "months"),
            "day"
          )
        );
      case "last12Months":
        return memories.filter((memory) =>
          moment(memory.createdAt, "MMM DD, YYYY").isAfter(
            moment().subtract(12, "months"),
            "day"
          )
        );
      default:
        return memories;
    }
  }, [memories, dateRange, sortBy, search]);
}
