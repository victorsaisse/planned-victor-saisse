"use client";

import AiChat from "@/components/ai/ai-chat";
import Memories from "@/components/feed/memories";
import Filters from "@/components/filters/filters";
import Divider from "@/components/global/divider";
import LoadingPage from "@/components/global/loading-page";
import ProfileBanner from "@/components/profile/banner";
import ProfileInfo from "@/components/profile/profile-info";
import ProfilePicture from "@/components/profile/profile-picture";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import YearsTimeline from "@/components/years-timeline/years-timeline";
import { BANNERS } from "@/lib/constants";
import { uploadImage } from "@/services/image-upload";
import { useDemoStore } from "@/store/use-demo-store";
import moment from "moment";
import Image from "next/image";
import { Fragment, Suspense, useRef, useState } from "react";

function DemoContent() {
  const { demo, setDemo } = useDemoStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentTime = moment().format("MMM D, YYYY");
  console.log("===>> currentTime", currentTime);

  const handleEditProfilePicture = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    const data = await uploadImage({ formData, userId: demo.id, type: "demo" });

    if (data) {
      setDemo({
        ...demo,
        profile: {
          ...demo.profile,
          imageUrl: data,
        },
      });
    }
  };

  return (
    <Fragment>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Choose your banner</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-5 gap-4 pt-4">
            {BANNERS.map((banner) => (
              <Image
                key={banner}
                src={banner}
                alt="banner"
                width={100}
                height={100}
                className="rounded-lg object-cover cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                onClick={() => {
                  setDemo({
                    ...demo,
                    profile: {
                      ...demo.profile,
                      bannerUrl: banner,
                    },
                  });
                  setIsDialogOpen(false);
                }}
              />
            ))}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleEditProfilePicture}
      />

      <AiChat aiChat={demo.aiChat} />
      <ProfileBanner
        profile={demo.profile}
        onEdit={() => setIsDialogOpen(true)}
      />

      <div className="max-w-[900px] mx-auto px-2 relative">
        <ProfilePicture
          onEdit={() => fileInputRef.current?.click()}
          letter={demo.profile.name.charAt(0)}
          imageUrl={demo.profile.imageUrl}
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
