import Image from "next/image";
import EditButton from "@/components/profile/edit-button";

export default function ProfilePicture() {
  const profilePictureUrl =
    "https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/profile/profile-pic.jpg";
  return (
    <div className="absolute top-[-90px] left-2">
      <div className="relative">
        <Image
          src={profilePictureUrl}
          alt="Profile Picture"
          width={180}
          height={180}
          className="rounded-full border-4 border-white"
        />
        <EditButton className="absolute bottom-0 right-[30px]" />
      </div>
    </div>
  );
}
