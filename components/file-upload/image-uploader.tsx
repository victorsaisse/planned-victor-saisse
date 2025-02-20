"use client";

import ImageUploaderInput from "@/components/file-upload/image-uploader-input";
import { useImageUpload } from "@/hooks/use-image-upload";
import Image from "next/image";

type ImageUploaderProps = {
  userId: string;
  type: "user" | "demo";
};

export default function ImageUploader({ userId, type }: ImageUploaderProps) {
  const { imageUrl, isUploading, error, handleUpload } = useImageUpload({
    userId,
    type,
  });

  return (
    <div className="mt-10">
      {!imageUrl && (
        <ImageUploaderInput
          handleUpload={handleUpload}
          imageUrl={imageUrl}
          isUploading={isUploading}
          error={error}
          handleDelete={() => {}}
        />
      )}

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
