"use client";

import { Button } from "@/components/ui/button";
import { signout } from "@/lib/auth-actions";

export default function LogoutButton() {
  return (
    <Button
      className="absolute top-4 right-2 bg-white text-black hover:bg-gray-100 transition-all duration-200 border border-[#E0E0E3] shadow-none"
      onClick={() => {
        signout();
      }}
    >
      Log out
    </Button>
  );
}
