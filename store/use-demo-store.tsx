import { DemoType } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialDemo: DemoType = {
  id: crypto.randomUUID(),
  memories: [
    {
      id: crypto.randomUUID(),
      imageUrl:
        "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg",
      title: "Memory 1",
      description: "Description 1",
      createdAt: "Feb 16, 2025",
      location: "Montreal, QC, Canada",
    },
    {
      id: crypto.randomUUID(),
      title: "Memory 1",
      description: "Description 1",
      createdAt: "Jan 24, 2025",
      location: "Montreal, QC, Canada",
    },
    {
      id: crypto.randomUUID(),
      imageUrl:
        "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-2.jpg",
      title: "Memory 2",
      description: "Description 2",
      createdAt: "Jan 11, 2025",
      location: "Montreal, QC, Canada",
    },
    {
      id: crypto.randomUUID(),
      title: "Memory 2",
      description: "Description 2",
      createdAt: "Dec 15, 2024",
      location: "Montreal, QC, Canada",
    },
    {
      id: crypto.randomUUID(),
      imageUrl:
        "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-3.jpg",
      title: "Memory 3",
      description: "Description 3",
      createdAt: "Nov 10, 2024",
      location: "Montreal, QC, Canada",
    },
    {
      id: crypto.randomUUID(),
      title: "Memory 3",
      description: "Description 3",
      createdAt: "Oct 20, 2024",
      location: "Montreal, QC, Canada",
    },
  ],
  profile: {
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/profile/profile-pic.jpg",
    name: "Victor Saisse",
    bio: "Passionate Software Engineer and Code Enthusiast 🚀",
    location: "Montreal, QC, Canada",
    bannerUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-1.jpg",
  },
  aiChat: {
    messages: [
      {
        content:
          "Hello! I'm Planny, the Plamory Elf. How can I help you today?",
        role: "assistant",
        createdAt: new Date().toISOString(),
      },
    ],
  },
};

type DemoState = {
  demo: DemoType;
  setDemo: (demo: DemoType) => void;
};

export const useDemoStore = create<DemoState>()(
  persist(
    (set) => ({
      demo: initialDemo,
      setDemo: (demo) => set({ demo }),
    }),
    {
      name: "demo",
    }
  )
);
