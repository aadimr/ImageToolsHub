"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Dropzone } from '../Dropzone';
import { Download, AlertCircle, RefreshCw, Box } from 'lucide-react';

export function ImageResizer() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [maintainRatio, setMaintainRatio] = useState(true);
  const [aspectRatio, setAspectRatio] = useState<number>(1);

  const [resizedURL, setResizedURL] = useState<string>('');
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
    setOriginalFile(file);
    const objUrl = URL.createObjectURL(file);
    setOriginalPreview(objUrl);
    setResizedURL('');

    const img = new Image();
    img.src = objUrl;
    img.onload = () => {
      setWidth(img.width);
      setHeight(img.height);
      setAspectRatio(img.width / img.height);
    };
  };

  const handleWidthChange = (val: number) => {
    setWidth(val);
    if (maintainRatio) setHeight(Math.round(val / aspectRatio));
  };

  const handleHeightChange = (val: number) => {
    setHeight(val);
    if (maintainRatio) setWidth(Math.round(val * aspectRatio));
  };

  const handleResize = () => {
    if (!originalFile || !canvasRef.current) return;
    setIsProcessing(true);
    
    const img = new Image();
    img.src = originalPreview;
    
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d');
      if (!ctx) return setIsProcessing(false);

      canvas.width = width;
      canvas.height = height;
      
      // Draw resized
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("Resize failed.");
          setIsProcessing(false);
          return;
        }
        setResizedURL(URL.createObjectURL(blob));
        setIsProcessing(false);
      }, originalFile.type, 0.95);
    };
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {error && (
        <div className="flex items-center space-x-3 rounded-lg bg-red-50 dark:bg-red-900/30 p-4 text-red-600 dark:text-red-400">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      <canvas ref={canvasRef} className="hidden" />

      {!originalFile ? (
        <Dropzone onFileDrop={handleFileDrop} onError={setError} />
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-8">
            {/* Visual Preview */}
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl flex items-center justify-center p-8 border border-gray-200 dark:border-gray-800">
              {resizedURL ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={resizedURL} alt="Resized" className="max-w-full max-h-[500px] object-contain shadow-md rounded" />
              ) : (
                 /* eslint-disable-next-line @next/next/no-img-element */
                <img src={originalPreview} alt="Original" className="max-w-full max-h-[500px] object-contain shadow-md rounded" />
              )}
            </div>

            {/* Controls */}
            <div className="space-y-6 bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Box size={20} className="text-indigo-600 dark:text-indigo-400" />
                Dimensions
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Width (px)</label>
                  <input 
                    type="number" 
                    value={width} 
                    onChange={(e) => handleWidthChange(Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-400">Height (px)</label>
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => handleHeightChange(Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div className="flex items-center space-x-2 pt-2">
                  <input 
                    type="checkbox" 
                    id="ratio" 
                    checked={maintainRatio}
                    onChange={(e) => setMaintainRatio(e.target.checked)}
                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="ratio" className="text-sm font-medium text-gray-700 dark:text-gray-300">Maintain Aspect Ratio</label>
                </div>
              </div>

              {!resizedURL && (
                <button
                  onClick={handleResize}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-indigo-700"
                >
                  {isProcessing ? <RefreshCw className="animate-spin" size={18} /> : <span>Apply Resize</span>}
                </button>
              )}

              {resizedURL && (
                <a
                  href={resizedURL}
                  download={`resized-${originalFile.name}`}
                  className="w-full flex items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
                >
                  <Download size={18} />
                  <span>Download Image</span>
                </a>
              )}

              <button
                onClick={() => { setOriginalFile(null); setResizedURL(''); }}
                className="w-full pt-4 text-sm text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
              >
                Upload another image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
