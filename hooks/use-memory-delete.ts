import { MemoryType } from "@/lib/types";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import { useState } from "react";

export const useMemoryDelete = (
  memory: MemoryType | undefined,
  isDemo?: boolean
) => {
  const { demo, setDemo } = useDemoStore();
  const { user, setUser } = useUserStore();
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleConfirmDelete = () => setIsConfirmingDelete(true);

  const handleDeleteMemory = () => {
    if (isDemo) {
      setDemo({
        ...demo,
        memories: demo.memories.filter((memo) => memo.id !== memory?.id),
      });
    } else {
      if (!user) return;
      setUser({
        ...user,
        memories: user.memories.filter((memo) => memo.id !== memory?.id),
      });
    }
  };

  return {
    isConfirmingDelete,
    setIsConfirmingDelete,
    handleConfirmDelete,
    handleDeleteMemory,
  };
};
