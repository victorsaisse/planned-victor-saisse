import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { BANNERS } from "@/lib/constants";
import { updateProfile } from "@/services/update-profile";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import Image from "next/image";

type BannerDialogProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isDialogOpen: boolean) => void;
  isDemo?: boolean;
};

export default function BannerDialog({
  isDialogOpen,
  setIsDialogOpen,
  isDemo,
}: BannerDialogProps) {
  const { demo, setDemo } = useDemoStore();
  const { user, setUser } = useUserStore();

  const { toast } = useToast();

  const handleEditProfileBanner = async (banner: string) => {
    if (isDemo) {
      setDemo({
        ...demo,
        profile: {
          ...demo.profile,
          bannerUrl: banner,
        },
      });
      toast({
        title: "Profile banner updated",
        description: "Your profile banner has been updated successfully!",
      });
    } else {
      if (!user) return;

      const updatedUserProfile = {
        ...user.profile,
        bannerUrl: banner,
      };

      try {
        await updateProfile({ profile: updatedUserProfile });
      } catch (error) {
        console.error("Error updating user:", error);
        toast({
          title: "Error updating profile banner",
          description: "Your profile banner has not been updated successfully!",
          variant: "destructive",
        });
      } finally {
        setUser({
          ...user,
          profile: updatedUserProfile,
        });
        toast({
          title: "Profile banner updated",
          description: "Your profile banner has been updated successfully!",
        });
      }
    }

    setIsDialogOpen(false);
  };

  return (
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
              onClick={() => handleEditProfileBanner(banner)}
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
  );
}
