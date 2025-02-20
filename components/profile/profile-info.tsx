import EditButton from "@/components/global/edit-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useIsDemo } from "@/hooks/use-is-demo";
import { useToast } from "@/hooks/use-toast";
import { ProfileType } from "@/lib/types";
import { updateProfile } from "@/services/update-profile";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import { MapPin } from "lucide-react";
import { Fragment, useState } from "react";

export default function ProfileInfo({ profile }: { profile: ProfileType }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Fragment>
      <ProfileInfoEditDialog
        profile={profile}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
      <div className="md:pl-[200px] pt-[100px] items-center md:items-start md:pt-2 flex flex-col gap-1 ">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          {profile.name}
          <EditButton
            tooltipText="Edit profile info"
            onClick={() => setIsDialogOpen(true)}
          />
        </h1>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-sm max-md:text-center">
            {profile.bio}
          </p>
          <p className="flex items-center gap-1 max-md:justify-center">
            <MapPin size={16} className="text-gray-500" />
            <span className="text-gray-500 text-sm max-md:text-center">
              {profile.location}
            </span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

function ProfileInfoEditDialog({
  profile,
  isDialogOpen,
  setIsDialogOpen,
}: {
  profile: ProfileType;
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
}) {
  const { demo, setDemo } = useDemoStore();
  const { user, setUser } = useUserStore();
  const isDemo = useIsDemo();

  const { toast } = useToast();
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [location, setLocation] = useState(profile.location);

  const handleSaveProfileInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDemo) {
      setDemo({
        ...demo,
        profile: {
          ...profile,
          name,
          bio,
          location,
        },
      });

      toast({
        title: "Profile info updated",
        description: "Your profile info has been updated successfully!",
      });
    } else {
      if (!user) return;

      const updatedUserProfile = {
        ...user.profile,
        name,
        bio,
        location,
      };

      try {
        await updateProfile({ profile: updatedUserProfile });
      } catch (error) {
        console.error("Error updating user:", error);
        toast({
          title: "Error updating profile info",
          description: "Your profile info has not been updated",
          variant: "destructive",
        });
      } finally {
        setUser({ ...user, profile: updatedUserProfile });
        toast({
          title: "Profile info updated",
          description: "Your profile info has been updated successfully!",
        });
      }
    }

    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile Info</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSaveProfileInfo}>
          <div className="flex flex-col gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="bio">
                Bio <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="bio"
                required
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                maxLength={200}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="location">
                Location <span className="text-red-500">*</span>
              </Label>
              <Input
                id="location"
                required
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                maxLength={50}
              />
            </div>
          </div>
          <DialogFooter className="flex flex-col gap-2 mt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
