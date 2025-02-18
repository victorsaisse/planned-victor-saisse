import EditButton from "@/components/global/edit-button";
import Image from "next/image";

type ProfilePictureProps = {
  imageUrl?: string;
  letter: string;
};

export default function ProfilePicture({
  imageUrl,
  letter,
}: ProfilePictureProps) {
  return (
    <div className="absolute top-[-90px] md:left-2  left-1/2 transform max-md:-translate-x-1/2 ">
      <div className="relative">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Profile Picture"
            width={180}
            height={180}
            className="rounded-full border-4 border-white"
          />
        ) : (
          <ProfilePicturePlaceholder letter={letter} />
        )}
        <EditButton className="absolute bottom-0 right-[30px]" />
      </div>
    </div>
  );
}

function ProfilePicturePlaceholder({ letter }: { letter: string }) {
  return (
    <div className="w-[180px] h-[180px] rounded-full bg-gray-200 border-4 border-white flex items-center justify-center">
      <span className="text-6xl font-semibold text-gray-500">{letter}</span>
    </div>
  );
}
