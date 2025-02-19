import EditButton from "@/components/global/edit-button";
import ShareButton from "@/components/global/share-button";
import { MemoryType } from "@/lib/types";
import { MapPin } from "lucide-react";
import Image from "next/image";

type BlockCardProps = {
  memory: MemoryType;
};

export default function BlockCard({ memory }: BlockCardProps) {
  return (
    <div
      className={`w-full relative overflow-hidden rounded-lg group ${
        memory.imageUrl ? "aspect-square" : "aspect-video"
      }`}
    >
      <Image
        src={
          memory.imageUrl ??
          "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-1.jpg"
        }
        alt="memory"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent from-0% via-50% to-100%">
        <div className="absolute top-4 right-4 flex flex-col gap-4 items-end">
          <p className="text-black text-sm py-1 px-3 bg-white font-light italic rounded-full">
            {memory.createdAt}
          </p>
          <EditButton />
          <ShareButton />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
          <p className="text-white text-2xl md:text-4xl font-medium font-caveat">
            {memory.title}
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-white text-sm md:text-base font-light italic">
              {memory.description}
            </p>
            <p className="text-white text-sm flex items-center gap-1 font-light italic">
              <MapPin size={16} /> {memory.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
