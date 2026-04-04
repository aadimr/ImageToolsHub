"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Dropzone } from '../Dropzone';
import { Download, AlertCircle, RefreshCw, Type, Maximize, Sun, LayoutGrid } from 'lucide-react';
import { cn } from '@/utils/cn';

type WatermarkPosition = 'top-left' | 'top-right' | 'center' | 'bottom-left' | 'bottom-right';

export function AddWatermark() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  const [watermarkedPreview, setWatermarkedPreview] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');

  const [text, setText] = useState('ImageToolsHub');
  const [fontSize, setFontSize] = useState(48);
  const [opacity, setOpacity] = useState(0.5);
  const [color, setColor] = useState('#ffffff');
  const [position, setPosition] = useState<WatermarkPosition>('center');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTimeout = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    return () => {
      if (renderTimeout.current) clearTimeout(renderTimeout.current);
    };
  }, []);

  const applyWatermark = useCallback(() => {
    if (!originalFile || !canvasRef.current || !originalPreview) return;
    
    setIsProcessing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.crossOrigin = "anonymous";
    img.src = originalPreview;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);

        // Watermark settings
        ctx.globalAlpha = opacity;
        ctx.fillStyle = color;
        
        const scaleFactor = img.width / 1000;
        const adjustedFontSize = fontSize * scaleFactor;
        
        ctx.font = `bold ${adjustedFontSize}px Inter, system-ui, sans-serif`;
        
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const padding = canvas.width * 0.05;

        switch (position) {
            case 'top-left':
                x = padding;
                y = padding;
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                break;
            case 'top-right':
                x = canvas.width - padding;
                y = padding;
                ctx.textAlign = 'right';
                ctx.textBaseline = 'top';
                break;
            case 'bottom-left':
                x = padding;
                y = canvas.height - padding;
                ctx.textAlign = 'left';
                ctx.textBaseline = 'bottom';
                break;
            case 'bottom-right':
                x = canvas.width - padding;
                y = canvas.height - padding;
                ctx.textAlign = 'right';
                ctx.textBaseline = 'bottom';
                break;
            case 'center':
            default:
                x = canvas.width / 2;
                y = canvas.height / 2;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                break;
        }

        ctx.fillText(text, x, y);

        canvas.toBlob((blob) => {
          if (blob) {
            setWatermarkedPreview(prev => {
                if (prev) URL.revokeObjectURL(prev);
                return URL.createObjectURL(blob);
            });
          }
          setIsProcessing(false);
        }, 'image/png');
      }
    };

    img.onerror = () => {
      setError("Failed to load image for processing.");
      setIsProcessing(false);
    };
  }, [originalFile, originalPreview, text, fontSize, opacity, color, position]);

  useEffect(() => {
    if (originalFile && originalPreview) {
        if (renderTimeout.current) clearTimeout(renderTimeout.current);
        renderTimeout.current = setTimeout(() => {
            applyWatermark();
        }, 100); // Faster debounce for "instant" feel
    }
    return () => {
        if (renderTimeout.current) clearTimeout(renderTimeout.current);
    };
  }, [originalPreview, text, fontSize, opacity, color, position, applyWatermark]);

  const handleFileDrop = (file: File) => {
    setError('');
    setIsProcessing(true);
    setOriginalFile(file);
    const url = URL.createObjectURL(file);
    setOriginalPreview(prev => {
        if (prev) URL.revokeObjectURL(prev);
        return url;
    });
    setWatermarkedPreview(prev => {
        if (prev) URL.revokeObjectURL(prev);
        return '';
    });
  };

  const reset = () => {
    setOriginalPreview(prev => { if (prev) URL.revokeObjectURL(prev); return ''; });
    setWatermarkedPreview(prev => { if (prev) URL.revokeObjectURL(prev); return ''; });
    setOriginalFile(null);
    setError('');
  };

  const positions: { id: WatermarkPosition; label: string }[] = [
    { id: 'top-left', label: 'Top Left' },
    { id: 'top-right', label: 'Top Right' },
    { id: 'center', label: 'Center' },
    { id: 'bottom-left', label: 'Bottom Left' },
    { id: 'bottom-right', label: 'Bottom Right' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {error && (
        <div className="flex items-center space-x-3 rounded-lg bg-red-50 p-4 text-red-600 border border-red-200 animate-in fade-in slide-in-from-top-1">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {!originalFile ? (
        <Dropzone onFileDrop={handleFileDrop} onError={setError} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-8">
          <div className="space-y-4">
             <div className="flex justify-between items-center px-2">
                <div className="flex items-center gap-2">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Real-time Preview</span>
                   {isProcessing && <RefreshCw className="animate-spin text-indigo-500" size={14} />}
                </div>
                <button onClick={reset} className="text-xs text-indigo-600 font-medium hover:underline">Change Image</button>
             </div>
             
             <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl flex items-center justify-center p-4">
                 <canvas ref={canvasRef} className="hidden" />
                 {watermarkedPreview ? (
                    <img src={watermarkedPreview} alt="Watermarked" className="w-full h-full object-contain animate-in fade-in duration-200" />
                 ) : (
                    <div className="text-center space-y-4">
                       <RefreshCw className="animate-spin text-indigo-500 mx-auto" size={32} />
                       <p className="text-sm text-gray-500 font-medium tracking-tight">Generating Preview...</p>
                    </div>
                 )}
             </div>

             <div className="flex gap-4">
                <a
                  href={watermarkedPreview || '#'}
                  download={originalFile ? `watermarked-${originalFile.name}` : 'image.png'}
                  onClick={(e) => { if(!watermarkedPreview) e.preventDefault(); }}
                  className={cn(
                    "flex-1 flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-bold transition-all shadow-lg",
                    watermarkedPreview 
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-indigo-500/20" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  )}
                >
                  <Download size={20} />
                  <span>Download Watermarked Image</span>
                </a>
             </div>
          </div>

          <div className="space-y-6 bg-white dark:bg-gray-950 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl self-start">
             <h3 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Type size={18} className="text-indigo-600" /> Watermark Text
             </h3>
             <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm font-medium"
                placeholder="Enter watermark text"
             />

             <div className="space-y-6">
                <div className="space-y-3">
                   <div className="flex justify-between items-center h-4">
                      <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1.5"><Maximize size={12} /> Font Size</label>
                      <span className="text-xs font-bold text-indigo-600">{fontSize}</span>
                   </div>
                   <input
                      type="range"
                      min="10"
                      max="200"
                      value={fontSize}
                      onChange={(e) => setFontSize(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                   />
                </div>

                <div className="space-y-3">
                   <div className="flex justify-between items-center h-4">
                      <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1.5"><Sun size={12} /> Opacity</label>
                      <span className="text-xs font-bold text-indigo-600">{Math.round(opacity * 100)}%</span>
                   </div>
                   <input
                      type="range"
                      min="0.01"
                      max="1"
                      step="0.01"
                      value={opacity}
                      onChange={(e) => setOpacity(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                   />
                </div>

                <div className="space-y-3">
                   <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-1.5 h-4 mb-2"><LayoutGrid size={12} /> Anchor Position</label>
                   <div className="grid grid-cols-2 gap-2">
                      {positions.map((pos) => (
                         <button
                            key={pos.id}
                            onClick={() => setPosition(pos.id)}
                            className={cn(
                               "py-2 px-3 rounded-xl text-[10px] font-bold border transition-all text-left flex items-center justify-between",
                               position === pos.id 
                               ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none" 
                               : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-500 hover:border-indigo-300"
                            )}
                         >
                            {pos.label}
                            {position === pos.id && <div className="w-1 h-1 rounded-full bg-white ml-2" />}
                         </button>
                      ))}
                   </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-900">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
                         <input
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className="absolute -inset-2 w-[200%] h-[200%] cursor-pointer p-0 m-0 border-none"
                         />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase">Watermark Color</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
