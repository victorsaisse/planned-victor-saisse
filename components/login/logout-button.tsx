"use client";

import { signout } from "@/lib/auth-actions";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function LogoutButton() {
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
    return (
      <Button
        onClick={() => {
          signout();
          setUser(null);
        }}
      >
        Log out
      </Button>
    );
  }
}
