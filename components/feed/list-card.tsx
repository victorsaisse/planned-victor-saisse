import EditButton from "@/components/global/edit-button";
import ShareButton from "@/components/global/share-button";
import { MemoryType } from "@/lib/types";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import { MapPin } from "lucide-react";
import Image from "next/image";

type ListCardProps = {
  memory: MemoryType;
  isDemo?: boolean;
};

export default function ListCard({ memory, isDemo }: ListCardProps) {
  const { demo } = useDemoStore();
  const { user } = useUserStore();

  const fallbackImage = isDemo
    ? demo.profile.bannerUrl
    : user?.profile.bannerUrl!;

  return (
    <div className="w-full relative overflow-hidden rounded-lg flex flex-col md:flex-row gap-4 bg-[#F2F2F3] border-[1px] border-[#E0E0E0] p-4 shadow-sm">
      <div className="w-full md:w-52 aspect-square relative overflow-hidden rounded-lg">
        <Image
          src={memory.imageUrl ? memory.imageUrl : fallbackImage}
          alt="memory"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="200px"
        />
      </div>
      <div className="absolute top-6 right-6 md:top-4 md:right-4 flex flex-col gap-4 items-end">
        <p className="text-black text-sm py-1 px-3 bg-white font-light italic rounded-full">
          {memory.createdAt}
        </p>
        <EditButton tooltipText="Edit memory" />
        <ShareButton tooltipText="Share memory" />
      </div>

      <div className="flex-1 flex flex-col gap-2 pr-0 md:pr-36 h-full">
        <p className="text-black text-2xl md:text-4xl font-medium font-caveat">
          {memory.title}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-black text-sm md:text-base font-light italic">
            {memory.description}
          </p>
        </div>

        <p className="text-black text-sm flex items-center gap-1 font-light italic mt-auto">
          <MapPin size={16} /> {memory.location}
        </p>
      </div>
    </div>
  );
}
