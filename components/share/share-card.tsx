"use client";

import { MemoryType } from "@/lib/types";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

type ShareCardProps = {
  memory: MemoryType;
  fallbackImage: string;
};

export default function ShareCard({ memory, fallbackImage }: ShareCardProps) {
  return (
    <div
      className="bg-gray-50 h-[100dvh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${
          memory.imageUrl ? memory.imageUrl : fallbackImage
        })`,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black/30" />
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: 2,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`relative overflow-hidden rounded-lg group shadow-lg ${
          memory.imageUrl ? "aspect-square" : "aspect-video"
        } w-[80%] max-w-[500px]`}
      >
        <Image
          src={memory.imageUrl ? memory.imageUrl : fallbackImage}
          alt="memory"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent from-0% via-50% to-100%">
          <div className="absolute top-4 right-4 flex flex-col gap-4 items-end">
            <p className="text-black text-sm py-1 px-3 bg-white font-light italic rounded-full">
              {memory.createdAt}
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-2">
            <p className="text-white text-2xl md:text-4xl font-medium font-caveat">
              {memory.title}
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-white text-sm md:text-base font-light italic">
                {memory.description}
              </p>
              <p className="text-white text-sm flex items-center gap-1 font-light italic">
                <MapPin size={16} /> {memory.location}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <a
        href="https://plamory.site"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full p-2 text-center absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <span className="text-white/80 text-base">
          This memory is made possible by{" "}
        </span>
        <span className="text-white text-base hover:text-white/80 transition-colors">
          Plamory
        </span>
      </a>
    </div>
  );
}
