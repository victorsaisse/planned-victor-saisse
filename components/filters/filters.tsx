"use client";

import ImageUploaderInput from "@/components/file-upload/image-uploader-input";
import DateRange from "@/components/filters/date-range";
import SearchFilter from "@/components/filters/search-filter";
import SortBy from "@/components/filters/sort-by";
import ViewType from "@/components/filters/view-type";
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
import { Calendar as CalendarIcon, Plus } from "lucide-react";
import moment from "moment";
import { useState } from "react";

export default function Filters() {
  return (
    <div className="w-full flex sm:justify-end gap-2 mt-8 flex-wrap justify-evenly">
      <SortBy />
      <DateRange />
      <ViewType />
      <SearchFilter />
      <AddNewMemory />
    </div>
  );
}

function AddNewMemory() {
  const handleUpload = async (file: File) => {
    // @TODO: Upload file to supabase storage
    console.log(file);
  };
  const mockDate = "Feb 18, 2024";
  const [date, setDate] = useState<Date>(new Date(mockDate));
  const [dateError, setDateError] = useState<string | null>(null);

  // moment().format("MMM D, YYYY");

  const formatedDate = moment(date).format("MMM D, YYYY");

  console.log("===>> formatedDate", formatedDate);

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
            <Label htmlFor="title">
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="title"
              placeholder="Title"
              maxLength={100}
              required
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
