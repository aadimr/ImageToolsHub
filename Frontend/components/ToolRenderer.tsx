"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { ToolLoader } from "@/components/ui/ToolLoader";

// Lazy load tool components safely with ssr: false in a Client Component
const ImageCompressor = dynamic(() => import("@/components/ImageCompressor").then(mod => mod.ImageCompressor), { ssr: false, loading: () => <ToolLoader /> });
const ImageResizer = dynamic(() => import("@/components/tools/ImageResizer").then(mod => mod.ImageResizer), { ssr: false, loading: () => <ToolLoader /> });
const ImageToPDF = dynamic(() => import("@/components/tools/ImageToPDF").then(mod => mod.ImageToPDF), { ssr: false, loading: () => <ToolLoader /> });
const FormatConverter = dynamic(() => import("@/components/tools/FormatConverter").then(mod => mod.FormatConverter), { ssr: false, loading: () => <ToolLoader /> });
const ImageCropper = dynamic(() => import("@/components/tools/ImageCropper").then(mod => mod.ImageCropper), { ssr: false, loading: () => <ToolLoader /> });
const BackgroundRemover = dynamic(() => import("@/components/tools/BackgroundRemover").then(mod => mod.BackgroundRemover), { ssr: false, loading: () => <ToolLoader /> });
const ImageToText = dynamic(() => import("@/components/tools/ImageToText").then(mod => mod.ImageToText), { ssr: false, loading: () => <ToolLoader /> });
const AddWatermark = dynamic(() => import("@/components/tools/AddWatermark").then(mod => mod.AddWatermark), { ssr: false, loading: () => <ToolLoader /> });

interface ToolRendererProps {
  toolId: string;
}

export function ToolRenderer({ toolId }: ToolRendererProps) {
  switch (toolId) {
    case "image-compressor": return <ImageCompressor />;
    case "image-resizer": return <ImageResizer />;
    case "image-to-pdf": return <ImageToPDF />;
    case "jpg-to-png": return <FormatConverter from="JPG" to="PNG" />;
    case "png-to-jpg": return <FormatConverter from="PNG" to="JPG" />;
    case "jpg-to-webp": return <FormatConverter from="JPG" to="WebP" />;
    case "png-to-webp": return <FormatConverter from="PNG" to="WebP" />;
    case "webp-to-jpg": return <FormatConverter from="WebP" to="JPG" />;
    case "webp-converter": return <FormatConverter to="WebP" />;
    case "image-cropper": return <ImageCropper />;
    case "format-converter": return <FormatConverter />;
    case "remove-background": return <BackgroundRemover />;
    case "image-to-text": return <ImageToText />;
    case "add-watermark": return <AddWatermark />;
    default: return null;
  }
}
