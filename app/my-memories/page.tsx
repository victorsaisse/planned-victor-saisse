"use client";

import { RiGoogleFill } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { signInWithGoogleAction } from "../actions";

export default function MyMemories() {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    await signInWithGoogleAction();
    setIsGoogleLoading(false);
  };

  return (
    <div
      className="bg-gray-50 py-10 min-h-dvh bg-cover bg-center pt-24"
      style={{ backgroundImage: "url(/images/gradient-bg.webp)" }}
    >
      <Button
        variant="outline"
        className="w-full"
        onClick={handleGoogleLogin}
        disabled={isGoogleLoading}
      >
        <RiGoogleFill color="black" />
        {isGoogleLoading ? "Connecting..." : "Login with Google"}
      </Button>
    </div>
  );
}
