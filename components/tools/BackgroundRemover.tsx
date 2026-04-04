"use client";

import React, { useState, useEffect, useRef } from 'react';
import { removeBackground } from "@imgly/background-removal";
import { Dropzone } from '../Dropzone';
import { Download, AlertCircle, RefreshCw, Layers, SlidersHorizontal, Trash2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export function BackgroundRemover() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  const [processedBlob, setProcessedBlob] = useState<Blob | null>(null);
  const [processedPreview, setProcessedPreview] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string>('');
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (originalPreview) URL.revokeObjectURL(originalPreview);
      if (processedPreview) URL.revokeObjectURL(processedPreview);
    };
  }, [originalPreview, processedPreview]);

  const handleFileDrop = (file: File) => {
    setError('');
    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setProcessedBlob(null);
    setProcessedPreview('');
  };

  const handleRemoveBackground = async () => {
    if (!originalFile) return;
    setIsProcessing(true);
    setError('');

    try {
      // Configuration for imgly
      const config = {
        progress: (key: string, current: number, total: number) => {
          const p = Math.round((current / total) * 100);
          setProgress(p);
        },
        model: 'isnet' as const,
      };

      const resultBlob = await removeBackground(originalFile, config);
      setProcessedBlob(resultBlob);
      setProcessedPreview(URL.createObjectURL(resultBlob));
    } catch (err) {
      console.error(err);
      setError('AI Processing failed. Make sure your image has a clear subject.');
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setOriginalFile(null);
    setOriginalPreview('');
    setProcessedBlob(null);
    setProcessedPreview('');
    setError('');
  };

  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
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
        <Dropzone 
          onFileDrop={handleFileDrop} 
          onError={setError} 
        />
      ) : (
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-xl overflow-hidden">
            {!processedPreview ? (
              <div className="flex flex-col items-center py-12">
                 <div className="relative w-full max-w-2xl aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={originalPreview} alt="Original" className="w-full h-full object-contain" />
                 </div>
                 
                 <button
                    onClick={handleRemoveBackground}
                    disabled={isProcessing}
                    className="flex flex-col items-center space-y-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/20 disabled:opacity-50"
                 >
                    {isProcessing ? (
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-3">
                          <RefreshCw className="animate-spin" size={20} />
                          <span>Processing... {progress}%</span>
                        </div>
                        <div className="w-48 h-1 bg-white/20 rounded-full mt-2 overflow-hidden">
                          <div 
                            className="h-full bg-white transition-all duration-300" 
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <Layers size={20} />
                        <span>Remove Background (AI)</span>
                      </div>
                    )}
                 </button>
                 <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
                    Note: First use downloads ~10MB AI models locally.
                 </p>
              </div>
            ) : (
              <div className="space-y-8">
                 <div className="flex justify-between items-center bg-indigo-50 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                    <div className="flex items-center gap-2">
                       <SlidersHorizontal size={18} className="text-indigo-600" />
                       <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Before / After Slider</span>
                    </div>
                    <button 
                       onClick={reset}
                       className="text-sm font-medium text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                    >
                       <Trash2 size={16} /> Change Image
                    </button>
                 </div>

                 {/* Comparison Slider */}
                 <div 
                    ref={containerRef}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-inner group"
                    onMouseMove={handleSliderMove}
                    onTouchMove={handleSliderMove}
                 >
                    {/* After Image (Transparent BG) */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src={processedPreview} alt="After" className="w-full h-full object-contain" />
                    </div>

                    {/* Before Image (Original) */}
                    <div 
                       className="absolute inset-0 overflow-hidden" 
                       style={{ width: `${sliderPosition}%` }}
                    >
                       <div className="absolute inset-0 w-[1000vw]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={originalPreview} 
                            alt="Original" 
                            className="h-full w-auto object-contain"
                            style={{ width: containerRef.current?.offsetWidth }}
                          />
                       </div>
                    </div>

                    {/* Slider Line */}
                    <div 
                       className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-20"
                       style={{ left: `${sliderPosition}%` }}
                    >
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-2xl flex items-center justify-center text-gray-600">
                          <SlidersHorizontal size={16} className="rotate-90" />
                       </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute bottom-4 left-4 z-30 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-white/20">Original</div>
                    <div className="absolute bottom-4 right-4 z-30 bg-indigo-600/80 backdrop-blur-md text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-white/20">Remover AI</div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                       href={processedPreview}
                       download={`no-bg-${originalFile.name.split('.')[0]}.png`}
                       className="flex-1 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/20"
                    >
                       <Download size={20} />
                       <span>Download Clear PNG</span>
                    </a>
                    <button 
                       onClick={reset}
                       className="sm:w-auto px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-800 font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                    >
                       Process Another
                    </button>
                 </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
