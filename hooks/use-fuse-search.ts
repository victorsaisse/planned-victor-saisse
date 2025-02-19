import { MemoryType } from "@/lib/types";
import Fuse from "fuse.js";

export function useFuseSearch(memories: MemoryType[], search: string | null) {
  if (!search) {
    return memories;
  }

  const normalizeText = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .toLowerCase() || "";

  const fuseOptions = {
    isCaseSensitive: false,
    threshold: 0.4,
  };

  const fuseMemories = new Fuse(memories, {
    ...fuseOptions,
    keys: ["title", "description", "location"],
  });

  return fuseMemories
    .search(normalizeText(search))
    .map((result) => result.item);
}
