"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

export default function ImageUploaderInput({
  handleUpload,
  imageUrl,
  isUploading,
  error,
  handleDelete,
}: {
  handleUpload: (file: File) => Promise<void>;
  imageUrl: string | null;
  isUploading: boolean;
  error: string | null;
  handleDelete: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const validateFile = (file: File): boolean => {
    if (file.size > MAX_FILE_SIZE) {
      alert("File size must be less than 10MB");
      return false;
    }
    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed");
      return false;
    }
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (validateFile(files[0])) {
        handleUpload(files[0]);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      if (validateFile(files[0])) {
        handleUpload(files[0]);
      }
    }
  };

  return (
    <div className="mt-10">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {isUploading && (
        <div className="flex justify-center items-center h-full flex-col gap-2">
          <div className="w-10 h-10 border-t-transparent border-4 border-black rounded-full animate-spin" />
          <p className="text-sm text-gray-500">Uploading...</p>
        </div>
      )}

      {imageUrl && !isUploading && (
        <div className="relative group">
          <Image
            className="aspect-video object-cover w-full h-full rounded-xl"
            src={imageUrl}
            alt="Uploaded Image"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-xl flex items-center justify-center gap-4">
            <Button
              variant="default"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
              className="hidden group-hover:block"
            >
              Change Image
            </Button>
            <Button
              variant="outline"
              onClick={(e) => {
                e.preventDefault();
                handleDelete();
              }}
              className="hidden group-hover:block"
            >
              Delete
            </Button>
          </div>
        </div>
      )}
      {!imageUrl && !isUploading && (
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`cursor-pointer p-12 flex justify-center bg-white border border-dashed rounded-xl dark:bg-neutral-800 dark:border-neutral-600
            ${
              isDragging
                ? "border-blue-600 border-2 bg-blue-50"
                : "border-gray-300 border-2"
            }`}
        >
          <div className="text-center">
            <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
              <svg
                className="shrink-0 size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" x2="12" y1="3" y2="15"></line>
              </svg>
            </span>
            <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
              <span className="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                Drop your file here or
              </span>
              <span className="font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600">
                browse
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-400 dark:text-neutral-400">
              Pick a file up to 10MB.
            </p>
          </div>
        </div>
      )}

      <p className="text-red-500 text-sm mt-2">{error}</p>
    </div>
  );
}
