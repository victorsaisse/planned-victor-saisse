"use client";

import AiChat from "@/components/ai/ai-chat";
import Memories from "@/components/feed/memories";
import Filters from "@/components/filters/filters";
import Divider from "@/components/global/divider";
import ProfileBanner from "@/components/profile/banner";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import YearsTimeline from "@/components/years-timeline/years-timeline";
import { useDemoStore } from "@/store/useDemoStore";
import { Fragment } from "react";

export default function Demo() {
  const { demo } = useDemoStore();

  return (
    <Fragment>
      <AiChat aiChat={demo.aiChat} />
      <ProfileBanner profile={demo.profile} />

      <div className="max-w-[900px] mx-auto px-2 relative">
        <ProfilePicture
          letter={demo.profile.name.charAt(0)}
          imageUrl={demo.profile.imageUrl}
        />

        <ProfileInfo profile={demo.profile} />

        <Filters />
        <Divider />

        <div className="grid grid-cols-[auto_1fr] gap-4 mb-8 max-lg:grid-cols-1">
          <div className="px-4 sticky top-4 self-start max-lg:hidden">
            <YearsTimeline />
          </div>

          <Memories memories={demo.memories} />
        </div>
      </div>
    </Fragment>
  );
}
