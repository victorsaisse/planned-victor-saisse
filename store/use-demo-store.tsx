import { INITIAL_MEMORIES, INITIAL_PROFILE } from "@/lib/constants";
import { DemoType } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialDemo: DemoType = {
  id: crypto.randomUUID(),
  memories: INITIAL_MEMORIES,
  profile: INITIAL_PROFILE,
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
