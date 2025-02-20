import { INITIAL_PROMPT } from "@/lib/constants";
import moment from "moment";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type MessageType = {
  content: string;
  role: "user" | "assistant";
  createdAt: string;
};

interface ChatState {
  messages: MessageType[];
  addMessage: (message: Omit<MessageType, "createdAt">) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [
        {
          content: INITIAL_PROMPT,
          role: "assistant",
          createdAt: moment().format(),
        },
      ],
      addMessage: (message) =>
        set((state) => ({
          messages: [
            ...state.messages,
            { ...message, createdAt: moment().format() },
          ],
        })),
      clearMessages: () =>
        set(() => ({
          messages: [
            {
              content: INITIAL_PROMPT,
              role: "assistant",
              createdAt: moment().format(),
            },
          ],
        })),
    }),
    {
      name: "chat-storage",
    }
  )
);
