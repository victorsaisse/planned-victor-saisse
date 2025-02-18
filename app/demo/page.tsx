import { MapPinIcon } from "@/components/icons";
import ProfileBanner from "@/components/profile/banner";
import ProfilePicture from "@/components/profile/profile-picture";

export default function Demo() {
  return (
    <>
      <ProfileBanner />
      <div className="max-w-[900px] mx-auto px-2 relative">
        <ProfilePicture />
        <div className="pl-[200px] pt-2 flex flex-col gap-1">
          <h1 className="text-2xl font-bold">Victor Saisse</h1>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500 text-sm">
              Passionate Software Engineer and Code Enthusiast 🚀
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon />
              <span className="text-gray-500 text-sm">
                Montreal, QC, Canada
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
