import EditButton from "@/components/global/edit-button";
import { useToast } from "@/hooks/use-toast";
import { uploadImage } from "@/services/image-upload";
import { updateProfile } from "@/services/update-profile";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import Image from "next/image";
import { useRef, useState } from "react";

type ProfilePictureProps = {
  imageUrl?: string;
  letter: string;
  isDemo?: boolean;
};

export default function ProfilePicture({
  imageUrl,
  letter,
  isDemo,
}: ProfilePictureProps) {
  const { demo, setDemo } = useDemoStore();
  const { user, setUser } = useUserStore();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleEditProfilePicture = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const data = await uploadImage({
        formData,
        userId: demo.id,
        type: "demo",
      });

      if (data) {
        if (isDemo) {
          setDemo({
            ...demo,
            profile: { ...demo.profile, imageUrl: data },
          });

          toast({
            title: "Profile picture updated",
            description: "Your profile picture has been updated successfully!",
          });
        } else {
          if (!user) return;

          const updatedUserProfile = {
            ...user.profile,
            imageUrl: data,
          };

          await updateProfile({ profile: updatedUserProfile });
          setUser({
            ...user,
            profile: updatedUserProfile,
          });

          toast({
            title: "Profile picture updated",
            description: "Your profile picture has been updated successfully!",
          });
        }
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast({
        title: "Error updating profile picture",
        description: "Your profile picture has not been updated successfully!",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="absolute top-[-90px] md:left-2  left-1/2 transform max-md:-translate-x-1/2 ">
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleEditProfilePicture}
        disabled={isLoading}
      />
      <div className="relative">
        {imageUrl ? (
          <div className="relative">
            <Image
              src={imageUrl}
              alt="Profile Picture"
              width={180}
              height={180}
              className="rounded-full border-4 border-white w-[180px] h-[180px] object-cover"
            />

            {isLoading && (
              <div
                id="black-overlay"
                className="absolute inset-0 bg-black opacity-20 rounded-full"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <ProfilePicturePlaceholder letter={letter} />
        )}
        <EditButton
          className={`absolute bottom-0 right-[30px] ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          tooltipText="Edit profile picture"
          onClick={() => fileInputRef.current?.click()}
        />
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
