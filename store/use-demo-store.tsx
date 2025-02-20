import { INITIAL_MEMORIES, INITIAL_PROFILE } from "@/lib/constants";
import { DemoType } from "@/lib/types";
import { createClient } from "@/utils/supabase/client";
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

const seedDemo = async () => {
  const supabase = createClient();

  const { data: existingMemories } = await supabase
    .from("memories")
    .select()
    .eq("userId", initialDemo.id);

  if (!existingMemories?.length) {
    const memories = INITIAL_MEMORIES.map((memory) => ({
      ...memory,
      userId: initialDemo.id,
    }));

    const { error: demoError } = await supabase
      .from("memories")
      .insert(memories);

    if (demoError) {
      console.error("Error seeding demo:", demoError);
    }
  }
};

seedDemo();

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
