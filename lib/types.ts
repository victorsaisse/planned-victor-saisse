export type UserType = {
  id: string;
  memories: MemoryType[];
  profile: ProfileType;
};

export type MemoryType = {
  userId: string;
  id: string;
  imageUrl?: string;
  title: string;
  description: string;
  createdAt: string;
  location: string;
};

export type ProfileType = {
  userId: string;
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
};
