import AiChat from "@/components/ai/ai-chat";
import Divider from "@/components/divider";
import BlockCard from "@/components/feed/block-card";
import ListCard from "@/components/feed/list-card";
import Separator from "@/components/feed/separator";
import Filters from "@/components/filters/filters";
import ProfileBanner from "@/components/profile/banner";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import YearsTimeline from "@/components/years-timeline/years-timeline";

export default function Demo() {
  return (
    <>
      <AiChat />
      <ProfileBanner />
      <div className="max-w-[900px] mx-auto px-2 relative">
        <ProfilePicture
          letter="V"
          imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/profile/profile-pic.jpg"
        />
        <ProfileInfo />
        <Filters />
        <Divider />
        <div className="grid grid-cols-[auto_1fr] gap-4 mb-8 max-lg:grid-cols-1">
          <div className="px-4 sticky top-4 self-start max-lg:hidden">
            <YearsTimeline />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <ListCard imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg" />
            <ListCard imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg" />
            <ListCard />
            <ListCard />
            <ListCard imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg" />
            <ListCard imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg" />
            <Separator />
            <BlockCard imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg" />
            <Separator />
            <BlockCard imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg" />
            <Separator />
            <BlockCard />
            <Separator />
            <BlockCard />
            <Separator />
            <BlockCard imageUrl="https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/feed/img-1.jpg" />
            <Separator />
            <BlockCard />
            <Separator />
            <p className="text-center text-3xl text-black font-caveat">
              That&apos;s all :)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
