import { MemoryType, ProfileType } from "@/lib/types";

export const PLAMORY_BUCKET_NAME = "plamory";

export const USERS_FOLDER_PATH = "users/";

export const DEMO_FOLDER_PATH = "demo/";

export const DEFAULT_BANNER_URL =
  "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-4.jpg";

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

export const INITIAL_PROMPT =
  "Hello! I'm Planny, the Plamory Elf. How can I help you today?";

export const INITIAL_MEMORIES = [
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-0.png",
    title: "First Day at Planned (Manifesting Mode: ON)",
    description:
      "Snapped this photo when I visited Planned, because sometimes, you’ve got to picture it before you live it! Here’s to hoping this snapshot becomes reality soon. 🤞",
    createdAt: "Feb 18, 2025",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-1.png",
    title: "Até Logo, Not Goodbye",
    description:
      "A heartfelt farewell with my entire family, filled with hugs, laughter, and a few hidden tears as I prepared to head back to Canada. A moment to cherish until the next reunion!",
    createdAt: "Feb 10, 2025",
    location: "Rio de Janeiro, Brazil ",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-2.png",
    title: "Vet Day with Jacs",
    description:
      "Keeping Jacs company while we wait for his vaccine, he’s brave, but I think I might be more nervous than him! 🐶💉",
    createdAt: "Feb 9, 2025",
    location: "Rio de Janeiro, Brazil",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-3.png",
    title: "She Said Yes! ❤️",
    description:
      "On a beautiful beach, with the waves as our witnesses, I asked the biggest question of my life, and she said YES! A moment forever etched in my heart. 💍✨",
    createdAt: "Feb 4, 2025",
    location: "Rio de Janeiro, Brazil",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-4.png",
    title: "A Very Merry Montreal Christmas",
    description:
      "First Christmas at my girlfriend's house, warm lights, cozy vibes, and a heart full of love. The best gift? Being together.",
    createdAt: "Dec 25, 2024",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-5.png",
    title: "Shredding the Slopes",
    description:
      "Carving through the snow at Saint-Bruno, maybe not Olympic-level, but definitely having a blast (and a few wipeouts)! 🏂❄️",
    createdAt: "Dec 7, 2024",
    location: "Saint-Bruno, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-6.png",
    title: "Caffeine & Code",
    description:
      "Fueling the grind with some coffee and code, Montreal’s vibe is the perfect backdrop for getting things done. ☕💻",
    createdAt: "Oct 29, 2024",
    location: "Montreal, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-7.png",
    title: "Code Crew Vibes",
    description:
      "When coding turns into a team effort, collaborating with two friends, sharing ideas, and making magic happen. 💻✨",
    createdAt: "Oct 19, 2024",
    location: "Montreal, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-8.png",
    title: "Sibling Adventures at the Coliseum",
    description:
      "Exploring history with my sister by my side, standing in awe of the mighty Coliseum, soaking in every moment. 🏛️",
    createdAt: "Aug 5, 2024",
    location: "Rome, Italy",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-9.png",
    title: "Code Break by the Fountain",
    description:
      "Taking a well-deserved smile break while coding, with Rome’s stunning fountain as the perfect backdrop. Who says you can’t mix work and play? 💻⛲",
    createdAt: "Aug 4, 2024",
    location: "Rome, Italy",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-10.png",
    title: "Eiffel Tower, Sibling Love",
    description:
      "A picture-perfect moment with my sister, standing tall in front of the iconic Eiffel Tower—memories made in the heart of Paris. 🗼❤️",
    createdAt: "Aug 3, 2024",
    location: "Paris, France",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-11.png",
    title: "Late-Night Code Session",
    description:
      "When the inspiration strikes at 3 AM, and the living room turns into my coding haven. Another screen on the TV, caffeine in hand, and the city quietly buzzing outside. 💻☕",
    createdAt: "Jul 23, 2024",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-12.png",
    title: "Dreams in the Fast Lane",
    description:
      "Living the Formula 1 dream with my dad by my side—heart racing, engines roaring, and memories made that will last a lifetime. 🏎️💨",
    createdAt: "Jun 7, 2024",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-13.png",
    title: "Sunday Pickleball Fun",
    description:
      "A perfect Sunday afternoon, playing pickleball with my dad—laughs, friendly competition, and memories in the making. 🏓☀️",
    createdAt: "Jun 2, 2024",
    location: "Hampstead, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-14.png",
    title: "10K Finish Line Feels",
    description:
      "Post-run high with the Montreal Running Club, feeling proud, exhausted, and ready for the next challenge. Saturdays are for running! 🏃‍♂️💨",
    createdAt: "Apr 20, 2024",
    location: "Montreal, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-15.png",
    title: "Warmth in the Cold",
    description:
      "A chilly day in Quebec City, but the warmth of a kiss on my mom’s cheek kept the cold at bay. Moments like this are priceless. ❄️❤️",
    createdAt: "Mar 2, 2024",
    location: "Quebec City, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-16.png",
    title: "Digital Marketing Specialist – Mission Accomplished!”",
    description:
      "Walking across the stage, diploma in hand, marking the end of one chapter and the exciting start of another. Onward to new opportunities! 🎓💻",
    createdAt: "Oct 17, 2023",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-17.png",
    title: "Peak Moments at Saguenay Fjord",
    description:
      "At the summit of a challenging trail, with breathtaking views of the Saguenay Fjord stretching below. The hard climb was worth every step! ⛰️🌲",
    createdAt: "Oct 12, 2023",
    location: "Rivière-Éternité, Québec",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-18.png",
    title: "New Car, New Vibes",
    description:
      "On top of the world—and the hood of my new car! Feeling unstoppable and happier than ever with this milestone. 🚗💨",
    createdAt: "Sept 21, 2023",
    location: "Laval, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-19.png",
    title: "Coding in Little Italy",
    description:
      "Surrounded by the energy of Little Italy, with my setup in full swing—two monitors and a MacBook, juggling code, calendars, and debuggers like a pro. 💻🍝",
    createdAt: "Jun 30, 2023",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-20.png",
    title: "Meeting a F1 Legend: Valtteri Bottas",
    description:
      "A moment to remember—meeting Valtteri Bottas and soaking in the thrill of Formula 1 fandom. Still can’t believe it happened! 🏎️🤩",
    createdAt: "Jun 14, 2023",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-21.png",
    title: "Friendship and Memories at Field Office",
    description:
      "Celebrating the friendships forged at Field Office, what started as colleagues turned into lifelong friends. This after-party was just a glimpse of the memories we’ve created together. 🥂🤗",
    createdAt: "May 26, 2023",
    location: "Montreal, QC, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-22.png",
    title: "The Journey Begins",
    description:
      "Passport in hand, heart full of excitement (and a little nervousness), boarding the plane for a new chapter from Brazil to Canada. The adventure of a lifetime starts now! ✈️🌎",
    createdAt: "Nov 2, 2022",
    location: "Rio de Janeiro, Brazil",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-23.png",
    title: "A Farewell to Remember",
    description:
      "Surrounded by my best friends, sharing laughs and good times as I said goodbye to Brazil. The memories from this farewell party will stay with me forever. 💕🎉",
    createdAt: "Oct 22, 2022",
    location: "Rio de Janeiro, Brazil",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-24.png",
    title: "Pre-Christmas Cheers with Friends",
    description:
      "Gathering with my closest friends before Christmas, laughter, good vibes, and the warmth of friendship filling the air. The holiday season started early! 🎄✨",
    createdAt: "Dec 23, 2021",
    location: "Rio de Janeiro, Brazil",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-25.png",
    title: "Easter with the Family",
    description:
      "Celebrating Easter surrounded by family, sharing love, laughter, and delicious food. Moments like these are what make holidays truly special. 🐣💖",
    createdAt: "Apr 4, 2021",
    location: "Rio de Janeiro, Brazil",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-26.png",
    title: "Christmas Magic with Family",
    description:
      "A cozy Christmas Eve with family, filled with festive cheer, love, and unforgettable memories. The perfect way to celebrate the season! 🎄🎁",
    createdAt: "Dec 24, 2020",
    location: "Rio de Janeiro, Brazil",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-27.png",
    title: "Snowy Firsts in Canada",
    description:
      "Stepping into Canada for the first time and witnessing the magic of snow, everything was new, exciting, and a little chilly! ❄️🇨🇦",
    createdAt: "Nov 29, 2019",
    location: "Toronto, ON, Canada",
  },
  {
    userId: crypto.randomUUID(),
    id: crypto.randomUUID(),
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-28.png",
    title: "Not Impressed by the Giraffe",
    description:
      "A kid at the zoo, unimpressed by the giraffe towering in the background. Guess I was more into the adventure than the animals! 🦒🙄",
    createdAt: "Sep 15, 2004",
    location: "Rio de Janeiro, Brazil ",
  },
] as MemoryType[];

export const INITIAL_PROFILE = {
  userId: crypto.randomUUID(),
  imageUrl:
    "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/profile/profile-pic.jpg",
  name: "Victor Saisse",
  bio: "Passionate Software Engineer and Code Enthusiast 🚀",
  location: "Montreal, QC, Canada",
  bannerUrl:
    "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-1.jpg",
} as ProfileType;

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
