"use server";

import { MemoryType } from "@/lib/types";
import { createClient } from "@/utils/supabase/server";

type DeleteMemoryProps = {
  memory: MemoryType;
};

export async function deleteMemory({ memory }: DeleteMemoryProps) {
  const supabase = createClient();

  const { data: memoryData, error: memoryError } = await supabase
    .from("memories")
    .delete()
    .eq("id", memory.id);

  if (memoryError) {
    console.error("Error deleting memory:", memoryError);
  }

  return memoryData;
}
