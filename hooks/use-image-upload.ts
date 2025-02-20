import { uploadImage } from "@/services/image-upload";
import { useCallback, useState } from "react";

type UseImageUploadProps = {
  userId: string;
  type: "user" | "demo";
};

type UseImageUploadReturn = {
  imageUrl: string | null;
  isUploading: boolean;
  error: string | null;
  handleUpload: (file: File) => Promise<void>;
  handleDelete: () => void;
};

export const useImageUpload = ({
  userId,
  type,
}: UseImageUploadProps): UseImageUploadReturn => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = useCallback(
    async (file: File) => {
      setIsUploading(true);
      setError(null);

      if (!file) {
        setError("No file selected, please select a file to upload.");
        setIsUploading(false);
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        const data = await uploadImage({ formData, userId, type });
        setImageUrl(data);
      } catch (error) {
        console.error(error);
        setError("Error uploading image, please try again.");
      } finally {
        setIsUploading(false);
      }
    },
    [userId, type]
  );

  const handleDelete = useCallback(() => {
    setImageUrl(null);
  }, []);

  return {
    imageUrl,
    isUploading,
    error,
    handleUpload,
    handleDelete,
  };
};
