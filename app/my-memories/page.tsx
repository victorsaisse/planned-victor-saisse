"use client";

import AiChat from "@/components/ai/ai-chat";
import Separator from "@/components/feed/separator";
import Filters from "@/components/filters/filters";
import Divider from "@/components/global/divider";
import SignInWithGoogleButton from "@/components/login/google-button";
import LogoutButton from "@/components/login/logout-button";
import ProfileBanner from "@/components/profile/banner";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import YearsTimeline from "@/components/years-timeline/years-timeline";
import { useUserData } from "@/hooks/use-user-data";

export default function MyMemories() {
  const { user, isLoading } = useUserData();

  if (isLoading) {
    return (
      <div
        className="bg-gray-50 py-10 min-h-dvh bg-cover bg-center pt-24 flex flex-col gap-4 items-center justify-center"
        style={{ backgroundImage: "url(/images/gradient-bg.webp)" }}
      >
        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-2xl font-caveat">Loading...</p>
      </div>
    );
  }

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
      <AiChat aiChat={user.aiChat} />
      <ProfileBanner profile={user.profile} />
      <div className="max-w-[900px] mx-auto px-2 relative">
        <LogoutButton />
        <ProfilePicture
          letter={user.profile.name.charAt(0)}
          imageUrl={user.profile.imageUrl}
        />
        <ProfileInfo profile={user.profile} />
        <Filters />
        <Divider />
        <div className="grid grid-cols-[auto_1fr] gap-4 mb-8 max-lg:grid-cols-1">
          <div className="px-4 sticky top-4 self-start max-lg:hidden">
            <YearsTimeline memories={user.memories} />
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
