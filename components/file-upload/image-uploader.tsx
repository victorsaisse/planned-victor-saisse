"use client";

import ImageUploaderInput from "@/components/file-upload/image-uploader-input";
import { uploadImage } from "@/services/image-upload";
import Image from "next/image";
import { useCallback, useState } from "react";

type ImageUploaderProps = {
  userId: string;
  type: "user" | "demo";
};

export default function ImageUploader({ userId, type }: ImageUploaderProps) {
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
        setIsUploading(false);
      } catch (error) {
        console.error(error);
        setError("Error uploading image, please try again.");
        setIsUploading(false);
      }
    },
    [userId, type]
  );

  return (
    <div className="mt-10">
      {!imageUrl && <ImageUploaderInput handleUpload={handleUpload} />}

      {isUploading && <p>Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {imageUrl && (
        <Image
          className="mt-10"
          src={imageUrl}
          alt="Uploaded Image"
          width={500}
          height={500}
        />
      )}
    </div>
  );
}
