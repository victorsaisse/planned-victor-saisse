"use client";

import { DEFAULT_BANNER_URL } from "@/lib/constants";
import { MemoryType, ProfileType } from "@/lib/types";
import { useUserStore } from "@/store/use-user-store";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type UserData = {
  id: string;
  name: string;
  imageUrl: string;
  bannerUrl: string;
  bio: string;
  location: string;
};

export function useUserData() {
  const { user, setUser } = useUserStore();
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(true);

  const createNewUser = async (authUser: any): Promise<UserData | null> => {
    const newProfile = {
      userId: authUser.id,
      imageUrl: authUser.user_metadata.avatar_url,
      name: authUser.user_metadata.name,
      bio: "Add your description here.",
      location: "Your Location",
      bannerUrl: DEFAULT_BANNER_URL,
    };

    const { data: newProfileData, error: newProfileError } = await supabase
      .from("profiles")
      .insert(newProfile);

    if (newProfileError) {
      console.error("Error creating new profile:", newProfileError);
      return null;
    }

    return newProfileData;
  };

  const updateUserStore = (memories: MemoryType[], profile: ProfileType) => {
    setUser({
      id: profile.userId,
      profile: profile,
      memories: memories,
      aiChat: { messages: [] },
    });
  };

  const fetchUserData = async () => {
    try {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();
      if (!authUser) {
        setIsLoading(false);
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("userId", authUser.id);

      if (error) {
        console.error("Error fetching profile data:", error);
        setIsLoading(false);
        return;
      }

      if (!profile?.length) {
        await createNewUser(authUser);
        updateUserStore([], {
          userId: authUser.id,
          imageUrl: authUser.user_metadata.avatar_url,
          name: authUser.user_metadata.name,
          bio: "Add your description here.",
          location: "Your Location",
          bannerUrl: DEFAULT_BANNER_URL,
        });
      } else {
        const profileData = profile[0];

        const { data: memories, error: memoriesError } = await supabase
          .from("memories")
          .select("*")
          .eq("userId", profileData.userId);

        if (memoriesError) {
          console.error("Error fetching memories data:", memoriesError);
          setIsLoading(false);
          return;
        }

        updateUserStore(memories, profileData);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error in fetchUserData:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUserData();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  return { user, isLoading, fetchUserData };
}
