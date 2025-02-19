import BlockCard from "@/components/feed/block-card";
import ListCard from "@/components/feed/list-card";
import Separator from "@/components/feed/separator";
import { MemoryType } from "@/lib/types";
import { Fragment } from "react";

export default function Memories({ memories }: { memories: MemoryType[] }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      {memories.map((memory) => (
        <Fragment key={memory.id}>
          <ListCard memory={memory} />
          <Separator />
          <BlockCard memory={memory} />
          <Separator />
        </Fragment>
      ))}
      <p className="text-center text-3xl text-black font-caveat">
        That&apos;s all :)
      </p>
    </div>
  );
}
