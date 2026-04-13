"use client";

import React, { useState } from 'react';
import { Dropzone } from '../Dropzone';
import { Download, AlertCircle, FileBox, RefreshCw } from 'lucide-react';
import jsPDF from 'jspdf';
import { cn } from '@/utils/cn';

export function ImageToPDF() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  
  const [pdfURL, setPdfURL] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');

  const handleFileDrop = (file: File) => {
    setError('');
    setOriginalFile(file);
    setOriginalPreview(URL.createObjectURL(file));
    setPdfURL('');
  };

  const handleConvert = async () => {
    if (!originalFile) return;
    
    setIsProcessing(true);
    setError('');
    
    try {
      const img = new Image();
      img.src = originalPreview;
      
      img.onload = () => {
        // Create an A4 PDF
        const pdf = new jsPDF({
          orientation: img.width > img.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [img.width, img.height]
        });

        // Add image slightly offset or perfect fit
        pdf.addImage(img, 'JPEG', 0, 0, img.width, img.height);
        
        // Generate blob
        const pdfBlob = pdf.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfURL(pdfUrl);
        setIsProcessing(false);
      };
      
      img.onerror = () => {
        setError('Failed to load image for PDF generation.');
        setIsProcessing(false);
      };

    } catch (err) {
      console.error(err);
      setError('An error occurred during PDF generation.');
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setOriginalFile(null);
    setOriginalPreview('');
    setPdfURL('');
    setError('');
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {error && (
        <div className="flex items-center space-x-3 rounded-lg bg-red-50 dark:bg-red-900/30 p-4 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">
          <AlertCircle size={20} />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {!originalFile ? (
        <Dropzone onFileDrop={handleFileDrop} onError={setError} />
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
            {/* Original Image */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 flex flex-col items-center">
              <span className="font-semibold text-gray-900 dark:text-gray-100 mb-4 self-start">Source Image</span>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={originalPreview} alt="Original" className="object-contain w-full h-full" />
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center space-y-4 px-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl md:bg-transparent md:border-none md:p-0">
              {!pdfURL && (
                <button
                  onClick={handleConvert}
                  disabled={isProcessing}
                  className="flex w-full md:w-auto items-center justify-center space-x-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-indigo-700 disabled:opacity-70"
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="animate-spin" size={18} />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <span>Generate PDF</span>
                  )}
                </button>
              )}
            </div>

            {/* Result PDF */}
            <div className={cn(
              "rounded-2xl border p-6 flex flex-col items-center",
              pdfURL ? "border-green-200 dark:border-green-800 bg-green-50/30 dark:bg-green-900/10" : "border-gray-200 dark:border-gray-800 border-dashed bg-gray-50/50 dark:bg-gray-900/50"
            )}>
              <span className="font-semibold text-gray-900 dark:text-gray-100 mb-4 self-start">PDF Document</span>
              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-red-500">
                {pdfURL ? (
                  <FileBox size={64} className="opacity-80" />
                ) : (
                  <FileBox size={32} className="opacity-20 text-gray-400" />
                )}
              </div>

              {pdfURL && (
                <a
                  href={pdfURL}
                  download={`converted-${originalFile.name.split('.')[0]}.pdf`}
                  className="mt-6 flex w-full items-center justify-center space-x-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-green-700"
                >
                  <Download size={18} />
                  <span>Download PDF</span>
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={reset}
              className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 underline underline-offset-4"
            >
              Start over with a new image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
