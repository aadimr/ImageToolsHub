"use client";

import React, { useState, useEffect } from 'react';
import imageCompression from 'browser-image-compression';
import { Dropzone } from './Dropzone';
import { Download, AlertCircle, RefreshCw, ChevronRight, Settings2, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/utils/cn';

type CompressionLevel = 'low' | 'medium' | 'high';

const COMPRESSION_SETTINGS = {
  low: { maxSizeMB: 2, maxWidthOrHeight: 1920, label: 'Low (High Quality)' },
  medium: { maxSizeMB: 0.5, maxWidthOrHeight: 1280, label: 'Medium (Balanced)' },
  high: { maxSizeMB: 0.1, maxWidthOrHeight: 800, label: 'High (Smallest Size)' },
};

export function ImageCompressor() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [compressedPreview, setCompressedPreview] = useState<string>('');
  
  const [compressionLevel, setCompressionLevel] = useState<CompressionLevel>('medium');
  const [isCompressing, setIsCompressing] = useState(false);
  const [error, setError] = useState<string>('');

  // Cleanup object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      if (originalPreview) URL.revokeObjectURL(originalPreview);
      if (compressedPreview) URL.revokeObjectURL(compressedPreview);
    };
  }, [originalPreview, compressedPreview]);

  const handleFileDrop = (file: File) => {
    setError('');
    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setCompressedFile(null);
    setCompressedPreview('');
  };

  const handleError = (msg: string) => {
    setError(msg);
    // Reset state if error occurs during drop
    if (!originalFile) {
       setOriginalFile(null);
       setOriginalPreview('');
    }
  };

  const handleCompress = async () => {
    if (!originalFile) return;
    
    setIsCompressing(true);
    setError('');
    
    try {
      const options = {
        maxSizeMB: COMPRESSION_SETTINGS[compressionLevel].maxSizeMB,
        maxWidthOrHeight: COMPRESSION_SETTINGS[compressionLevel].maxWidthOrHeight,
        useWebWorker: true,
      };

      const result = await imageCompression(originalFile, options);
      setCompressedFile(result);
      setCompressedPreview(URL.createObjectURL(result));
    } catch (err) {
      console.error(err);
      setError('An error occurred during compression.');
    } finally {
      setIsCompressing(false);
    }
  };

  const reset = () => {
    setOriginalFile(null);
    setOriginalPreview('');
    setCompressedFile(null);
    setCompressedPreview('');
    setError('');
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateSavings = () => {
    if (!originalFile || !compressedFile) return 0;
    return Math.round((1 - compressedFile.size / originalFile.size) * 100);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {error && (
        <div className="flex items-center space-x-3 rounded-lg bg-red-50 p-4 text-red-600 border border-red-200">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {!originalFile ? (
        <Dropzone onFileDrop={handleFileDrop} onError={handleError} />
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
            {/* Original Image Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900">Original</span>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {formatSize(originalFile.size)}
                </span>
              </div>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={originalPreview} alt="Original" className="object-contain w-full h-full" />
              </div>
            </div>

            {/* Middle Controls */}
            <div className="flex flex-col items-center space-y-4 px-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 md:bg-transparent md:border-none md:p-0">
              <div className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-gray-400">
                <ChevronRight size={24} />
              </div>
              
              {!compressedFile && (
                <div className="flex flex-col space-y-4 w-full md:w-48">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Settings2 size={16} /> Compression
                    </label>
                    <select
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      value={compressionLevel}
                      onChange={(e) => setCompressionLevel(e.target.value as CompressionLevel)}
                      disabled={isCompressing}
                    >
                      {Object.entries(COMPRESSION_SETTINGS).map(([key, setting]) => (
                        <option key={key} value={key}>{setting.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={handleCompress}
                    disabled={isCompressing}
                    className="flex w-full items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isCompressing ? (
                      <>
                        <RefreshCw className="animate-spin" size={18} />
                        <span>Compressing...</span>
                      </>
                    ) : (
                      <span>Compress Image</span>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Compressed Image Card */}
            <div className={cn(
              "rounded-2xl border p-6 flex flex-col items-center transition-all duration-300",
              compressedFile ? "border-green-200 bg-green-50/30 shadow-sm" : "border-gray-200 border-dashed bg-gray-50/50"
            )}>
              <div className="w-full flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900">Compressed</span>
                {compressedFile && (
                  <span className="text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded flex items-center gap-1">
                    {formatSize(compressedFile.size)} 
                    <span className="text-xs">(-{calculateSavings()}%)</span>
                  </span>
                )}
              </div>
              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-white border border-gray-200 flex items-center justify-center">
                {compressedFile ? (
                   /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={compressedPreview} alt="Compressed" className="object-contain w-full h-full" />
                ) : (
                  <div className="text-gray-400 flex flex-col items-center">
                    <ImageIcon size={32} className="opacity-20 mb-2" />
                    <span className="text-sm font-medium opacity-50">Awaiting compression</span>
                  </div>
                )}
              </div>

              {compressedFile && (
                <a
                  href={compressedPreview}
                  download={`compressed-${originalFile.name}`}
                  className="mt-6 flex w-full items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-green-700"
                >
                  <Download size={18} />
                  <span>Download Image</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={reset}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors underline underline-offset-4"
            >
              Start over with a new image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
