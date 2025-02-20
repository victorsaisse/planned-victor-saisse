"use client";

import { usePathname } from "next/navigation";

export function useIsDemo() {
  const pathname = usePathname();
  return pathname?.includes("/demo") ?? false;
}
