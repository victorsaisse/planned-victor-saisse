"use client";

import ImageUploaderInput from "@/components/file-upload/image-uploader-input";
import ConfirmationDialog from "@/components/global/confirmation-dialog";
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
import { useMemoryDelete } from "@/hooks/use-memory-delete";
import { useMemoryForm } from "@/hooks/use-memory-form";
import { MemoryType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Trash2 } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

type MemorySheetProps = {
  isDemo?: boolean;
  memory?: MemoryType;
  children: React.ReactNode;
};

export default function MemorySheet({
  isDemo,
  memory,
  children,
}: MemorySheetProps) {
  const { demo } = useDemoStore();
  const { user } = useUserStore();
  const [open, setOpen] = useState(false);

  const {
    imageUrl,
    setImageUrl,
    isUploading,
    error,
    handleUpload,
    handleDelete,
  } = useImageUpload({
    userId: isDemo ? demo.id : user?.id!,
    type: isDemo ? "demo" : "user",
  });

  const {
    title,
    setTitle,
    description,
    setDescription,
    location,
    setLocation,
    date,
    setDate,
    dateError,
    handleSubmit,
  } = useMemoryForm({
    memory,
    isDemo,
    onClose: () => setOpen(false),
    imageUrl,
  });

  const {
    isConfirmingDelete,
    setIsConfirmingDelete,
    handleConfirmDelete,
    handleDeleteMemory,
  } = useMemoryDelete(memory, isDemo);

  const resetForm = () => {
    setTitle(memory?.title ?? "");
    setDescription(memory?.description ?? "");
    setLocation(memory?.location ?? "");
    setDate(new Date(memory?.createdAt ?? new Date()));
    setImageUrl(memory?.imageUrl ?? null);
  };

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open, memory]);

  return (
    <Fragment>
      <ConfirmationDialog
        open={isConfirmingDelete}
        setOpen={setIsConfirmingDelete}
        onConfirm={handleDeleteMemory}
        onCancel={() => setIsConfirmingDelete(false)}
        title="Delete Memory"
        description="Are you sure you want to delete this memory?"
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <div onClick={() => setOpen(true)}>{children}</div>
        <SheetContent className="sm:min-w-[600px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>{memory ? "Edit Memory" : "New Memory"}</SheetTitle>
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
                {dateError && (
                  <p className="text-red-500 text-sm">{dateError}</p>
                )}
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

            <div className="flex gap-2">
              {memory && (
                <Button
                  type="button"
                  variant={"outline"}
                  className="mt-4"
                  onClick={() => {
                    handleConfirmDelete();
                  }}
                >
                  <Trash2 />
                </Button>
              )}

              <Button
                type="button"
                variant={"outline"}
                className="w-full mt-4"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button type="submit" className="w-full mt-4">
                {memory ? "Update Memory" : "Create Memory"}
              </Button>
            </div>
          </form>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}
