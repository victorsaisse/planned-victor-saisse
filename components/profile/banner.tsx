import EditButton from "@/components/global/edit-button";
import { ProfileType } from "@/lib/types";

export default function ProfileBanner({ profile }: { profile: ProfileType }) {
  return (
    <div
      className="h-[200px] w-full bg-gray-500 bg-cover bg-center rounded-b-lg"
      style={{ backgroundImage: `url(${profile.bannerUrl})` }}
    >
      <EditButton
        className="absolute top-[185px] md:top-2 right-2"
        tooltipText="Edit banner"
      />
    </div>
  );
}
