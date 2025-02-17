"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signInWithGoogleAction() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);
    redirect("/error");
  }

  if (data.url) {
    redirect(data.url);
  }
}

export async function logoutAction() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    redirect("/error");
  }

  revalidatePath("/my-memories", "layout");
  redirect("/my-memories");
}
