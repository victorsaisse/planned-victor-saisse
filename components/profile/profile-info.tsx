import { ProfileType } from "@/lib/types";
import { MapPin } from "lucide-react";

export default function ProfileInfo({ profile }: { profile: ProfileType }) {
  return (
    <div className="md:pl-[200px] pt-[100px] items-center md:items-start md:pt-2 flex flex-col gap-1 ">
      <h1 className="text-2xl font-bold">{profile.name}</h1>
      <div className="flex flex-col gap-1">
        <p className="text-gray-500 text-sm max-md:text-center">
          {profile.bio}
        </p>
        <p className="flex items-center gap-1 max-md:justify-center">
          <MapPin size={16} className="text-gray-500" />
          <span className="text-gray-500 text-sm max-md:text-center">
            {profile.location}
          </span>
        </p>
      </div>
    </div>
  );
}
