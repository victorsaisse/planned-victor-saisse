"use client";

import BlockCard from "@/components/feed/block-card";
import ListCard from "@/components/feed/list-card";
import Separator from "@/components/feed/separator";
import { useFilteredMemories } from "@/hooks/use-filtered-memories";
import { useFuseSearch } from "@/hooks/use-fuse-search";
import { useSortedMemories } from "@/hooks/use-sorted-memories";
import { MemoryType } from "@/lib/types";
import { useYearsStore } from "@/store/use-years-store";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import { useQueryState } from "nuqs";
import { useEffect, useRef } from "react";

export default function Memories({ memories }: { memories: MemoryType[] }) {
  const { setYears, setCurrentYear } = useYearsStore();

  const [viewType] = useQueryState("viewType");
  const [sortBy] = useQueryState("sortBy");
  const [dateRange] = useQueryState("dateRange");
  const [search] = useQueryState("search");

  const sortedMemories = useSortedMemories(memories, sortBy, dateRange, search);
  const filteredMemories = useFilteredMemories(
    sortedMemories,
    dateRange,
    sortBy,
    search
  );
  const fuseMemories = useFuseSearch(filteredMemories, search);

  useEffect(() => {
    const years = Array.from(
      new Set(
        fuseMemories.map((memory) =>
          moment(memory.createdAt, "MMM DD, YYYY").year()
        )
      )
    );
    setYears(years);
  }, [fuseMemories]);

  const memoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = memoryRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              const memory = fuseMemories[index];
              setCurrentYear(moment(memory.createdAt, "MMM DD, YYYY").year());
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    memoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [fuseMemories, setCurrentYear]);

  return (
    <div
      className={`flex flex-col ${
        viewType === "list" ? "gap-8" : "gap-4"
      } items-center`}
    >
      {fuseMemories.map((memory, index) => (
        <motion.div
          ref={(el) => {
            memoryRefs.current[index] = el;
          }}
          key={memory.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col gap-4 items-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {viewType === "list" ? (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <ListCard memory={memory} />
              </motion.div>
            ) : (
              <motion.div
                key="block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col gap-4 items-center"
              >
                <BlockCard memory={memory} />

                <Separator />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl text-black font-caveat"
      >
        That&apos;s all :)
      </motion.p>
    </div>
  );
}
