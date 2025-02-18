import Divider from "@/components/divider";
import BlockImageCard from "@/components/feed/block-image-card";
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
          <div className="px-4 sticky top-4 self-start">
            <YearsTimeline />
          </div>
          <div className="flex flex-col gap-4">
            <BlockImageCard />
            <BlockImageCard />
            <BlockImageCard />
            <BlockImageCard />
            <BlockImageCard />
          </div>
        </div>
      </div>
    </>
  );
}
