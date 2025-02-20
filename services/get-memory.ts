"use server";

import { MemoryType } from "@/lib/types";
import { createClient } from "@/utils/supabase/server";

type GetMemoryProps = {
  memoryId: string;
};

export async function getMemory({ memoryId }: GetMemoryProps) {
  const supabase = createClient();

  const { data: memoryData, error: memoryError } = await supabase
    .from("memories")
    .select("*")
    .eq("id", memoryId);

  if (memoryError) {
    console.error("Error getting memory:", memoryError);
  }

  return memoryData?.[0] as MemoryType;
}
