import ShareCard from "@/components/share/share-card";

export default function MemoryPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const memory = {
    id: "1",
    imageUrl:
      "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/image-0.png",
    title: "Memory Title",
    description: "Memory Description",
    location: "Memory Location",
    createdAt: "Feb 20, 2025",
  };

  const fallbackImage =
    "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/og-image/og-image.png";

  return <ShareCard memory={memory} fallbackImage={fallbackImage} />;
}
