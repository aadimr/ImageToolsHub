import { TOOLS, getToolById } from "@/utils/toolsData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { AdsPlaceholder } from "@/components/ui/AdsPlaceholder";
import { ToolRenderer } from "@/components/ToolRenderer";

import { ImageCompressorSeo } from "@/components/seo/ImageCompressorSeo";
import { ImageResizerSeo } from "@/components/seo/ImageResizerSeo";
import { ImageToPDFSeo } from "@/components/seo/ImageToPDFSeo";
import { JpgToPngSeo } from "@/components/seo/JpgToPngSeo";
import { PngToJpgSeo } from "@/components/seo/PngToJpgSeo";
import { WebpConverterSeo } from "@/components/seo/WebpConverterSeo";
import { ImageCropperSeo } from "@/components/seo/ImageCropperSeo";
import { FormatConverterSeo } from "@/components/seo/FormatConverterSeo";
import { JpgToWebpSeo } from "@/components/seo/JpgToWebpSeo";
import { PngToWebpSeo } from "@/components/seo/PngToWebpSeo";
import { WebpToJpgSeo } from "@/components/seo/WebpToJpgSeo";
import { BackgroundRemoverSeo } from "@/components/seo/BackgroundRemoverSeo";
import { ImageToTextSeo } from "@/components/seo/ImageToTextSeo";
import { AddWatermarkSeo } from "@/components/seo/AddWatermarkSeo";

interface Props {
  params: Promise<{ tool: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const tool = getToolById(p.tool);
  if (!tool) {
    return { title: "Tool Not Found" };
  }
  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
  };
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({
    tool: tool.id,
  }));
}

export default async function ToolPage({ params }: Props) {
  const p = await params;
  const tool = getToolById(p.tool);

  if (!tool) {
    notFound();
  }

  const renderToolSeo = () => {
    switch (tool.id) {
      case "image-compressor": return <ImageCompressorSeo />;
      case "image-resizer": return <ImageResizerSeo />;
      case "image-to-pdf": return <ImageToPDFSeo />;
      case "jpg-to-png": return <JpgToPngSeo />;
      case "png-to-jpg": return <PngToJpgSeo />;
      case "jpg-to-webp": return <JpgToWebpSeo />;
      case "png-to-webp": return <PngToWebpSeo />;
      case "webp-to-jpg": return <WebpToJpgSeo />;
      case "webp-converter": return <WebpConverterSeo />;
      case "image-cropper": return <ImageCropperSeo />;
      case "format-converter": return <FormatConverterSeo />;
      case "remove-background": return <BackgroundRemoverSeo />;
      case "image-to-text": return <ImageToTextSeo />;
      case "add-watermark": return <AddWatermarkSeo />;
      default: return null;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          {tool.metaTitle.split('|')[0].split('–')[0].trim()}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
          {tool.description}
        </p>
      </header>

      {/* Top Ad Placeholder */}
      <AdsPlaceholder location="Top Tool Ad" />

      {/* Interactive Tool Component with Client-Only Dynamic Loading */}
      <div className="mt-8 mb-12 min-h-[400px]">
        <ToolRenderer toolId={tool.id} />
      </div>

      {/* Bottom Ad Placeholder */}
      <AdsPlaceholder location="Bottom Tool Ad" />

      {/* SEO Optimized Content Section */}
      {renderToolSeo()}
    </div>
  );
}
