import { useUserStore } from "@/store/use-user-store";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const DEFAULT_BANNER_URL =
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-4.jpg";

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
    const newUserData: UserData = {
      id: authUser.id,
      name: authUser.user_metadata.name,
      imageUrl: authUser.user_metadata.avatar_url,
      bannerUrl: DEFAULT_BANNER_URL,
      bio: "Add your description here.",
      location: "Your Location",
    };

    const { error: newUserError } = await supabase
      .from("users")
      .insert(newUserData);

    if (newUserError) {
      console.error("Error creating new user:", newUserError);
      return null;
    }

    return newUserData;
  };

  const updateUserStore = (userData: UserData) => {
    setUser({
      id: userData.id,
      profile: {
        name: userData.name,
        imageUrl: userData.imageUrl,
        bannerUrl: userData.bannerUrl,
        bio: userData.bio,
        location: userData.location,
      },
      memories: [],
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

      const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", authUser.id)
        .single();

      if (error) {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
        return;
      }

      if (!userData) {
        const newUser = await createNewUser(authUser);
        if (newUser) updateUserStore(newUser);
      } else {
        updateUserStore(userData);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { user, isLoading, fetchUserData };
}
