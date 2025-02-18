"use server";

import { createClient } from "@/utils/supabase/server";

export async function uploadImage(formData: FormData): Promise<string | null> {
  const supabase = createClient();
  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided");

    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const filePath = `testing/${fileName}`;

    const { error } = await supabase.storage
      .from("testing")
      .upload(filePath, file);
    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from("testing").getPublicUrl(filePath);
    if (!data) throw new Error("Failed to retrieve public URL");

    return data.publicUrl;
  } catch (error) {
    console.error("Image upload error:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to upload image."
    );
  }
}
