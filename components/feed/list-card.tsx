import EditButton from "@/components/global/edit-button";
import ShareButton from "@/components/global/share-button";
import { MapPin } from "lucide-react";
import Image from "next/image";

type ListCardProps = {
  imageUrl?: string;
};

export default function ListCard({ imageUrl }: ListCardProps) {
  return (
    <div className="w-full relative overflow-hidden rounded-lg flex flex-col md:flex-row gap-4 bg-[#F2F2F3] border-[1px] border-[#E0E0E0] p-4">
      <div className="w-full md:w-52 aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={
            imageUrl ??
            "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/bgs/gradient-1.jpg"
          }
          alt="memory"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="absolute top-6 right-6 md:top-4 md:right-4 flex flex-col gap-4 items-end">
        <p className="text-black text-sm py-1 px-3 bg-white font-light italic rounded-full">
          Feb 16, 2025
        </p>
        <EditButton />
        <ShareButton />
      </div>

      <div className="flex-1 flex flex-col gap-2 pr-0 md:pr-36 h-full">
        <p className="text-black text-2xl md:text-4xl font-medium font-caveat">
          First Day At Planned
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-black text-sm md:text-base font-light italic">
            Description about the trip or the memory goes over here. Make sure
            to write it good.
          </p>
        </div>

        <p className="text-black text-sm flex items-center gap-1 font-light italic mt-auto">
          <MapPin size={16} /> Montreal, Canada
        </p>
      </div>
    </div>
  );
}
