import { useToast } from "@/hooks/use-toast";
import { MemoryType } from "@/lib/types";
import { updateMemory } from "@/services/update-memory";
import { uploadMemory } from "@/services/upload-memory";
import { useDemoStore } from "@/store/use-demo-store";
import { useUserStore } from "@/store/use-user-store";
import moment from "moment";
import { useState } from "react";

interface UseMemoryFormProps {
  memory?: MemoryType;
  isDemo?: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

export function useMemoryForm({
  memory,
  isDemo,
  onClose,
  imageUrl,
}: UseMemoryFormProps) {
  const { demo, setDemo } = useDemoStore();
  const { user, setUser } = useUserStore();
  const { toast } = useToast();

  const [title, setTitle] = useState(memory?.title ?? "");
  const [description, setDescription] = useState(memory?.description ?? "");
  const [location, setLocation] = useState(memory?.location ?? "");
  const [date, setDate] = useState<Date>(
    new Date(memory?.createdAt ?? new Date())
  );
  const [dateError, setDateError] = useState<string | null>(null);

  const formatedDate = moment(date).format("MMM D, YYYY");

  const resetForm = () => {
    setTitle(memory?.title ?? "");
    setDescription(memory?.description ?? "");
    setLocation(memory?.location ?? "");
    setDate(new Date(memory?.createdAt ?? new Date()));
    setDateError(null);
    onClose();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!date) {
      setDateError("Date is required");
      return;
    }

    setDateError(null);

    if (memory) {
      updateExistingMemory();
    } else {
      createNewMemory();
    }

    resetForm();
  };

  const updateExistingMemory = async () => {
    const updatedMemory = {
      ...memory!,
      imageUrl: imageUrl ?? undefined,
      title,
      description,
      createdAt: formatedDate,
      location,
    };

    try {
      await updateMemory({ memory: updatedMemory });
    } catch (error) {
      console.error("Error updating memory:", error);
      toast({
        title: "Error updating memory",
        description: "Your memory has not been updated successfully!",
        variant: "destructive",
      });
    } finally {
      if (isDemo) {
        setDemo({
          ...demo,
          memories: demo.memories.map((memo) =>
            memo.id === memory!.id ? updatedMemory : memo
          ),
        });
      } else {
        if (!user) return;
        setUser({
          ...user,
          memories: user.memories.map((memo) =>
            memo.id === memory!.id ? updatedMemory : memo
          ),
        });
      }

      toast({
        title: "Memory updated",
        description: "Your memory has been updated successfully!",
      });
    }
  };

  const createNewMemory = async () => {
    const newMemory = {
      userId: isDemo ? demo.id : user!.id,
      id: crypto.randomUUID(),
      imageUrl: imageUrl ?? undefined,
      title,
      description,
      createdAt: formatedDate,
      location,
    };

    if (isDemo) {
      try {
        await uploadMemory({ memory: newMemory });
      } catch (error) {
        console.error("Error uploading memory:", error);
      } finally {
        setDemo({ ...demo, memories: [...demo.memories, newMemory] });
        toast({
          title: "Memory created",
          description: "Your memory has been created successfully!",
        });
      }
    } else {
      if (!user) return;

      try {
        await uploadMemory({ memory: newMemory });
      } catch (error) {
        console.error("Error uploading memory:", error);
        toast({
          title: "Error uploading memory",
          variant: "destructive",
          description: "Your memory has not been created successfully!",
        });
      } finally {
        setUser({ ...user, memories: [...user.memories, newMemory] });
        toast({
          title: "Memory created",
          description: "Your memory has been created successfully!",
        });
      }
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    location,
    setLocation,
    date,
    setDate,
    dateError,
    handleSubmit,
  };
}
