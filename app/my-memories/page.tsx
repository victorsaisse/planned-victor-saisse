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
import { useUserStore } from "@/store/useUserStore";
import { createClient } from "@/utils/supabase/client";
import { useEffect } from "react";

export default function MyMemories() {
  const { user, setUser } = useUserStore();

  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const { data: userData, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", user.id!);

        if (error) {
          console.error(error);
        }

        console.log("===>> userData", userData);

        if (!userData?.length) {
          console.log("===>> userData not found, creating user");
          const { error: newUserError } = await supabase.from("users").insert({
            id: user.id!,
            name: user.user_metadata.name!,
            imageUrl: user.user_metadata.avatar_url!,
            bannerUrl:
              "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-4.jpg",
            bio: "Add your description here.",
            location: "Your Location",
          });

          if (newUserError) {
            console.error(newUserError);
          }

          setUser({
            id: user.id!,
            profile: {
              name: user.user_metadata.name!,
              imageUrl: user.user_metadata.avatar_url!,
              bannerUrl:
                "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-4.jpg",
              bio: "Add your description here.",
              location: "Your Location",
            },
            memories: [],
            aiChat: {
              messages: [],
            },
          });
        } else {
          setUser({
            id: user.id!,
            profile: {
              name: userData[0].name,
              imageUrl: userData[0].imageUrl,
              bannerUrl: userData[0].bannerUrl,
              bio: userData[0].bio,
              location: userData[0].location,
            },
            memories: [],
            aiChat: {
              messages: [],
            },
          });
        }
      }
    };

    if (!user) {
      fetchUser();
    }
  }, [supabase.auth, setUser, user, supabase]);

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
