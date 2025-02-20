"use client";

import AiChat from "@/components/ai/ai-chat";
import Memories from "@/components/feed/memories";
import Separator from "@/components/feed/separator";
import Filters from "@/components/filters/filters";
import Divider from "@/components/global/divider";
import LoadingPage from "@/components/global/loading-page";
import SignInWithGoogleButton from "@/components/login/google-button";
import LogoutButton from "@/components/login/logout-button";
import ProfileBanner from "@/components/profile/banner";
import BannerDialog from "@/components/profile/banner-dialog";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import YearsTimeline from "@/components/years-timeline/years-timeline";
import { useUserData } from "@/hooks/use-user-data";
import { useState } from "react";

export default function MyMemories() {
  const { user, isLoading } = useUserData();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (isLoading) {
    return <LoadingPage />;
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
      <BannerDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
      <AiChat />
      <ProfileBanner
        profile={user.profile}
        onEdit={() => setIsDialogOpen(true)}
      />
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

          {user.memories.length > 0 ? (
            <Memories memories={user.memories} />
          ) : (
            <div className="flex flex-col gap-4 items-center">
              <Separator />
              <p className="text-center text-3xl text-black font-caveat">
                Start by adding your first memory
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
