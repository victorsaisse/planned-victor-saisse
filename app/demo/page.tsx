"use client";

import AiChat from "@/components/ai/ai-chat";
import Memories from "@/components/feed/memories";
import Filters from "@/components/filters/filters";
import Divider from "@/components/global/divider";
import LoadingPage from "@/components/global/loading-page";
import ProfileBanner from "@/components/profile/banner";
import BannerDialog from "@/components/profile/banner-dialog";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import YearsTimeline from "@/components/years-timeline/years-timeline";
import { useDemoStore } from "@/store/use-demo-store";
import { Fragment, Suspense, useState } from "react";

function DemoContent() {
  const { demo } = useDemoStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Fragment>
      <BannerDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        isDemo
      />

      <AiChat aiChat={demo.aiChat} />
      <ProfileBanner
        profile={demo.profile}
        onEdit={() => setIsDialogOpen(true)}
      />

      <div className="max-w-[900px] mx-auto px-2 relative">
        <ProfilePicture
          letter={demo.profile.name.charAt(0)}
          imageUrl={demo.profile.imageUrl}
          isDemo
        />

        <ProfileInfo profile={demo.profile} />

        <Filters isDemo />
        <Divider />

        <div className="grid grid-cols-[auto_1fr] gap-4 mb-8 max-lg:grid-cols-1">
          <div className="px-4 sticky top-4 self-start max-lg:hidden">
            <YearsTimeline memories={demo.memories} />
          </div>

          <Memories memories={demo.memories} isDemo />
        </div>
      </div>
    </Fragment>
  );
}

export default function Demo() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <DemoContent />
    </Suspense>
  );
}
