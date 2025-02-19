"use client";

import BlockCard from "@/components/feed/block-card";
import ListCard from "@/components/feed/list-card";
import Separator from "@/components/feed/separator";
import { MemoryType } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { useQueryState } from "nuqs";

export default function Memories({ memories }: { memories: MemoryType[] }) {
  const [viewType] = useQueryState("viewType");

  return (
    <div
      className={`flex flex-col ${
        viewType === "list" ? "gap-8" : "gap-4"
      } items-center`}
    >
      {memories.map((memory) => (
        <motion.div
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
