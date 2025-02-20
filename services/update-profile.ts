"use server";

import { UserType } from "@/lib/types";
import { createClient } from "@/utils/supabase/server";

type UpdateProfileProps = {
  profile: UserType["profile"];
};

export async function updateProfile({ profile }: UpdateProfileProps) {
  const supabase = createClient();

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .update(profile)
    .eq("userId", profile.userId);

  if (profileError) {
    console.error("Error updating profile:", profileError);
  }

  return profileData;
}
