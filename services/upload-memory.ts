"use server";

import { MemoryType } from "@/lib/types";
import { createClient } from "@/utils/supabase/server";

type UploadMemoryProps = {
  memory: MemoryType;
};

export async function uploadMemory({ memory }: UploadMemoryProps) {
  const supabase = createClient();

  const { data: memoryData, error: memoryError } = await supabase
    .from("memories")
    .insert(memory);

  if (memoryError) {
    console.error("Error uploading memory:", memoryError);
  }

  return memoryData;
}
