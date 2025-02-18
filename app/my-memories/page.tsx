"use client";

import ImageUploader from "@/components/file-upload/image-uploader";
import SignInWithGoogleButton from "@/components/login/google-button";
import LoginButton from "@/components/login/logout-button";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function MyMemories() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <div
      className="bg-gray-50 py-10 min-h-dvh bg-cover bg-center pt-24 flex flex-col items-center justify-center"
      style={{ backgroundImage: "url(/images/gradient-bg.webp)" }}
    >
      <LoginButton />
      <SignInWithGoogleButton />

      <div className="p-4"></div>

      {user && <ImageUploader userId={user.id} type="user" />}
    </div>
  );
}
