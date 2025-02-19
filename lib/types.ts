export type UserType = {
  id: string;
  memories: MemoryType[];
  profile: ProfileType;
  aiChat: AiChatType;
};

export type MemoryType = {
  id: string;
  imageUrl?: string;
  title: string;
  description: string;
  createdAt: string;
  location: string;
};

export type ProfileType = {
  imageUrl: string;
  name: string;
  bio: string;
  location: string;
  bannerUrl: string;
};

export type DemoType = {
  id: string;
  memories: MemoryType[];
  profile: ProfileType;
  aiChat: AiChatType;
};

export type AiChatType = {
  messages: MessageType[];
};

export type MessageType = {
  content: string;
  createdAt: string;
  role: "user" | "assistant";
};
