"use client";

import ShareButton from "@/components/global/share-button";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MemoryType } from "@/lib/types";
import confetti from "canvas-confetti";
import { Check, Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ShareDialog({ memory }: { memory: MemoryType }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const shareUrl = `https://plamory.site/memory/${memory.id}`;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) setIsCopied(false);
      }}
    >
      <DialogTrigger asChild>
        <ShareButton tooltipText="Share memory" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-md overflow-visible">
        {memory.imageUrl && (
          <Image
            src={memory.imageUrl}
            alt="memory image"
            width={200}
            height={200}
            className="rounded-lg w-[80%] mx-auto h-[200px] object-cover -mt-[100px]"
          />
        )}

        <div className="space-y-4">
          <p className="text-center text-4xl font-medium font-caveat">
            Share this memory 🤩
          </p>

          <Input disabled value={shareUrl} className="w-full" />

          <Button
            className={`w-full ${
              isCopied
                ? "bg-green-500 hover:bg-green-600"
                : "bg-black hover:bg-gray-900"
            }`}
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              setIsCopied(true);
              confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 1 },
              });
            }}
          >
            {isCopied ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            {isCopied ? "Copied" : "Copy link"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
