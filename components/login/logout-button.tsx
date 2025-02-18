"use client";

import { Button } from "@/components/ui/button";
import { signout } from "@/lib/auth-actions";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button
      className="absolute top-8 md:top-4 right-2 bg-white max-md:p-2 text-xs md:text-base text-black hover:bg-gray-100 transition-all duration-200 border border-[#E0E0E3] shadow-none"
      onClick={() => {
        signout();
      }}
    >
      <LogOut size={16} />
      Log out
    </Button>
  );
}
