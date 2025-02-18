"use server";

import {
  DEMO_FOLDER_PATH,
  PLAMORY_BUCKET_NAME,
  USERS_FOLDER_PATH,
} from "@/lib/constants";
import { createClient } from "@/utils/supabase/server";

type uploadImageProps = {
  formData: FormData;
  userId: string;
  type: "user" | "demo";
};

export async function uploadImage({
  formData,
  userId,
  type,
}: uploadImageProps): Promise<string | null> {
  const supabase = createClient();

  try {
    const file = formData.get("file") as File;
    if (!file) throw new Error("No file provided");

    const ramdomUUID = crypto.randomUUID();
    const filePath = `${
      type === "user" ? USERS_FOLDER_PATH : DEMO_FOLDER_PATH
    }${userId}/${ramdomUUID}`;

    const { error } = await supabase.storage
      .from(PLAMORY_BUCKET_NAME)
      .upload(filePath, file);
    if (error) throw new Error(error.message);

    const { data } = supabase.storage
      .from(PLAMORY_BUCKET_NAME)
      .getPublicUrl(filePath);

    if (!data) throw new Error("Error getting public URL");

    return data.publicUrl;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to upload image."
    );
  }
}
