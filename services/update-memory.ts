"use server";

import { MemoryType } from "@/lib/types";
import { createClient } from "@/utils/supabase/server";

type UpdateMemoryProps = {
  memory: MemoryType;
};

export async function updateMemory({ memory }: UpdateMemoryProps) {
  const supabase = createClient();

  const { data: memoryData, error: memoryError } = await supabase
    .from("memories")
    .update(memory)
    .eq("id", memory.id);

  if (memoryError) {
    console.error("Error updating memory:", memoryError);
  }

  return memoryData;
}
