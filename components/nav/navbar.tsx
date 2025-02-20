"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isMemoryShare = pathname.includes("/memory/");

  if (isMemoryShare) return null;

  return (
    <nav className="rounded-xl bg-white/20 backdrop-blur-md shadow-[0_4px_8px_#000000_5%] ring-1 ring-black/5 fixed top-4 z-50 border-[1px] border-[#EDF1F3] ml-[5%] max-w-[90%] w-full px-4 py-2 md:w-auto md:left-1/2 md:-translate-x-1/2 md:mx-auto flex md:gap-2 justify-between text-xs sm:text-sm md:text-base">
      <NavbarLink href="/">Plamory</NavbarLink>
      <NavbarLink href="/demo">Demo</NavbarLink>
      <NavbarLink href="/my-memories">My Memories</NavbarLink>
    </nav>
  );
}

const NavbarLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-md font-light px-2 py-1 rounded-md hover:bg-[#E7F4FE] transition-all duration-200",
        isActive && "font-medium text-[#0085F9] bg-[#E7F4FE]"
      )}
    >
      {children}
    </Link>
  );
};
