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
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  AlignJustify,
  ArrowUpDown,
  Calendar as CalendarIcon,
  Grid2x2,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";

export default function Filters() {
  return (
    <div className="w-full flex sm:justify-end gap-2 mt-8 flex-wrap justify-evenly">
      <FilterButton onClick={() => {}}>
        <ArrowUpDown />
      </FilterButton>
      <FilterButton onClick={() => {}}>
        <div className="flex items-center gap-2">
          <CalendarIcon /> All Time
        </div>
      </FilterButton>
      <FilterButton onClick={() => {}} className="bg-[#F2F2F3] px-2">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-sm bg-white hover:bg-white transition-all duration-200">
            <Grid2x2 />
          </div>
          <div className="p-1 rounded-sm  hover:bg-white transition-all duration-200">
            <AlignJustify />
          </div>
        </div>
      </FilterButton>

      <FilterButton onClick={() => {}}>
        <Search />
      </FilterButton>

      <AddNewMemory />
    </div>
  );
}

function FilterButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-white px-3 py-1 rounded-md border-[1px] border-[#E0E0E3] hover:bg-[#F5F5F7] transition-all duration-200 text-sm",
        className
      )}
    >
      {children}
    </button>
  );
}

function AddNewMemory() {
  const handleUpload = async (file: File) => {
    // @TODO: Upload file to supabase storage
    console.log(file);
  };
  const [date, setDate] = useState<Date>();
  const [dateError, setDateError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!date) {
      setDateError("Date is required");
      return;
    }
    setDateError(null);
  };

  return (
    <Sheet>
      <SheetTrigger className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-black/80 transition-all duration-200 ">
        <Plus /> New Memory
      </SheetTrigger>
      <SheetContent className="sm:min-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>New Memory</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <ImageUploaderInput handleUpload={handleUpload} />

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Title"
              maxLength={100}
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              maxLength={500}
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="date">Date</Label>
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
                  onSelect={setDate}
                  initialFocus
                  required
                />
              </PopoverContent>
              {dateError && <p className="text-red-500 text-sm">{dateError}</p>}
            </Popover>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              id="location"
              placeholder="Location"
              maxLength={100}
              required
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
