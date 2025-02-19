"use client";

import LoadingPage from "@/components/global/loading-page";
import { motion } from "framer-motion";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function RedirectHandler() {
  const searchParams = useSearchParams();
  if (searchParams.get("code")) {
    redirect(`/my-memories?code=${searchParams.get("code")}`);
  }
  return null;
}

export default function Plamory() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <RedirectHandler />
      </Suspense>
      <div
        className="bg-gray-50 py-10 min-h-dvh bg-cover bg-center pt-24"
        style={{ backgroundImage: "url(/images/gradient-bg.webp)" }}
      >
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl font-caveat"
          >
            Your memories, Your way!
          </motion.p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:row-span-2"
            >
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Your feed, your memories
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-600 max-lg:text-center">
                    Your timeline of life&apos;s special moments. From family
                    celebrations to adventures with friends, all beautifully
                    organized in one place.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden">
                    <Image
                      priority
                      className="size-full object-cover object-top"
                      src="/images/feed.png"
                      alt="Feed"
                      width={810}
                      height={1670}
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative max-lg:row-start-1"
            >
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Flexibility
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-600 max-lg:text-center">
                    Never miss a moment with our flexible filters and views.
                    Sort your memories by date, change the view to a grid, or a
                    list.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/images/filters.png"
                    alt="Filters"
                    width={1251}
                    height={440}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
            >
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Customize your profile
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-600 max-lg:text-center">
                    Add a profile picture, a bio, and more.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <Image
                    className="w-full h-auto object-contain"
                    src="/images/profile.png"
                    alt="Profile"
                    width={1191}
                    height={494}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative lg:row-span-2"
            >
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Meet Planny
                  </p>
                  <p className="mt-2 text-sm/6 text-gray-600 max-lg:text-center">
                    Your AI assistant to help you with your questions, get
                    instant insights on all your memories.
                  </p>
                </div>
                <div className="@container relative min-h-[10rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="p-4">
                    <Image
                      priority
                      className="w-full h-auto object-contain"
                      src="/images/ai-chat.png"
                      alt="AI Chat"
                      width={621}
                      height={906}
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
