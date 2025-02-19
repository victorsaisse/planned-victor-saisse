export const PLAMORY_BUCKET_NAME = "plamory";

export const USERS_FOLDER_PATH = "users/";

export const DEMO_FOLDER_PATH = "demo/";

export const BANNERS = [
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-1.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-2.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-3.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-4.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-5.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-6.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-7.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-8.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-9.jpg",
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-10.jpg",
];

export const INITIAL_MEMORIES = [
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
  {
    id: crypto.randomUUID(),
    title: "Memory 4",
    description: "Description 4",
    createdAt: "Jan 15, 2024",
    location: "Montreal, QC, Canada",
  },
  {
    id: crypto.randomUUID(),
    title: "Memory 4",
    description: "Description 4",
    createdAt: "Aug 15, 2024",
    location: "Montreal, QC, Canada",
  },
  {
    id: crypto.randomUUID(),
    title: "Memory 5",
    description: "Description 5",
    createdAt: "Dec 10, 2023",
    location: "Montreal, QC, Canada",
  },
];

export const INITIAL_PROFILE = {
  imageUrl:
    "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/profile/profile-pic.jpg",
  name: "Victor Saisse",
  bio: "Passionate Software Engineer and Code Enthusiast 🚀",
  location: "Montreal, QC, Canada",
  bannerUrl:
    "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-1.jpg",
};

export const RANGE_OPTIONS = [
  {
    label: "All Time",
    value: "allTime",
  },
  {
    label: "This Year",
    value: "thisYear",
  },
  {
    label: "Last 3 Months",
    value: "last3Months",
  },
  {
    label: "Last 6 Months",
    value: "last6Months",
  },
  {
    label: "Last 12 Months",
    value: "last12Months",
  },
];
