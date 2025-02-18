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
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <div className="px-4">
            <YearsTimeline />
          </div>
          <div>
            <div className="w-full bg-red-100">a</div>
          </div>
        </div>
      </div>
    </>
  );
}
