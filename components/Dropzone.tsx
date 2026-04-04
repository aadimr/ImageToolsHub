"use client";

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloud } from 'lucide-react';
import { cn } from '@/utils/cn';

interface DropzoneProps {
  onFileDrop: (file: File) => void;
  className?: string;
  onError: (msg: string) => void;
}

export function Dropzone({ onFileDrop, className, onError }: DropzoneProps) {
  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    if (fileRejections.length > 0) {
      const error = fileRejections[0]?.errors[0];
      if (error?.code === 'file-too-large') {
        onError("File is too large. Max size is 10MB.");
      } else if (error?.code === 'file-invalid-type') {
        onError("Invalid file type. Only JPG, PNG, and WebP are supported.");
      } else {
        onError(error?.message || "Error uploading file.");
      }
      return;
    }
    
    if (acceptedFiles && acceptedFiles.length > 0) {
      onFileDrop(acceptedFiles[0]);
    }
  }, [onFileDrop, onError]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-white px-6 py-20 transition-all duration-200 ease-in-out",
        isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-indigo-400 hover:bg-gray-50",
        isDragReject ? "border-red-500 bg-red-50" : "",
        className
      )}
    >
      <input {...getInputProps()} />
      <div className={cn(
        "rounded-full p-4 transition-transform duration-200 group-hover:scale-110",
        isDragActive ? "bg-indigo-100" : "bg-gray-50",
        isDragReject ? "bg-red-100" : ""
      )}>
        <UploadCloud className={cn(
          "h-10 w-10",
          isDragActive ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-500",
          isDragReject ? "text-red-500" : ""
        )} />
      </div>
      <div className="mt-6 text-center">
        <p className="text-xl font-semibold text-gray-900">
           Drop your image here, or <span className="text-indigo-600">click to browse</span>
        </p>
        <p className="mt-2 text-sm text-gray-500">
           Supports JPG, PNG, WebP relative to 10MB
        </p>
      </div>
    </div>
  );
}
