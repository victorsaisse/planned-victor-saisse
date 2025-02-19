import { MemoryType } from "@/lib/types";
import moment from "moment";
import { useMemo } from "react";

export function useSortedMemories(
  memories: MemoryType[],
  sortBy: string | null,
  dateRange: string | null
) {
  return useMemo(() => {
    if (sortBy === "desc") {
      return memories.sort(
        (a, b) =>
          moment(a.createdAt, "MMM DD, YYYY").valueOf() -
          moment(b.createdAt, "MMM DD, YYYY").valueOf()
      );
    } else {
      return memories.sort(
        (a, b) =>
          moment(b.createdAt, "MMM DD, YYYY").valueOf() -
          moment(a.createdAt, "MMM DD, YYYY").valueOf()
      );
    }
  }, [memories, sortBy, dateRange]);
}
