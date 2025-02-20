"use client";

import ImageUploaderInput from "@/components/file-upload/image-uploader-input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useImageUpload } from "@/hooks/use-image-upload";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import moment from "moment";
import { useState } from "react";

type MemorySheetProps = {
  isDemo?: boolean;
  memoryId?: string;
  children: React.ReactNode;
};

export default function MemorySheet({
  isDemo,
  memoryId,
  children,
}: MemorySheetProps) {
  const { demo, setDemo } = useDemoStore();
  const { user, setUser } = useUserStore();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [dateError, setDateError] = useState<string | null>(null);
  const formatedDate = moment(date).format("MMM D, YYYY");

  const { imageUrl, isUploading, error, handleUpload, handleDelete } =
    useImageUpload({
      userId: isDemo ? demo.id : user?.id!,
      type: isDemo ? "demo" : "user",
    });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!date) {
      setDateError("Date is required");
      return;
    }

    setDateError(null);

    if (memoryId) {
      if (isDemo) {
        const demoMemory = demo.memories.find(
          (memory) => memory.id === memoryId
        );
        if (demoMemory) {
          demoMemory.imageUrl = imageUrl ?? undefined;
          demoMemory.title = title;
          demoMemory.description = description;
          demoMemory.createdAt = formatedDate;
          demoMemory.location = location;
        }
      } else {
        if (!user) return;
        const userMemory = user.memories.find(
          (memory) => memory.id === memoryId
        );
        if (userMemory) {
          userMemory.imageUrl = imageUrl ?? undefined;
          userMemory.title = title;
          userMemory.description = description;
          userMemory.createdAt = formatedDate;
          userMemory.location = location;
        }
      }

      toast({
        title: "Memory updated",
        description: "Your memory has been updated successfully!",
      });
    } else {
      const newMemory = {
        id: crypto.randomUUID(),
        imageUrl: imageUrl ?? undefined,
        title,
        description,
        createdAt: formatedDate,
        location,
      };

      if (isDemo) {
        setDemo({ ...demo, memories: [...demo.memories, newMemory] });
      } else {
        if (!user) return;
        setUser({ ...user, memories: [...user.memories, newMemory] });
      }

      toast({
        title: "Memory created",
        description: "Your memory has been created successfully!",
      });
    }

    setOpen(false);
    setTitle("");
    setDescription("");
    setLocation("");
    setDate(new Date());
    setDateError(null);
    handleDelete();
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div onClick={() => setOpen(true)}>{children}</div>
      <SheetContent className="sm:min-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{memoryId ? "Edit Memory" : "New Memory"}</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <ImageUploaderInput
            handleUpload={handleUpload}
            imageUrl={imageUrl}
            isUploading={isUploading}
            error={error}
            handleDelete={handleDelete}
          />

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="title"
              placeholder="Title"
              maxLength={100}
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Description"
              maxLength={500}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="date">
              Date <span className="text-red-500">*</span>
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(value) => setDate(value ?? new Date())}
                  initialFocus
                  required
                />
              </PopoverContent>
              {dateError && <p className="text-red-500 text-sm">{dateError}</p>}
            </Popover>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">
              Location <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="location"
              placeholder="Location"
              maxLength={100}
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full mt-4">
            Create Memory
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
