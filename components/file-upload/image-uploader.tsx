"use client";

import { uploadImage } from "@/services/image-upload";
import { useCallback } from "react";

export default function ImageUploader() {
  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Convert file to FormData which is supported by Server Actions
      const formData = new FormData();
      formData.append("file", file);

      try {
        const data = await uploadImage(formData);
        console.log("Uploaded image URL:", data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    },
    []
  );

  return <input type="file" onChange={(e) => handleUpload(e)} />;
}
