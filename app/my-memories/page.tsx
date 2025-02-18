"use client";

import AiChat from "@/components/ai/ai-chat";
import Divider from "@/components/divider";
import Separator from "@/components/feed/separator";
import Filters from "@/components/filters/filters";
import SignInWithGoogleButton from "@/components/login/google-button";
import LogoutButton from "@/components/login/logout-button";
import ProfileBanner from "@/components/profile/banner";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import YearsTimeline from "@/components/years-timeline/years-timeline";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function MyMemories() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  console.log(user);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, [supabase.auth]);

  if (!user) {
    return (
      <div
        className="bg-gray-50 py-10 min-h-dvh bg-cover bg-center pt-24 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(/images/gradient-bg.webp)" }}
      >
        <SignInWithGoogleButton />
      </div>
    );
  }

  return (
    <>
      <AiChat />
      <ProfileBanner />
      <div className="max-w-[900px] mx-auto px-2 relative">
        <LogoutButton />
        <ProfilePicture
          letter={user.user_metadata.name[0]}
          imageUrl={user.user_metadata.avatar_url}
        />
        <ProfileInfo />
        <Filters />
        <Divider />
        <div className="grid grid-cols-[auto_1fr] gap-4 mb-8 max-lg:grid-cols-1">
          <div className="px-4 sticky top-4 self-start max-lg:hidden">
            <YearsTimeline />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Separator />
            <p className="text-center text-3xl text-black font-caveat">
              Start by adding your first memory
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
