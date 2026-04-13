"use client";

import React, { useState, useRef, useEffect } from 'react';
import ReactCrop, { type Crop, centerCrop, makeAspectCrop, PixelCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Dropzone } from '../Dropzone';
import { Download, AlertCircle, Scissors } from 'lucide-react';

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop(
      { unit: '%', width: 90 },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export function ImageCropper() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  
  const imgRef = useRef<HTMLImageElement>(null);
  const [croppedURL, setCroppedURL] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    return () => {
      if (originalPreview) URL.revokeObjectURL(originalPreview);
      if (croppedURL) URL.revokeObjectURL(croppedURL);
    };
  }, [originalPreview, croppedURL]);

  const handleFileDrop = (file: File) => {
    setError('');
    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setCroppedURL('');
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    const crop = centerAspectCrop(width, height, 1);
    setCrop(crop);
  };

  const handleCrop = async () => {
    if (!completedCrop || !imgRef.current || !originalFile) return;

    const image = imgRef.current;
    
    // Scale for actual image dimensions vs displayed CSS dimensions
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    const canvas = document.createElement('canvas');
    canvas.width = completedCrop.width * scaleX;
    canvas.height = completedCrop.height * scaleY;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY
    );

    canvas.toBlob((blob) => {
      if (!blob) {
        setError('Crop failed');
        return;
      }
      setCroppedURL(URL.createObjectURL(blob));
    }, originalFile.type);
  };

  const reset = () => {
    setOriginalFile(null);
    setOriginalPreview('');
    setCroppedURL('');
    setError('');
    setCompletedCrop(undefined);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {error && (
        <div className="flex items-center space-x-3 rounded-lg bg-red-50 dark:bg-red-900/30 p-4 text-red-600 dark:text-red-400">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {!originalFile ? (
        <Dropzone onFileDrop={handleFileDrop} onError={setError} />
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8">
            
            {/* Editor Area */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center p-8 border border-gray-200 dark:border-gray-800 overflow-hidden">
              {!croppedURL ? (
                <ReactCrop
                  crop={crop}
                  onChange={(_, percentCrop) => setCrop(percentCrop)}
                  onComplete={(c) => setCompletedCrop(c)}
                  className="max-h-[500px]"
                >
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img ref={imgRef} src={originalPreview} alt="Crop me" onLoad={onImageLoad} className="max-h-[500px] object-contain" />
                </ReactCrop>
              ) : (
                 /* eslint-disable-next-line @next/next/no-img-element */
                <img src={croppedURL} alt="Cropped" className="max-h-[500px] object-contain shadow-md rounded" />
              )}
            </div>

            {/* Controls */}
            <div className="space-y-6 bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col justify-center">
              
              {!croppedURL ? (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Scissors size={20} className="text-indigo-600 dark:text-indigo-400" />
                    Crop Area
                  </h3>
                  <p className="text-sm text-gray-500">
                    Drag the bounds on the image to select the area you want to keep.
                  </p>
                  <button
                    onClick={handleCrop}
                    disabled={!completedCrop?.width || !completedCrop?.height}
                    className="w-full flex items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700 disabled:opacity-50"
                  >
                    <span>Crop Image</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-green-600 dark:text-green-500">Success!</h3>
                  <a
                    href={croppedURL}
                    download={`cropped-${originalFile.name}`}
                    className="w-full flex items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
                  >
                    <Download size={18} />
                    <span>Download Image</span>
                  </a>
                </div>
              )}

              <button
                onClick={reset}
                className="w-full pt-4 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors underline"
              >
                Start over with a new image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
