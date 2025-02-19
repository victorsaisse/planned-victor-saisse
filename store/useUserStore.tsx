import { UserType } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserState = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user",
    }
  )
);
