import Divider from "@/components/divider";
import Filters from "@/components/filters/filters";
import ProfileBanner from "@/components/profile/banner";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import YearsTimeline from "@/components/years-timeline/years-timeline";

export default function Demo() {
  return (
    <>
      <ProfileBanner />
      <div className="max-w-[900px] mx-auto px-2 relative">
        <ProfilePicture />
        <ProfileInfo />
        <Filters />
        <Divider />
        <div className="grid grid-cols-[auto_1fr] gap-4 mb-8">
          <div className="px-4">
            <YearsTimeline />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-full bg-blue-100 h-[500px]"></div>
            <div className="w-full bg-blue-100 h-[500px]"></div>
            <div className="w-full bg-blue-100 h-[500px]"></div>
            <div className="w-full bg-blue-100 h-[500px]"></div>
            <div className="w-full bg-blue-100 h-[500px]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
