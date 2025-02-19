"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect("/error");
  }

  revalidatePath("/");
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    redirect("/error");
  }

  redirect(data.url);
}
