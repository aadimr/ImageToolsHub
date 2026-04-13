"use client";

import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import { Dropzone } from '../Dropzone';
import { Download, AlertCircle, RefreshCw, Copy, FileText, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export function ImageToText() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  const [extractedText, setExtractedText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    return () => {
      if (originalPreview) URL.revokeObjectURL(originalPreview);
    };
  }, [originalPreview]);

  const handleFileDrop = (file: File) => {
    setError('');
    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setExtractedText('');
    setProgress(0);
  };

  const handleExtractText = async () => {
    if (!originalFile) return;
    setIsProcessing(true);
    setError('');
    setProgress(0);

    try {
      const { data: { text } } = await Tesseract.recognize(
        originalFile,
        'eng',
        { 
          logger: m => {
            if (m.status === 'recognizing text') {
              setProgress(Math.round(m.progress * 100));
            }
          }
        }
      );
      setExtractedText(text);
      toast.success('Text extracted successfully!');
    } catch (err) {
      console.error(err);
      setError('Failed to extract text. Try a clearer image.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(extractedText);
    toast.success('Text copied to clipboard!');
  };

  const handleDownload = () => {
    const blob = new Blob([extractedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `extracted-text-${originalFile?.name.split('.')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setOriginalFile(null);
    setOriginalPreview('');
    setExtractedText('');
    setError('');
    setProgress(0);
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
        <Dropzone onFileDrop={handleFileDrop} onError={setError} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Input Image */}
          <div className="space-y-4">
             <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tighter">Original Source</span>
                <button onClick={reset} className="text-xs text-indigo-600 font-medium hover:underline">Change Image</button>
             </div>
             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={originalPreview} alt="Original" className="w-full h-full object-contain" />
             </div>
             
             {!extractedText && (
               <button
                  onClick={handleExtractText}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/20 disabled:opacity-50"
               >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="animate-spin" size={20} />
                      <span>Processing OCR ({progress}%)...</span>
                    </>
                  ) : (
                    <>
                      <FileText size={20} />
                      <span>Extract Text from Image</span>
                    </>
                  )}
               </button>
             )}
          </div>

          {/* Right: Extracted Text */}
          <div className="space-y-4 flex flex-col">
             <div className="flex justify-between items-center h-6">
                {extractedText && (
                   <span className="flex items-center gap-1.5 text-green-600 text-xs font-bold uppercase">
                      <CheckCircle2 size={14} /> Extraction Complete
                   </span>
                )}
             </div>

             <div className="flex-1 relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm flex flex-col">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                   <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Extracted Text Content</h3>
                   {extractedText && (
                      <div className="flex items-center gap-3">
                         <button 
                            onClick={handleCopy} 
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm"
                         >
                            <Copy size={14} />
                            <span>Copy Text</span>
                         </button>
                         <button 
                            onClick={handleDownload} 
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 border border-indigo-700 rounded-lg text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-sm"
                         >
                            <Download size={14} />
                            <span>Download .txt</span>
                         </button>
                      </div>
                   )}
                </div>
                <textarea
                   className="w-full flex-1 p-6 text-sm bg-transparent border-none focus:ring-0 resize-none text-gray-600 dark:text-gray-300 font-mono"
                   placeholder="Awaiting text extraction..."
                   value={extractedText}
                   readOnly
                />
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
