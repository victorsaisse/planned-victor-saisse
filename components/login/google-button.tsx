"use client";

import { GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function SignInWithGoogleButton() {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, [supabase.auth]);

  if (user) {
    return null;
  }

  return (
    <Button
      type="button"
      variant="outline"
      className="flex items-center gap-2"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <GoogleIcon /> Continue with Google
    </Button>
  );
}
