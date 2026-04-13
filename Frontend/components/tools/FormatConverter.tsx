"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Dropzone } from '../Dropzone';
import { Download, AlertCircle, RefreshCw, Settings2, ImageIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

interface FormatConverterProps {
  from?: 'JPG' | 'PNG' | 'WebP';
  to?: 'JPG' | 'PNG' | 'WebP';
}

export function FormatConverter({ from, to }: FormatConverterProps) {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  
  const [convertedURL, setConvertedURL] = useState<string>('');
  const [convertedSize, setConvertedSize] = useState<number>(0);
  
  const [targetFormat, setTargetFormat] = useState<'JPG' | 'PNG' | 'WebP'>(to || 'PNG');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    return () => {
      if (originalPreview) URL.revokeObjectURL(originalPreview);
    };
  }, [originalPreview]);

  const handleFileDrop = (file: File) => {
    setError('');
    // If 'from' constraint is active, enforce it
    if (from) {
      if (from === 'JPG' && !['image/jpeg', 'image/jpg'].includes(file.type)) {
        return setError("Please upload a JPG/JPEG image.");
      }
      if (from === 'PNG' && file.type !== 'image/png') {
        return setError("Please upload a PNG image.");
      }
      if (from === 'WebP' && file.type !== 'image/webp') {
        return setError("Please upload a WebP image.");
      }
    }

    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setConvertedURL('');
  };

  const handleConvert = () => {
    if (!originalFile || !canvasRef.current) return;
    
    setIsProcessing(true);
    setError('');
    
    const img = new Image();
    img.src = originalPreview;
    
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setError("Could not get canvas context.");
        setIsProcessing(false);
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      
      // If converting to JPG, we should fill a white background just in case it was a transparent PNG
      if (targetFormat === 'JPG') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      ctx.drawImage(img, 0, 0);
      
      let mimeType = 'image/png';
      if (targetFormat === 'JPG') mimeType = 'image/jpeg';
      if (targetFormat === 'WebP') mimeType = 'image/webp';
      
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("Conversion failed.");
          setIsProcessing(false);
          return;
        }
        
        const newUrl = URL.createObjectURL(blob);
        setConvertedURL(newUrl);
        setConvertedSize(blob.size);
        setIsProcessing(false);
      }, mimeType, 0.92);
    };
    
    img.onerror = () => {
      setError("Failed to load image for conversion.");
      setIsProcessing(false);
    };
  };

  const reset = () => {
    setOriginalFile(null);
    setOriginalPreview('');
    setConvertedURL('');
    setError('');
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const currentExtension = targetFormat.toLowerCase();

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {error && (
        <div className="flex items-center space-x-3 rounded-lg bg-red-50 dark:bg-red-900/30 p-4 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Hidden Canvas for Processing */}
      <canvas ref={canvasRef} className="hidden" />

      {!originalFile ? (
        <Dropzone onFileDrop={handleFileDrop} onError={setError} />
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
            {/* Original Image Card */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900 dark:text-gray-100">Original</span>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {formatSize(originalFile.size)}
                </span>
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={originalPreview} alt="Original" className="object-contain w-full h-full" />
              </div>
            </div>

            {/* Middle Controls */}
            <div className="flex flex-col items-center space-y-4 px-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 md:bg-transparent md:border-none md:p-0">
              {!convertedURL && (
                <div className="flex flex-col space-y-4 w-full md:w-48">
                  {!to && (
                    <div className="space-y-2">
                       <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                         <Settings2 size={16} /> Target Format
                       </label>
                       <select
                         className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                         value={targetFormat}
                         onChange={(e) => setTargetFormat(e.target.value as any)}
                         disabled={isProcessing}
                       >
                         <option value="JPG">JPG / JPEG</option>
                         <option value="PNG">PNG</option>
                         <option value="WebP">WebP</option>
                       </select>
                    </div>
                  )}
                  
                  <button
                    onClick={handleConvert}
                    disabled={isProcessing}
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="animate-spin" size={18} />
                        <span>Converting...</span>
                      </>
                    ) : (
                      <span>Convert Image</span>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Converted Image Card */}
            <div className={cn(
              "rounded-2xl border p-6 flex flex-col items-center transition-all duration-300",
              convertedURL ? "border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-900/10 shadow-sm" : "border-gray-200 dark:border-gray-800 border-dashed bg-gray-50/50 dark:bg-gray-900/50"
            )}>
              <div className="w-full flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900 dark:text-gray-100">Converted</span>
                {convertedURL && (
                  <span className="text-sm font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded">
                    {formatSize(convertedSize)}
                  </span>
                )}
              </div>
              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                {convertedURL ? (
                   /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={convertedURL} alt="Converted" className="object-contain w-full h-full" />
                ) : (
                  <div className="text-gray-400 dark:text-gray-600 flex flex-col items-center">
                    <ImageIcon size={32} className="opacity-20 mb-2" />
                    <span className="text-sm font-medium opacity-50">Awaiting conversion</span>
                  </div>
                )}
              </div>

              {convertedURL && (
                <a
                  href={convertedURL}
                  download={`converted-${originalFile.name.split('.')[0]}.${currentExtension}`}
                  className="mt-6 flex w-full items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-green-700"
                >
                  <Download size={18} />
                  <span>Download {targetFormat}</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={reset}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors underline underline-offset-4"
            >
              Start over with a new image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
