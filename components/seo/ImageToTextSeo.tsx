import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ImageToTextSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Image to Text Converter Online",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/image-to-text",
        "description": "Convert images to editable text online for free. Our OCR extractor uses Tesseract.js to grab text from images directly in your browser.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "OCR text extraction",
          "Copy to clipboard",
          "Download .txt file",
          "Supports high-resolution images"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Image to Text OCR work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The tool uses Tesseract.js, a powerful optical character recognition (OCR) engine that executes in your browser. It analyzes the shapes of the letters in your image and translates them into digital text."
            }
          },
          {
            "@type": "Question",
            "name": "Is my text data stored on your server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. All text extraction is performed entirely on your machine. Your private documents are never sent across the internet."
            }
          },
          {
            "@type": "Question",
            "name": "Can it extract text from handwriting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While OCR handles printed text with high accuracy, handwriting recognition depends heavily on clarity and penmanship. Results may vary for handwritten notes."
            }
          },
          {
            "@type": "Question",
            "name": "Is the Image to Text converter free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our Image to Text tool is 100% free to use with no hidden charges or usage limits."
            }
          },
          {
            "@type": "Question",
            "name": "What image formats are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support all common image formats including JPG, PNG, and WebP."
            }
          }
        ]
      }
    ]
  };

  return (
    <article className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="prose prose-indigo dark:prose-invert max-w-none mb-12">
        <h2 className="text-3xl font-bold mb-6">Convert Image to Text (OCR) Online</h2>
        <p>
          Need to extract text from a physical document, a screenshot, or a digital photo? Our free online Image to Text converter provides high-precision OCR (Optical Character Recognition) without requiring any software installation. Whether you&apos;re transcribing long documents, capturing notes from a lecture, or digitizing receipts, our utility saves you hours of manual typing.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Why Use Browser-Based OCR?</h2>
        <p>
          Many online OCR tools require you to upload your sensitive files to a remote server, which can be a major privacy concern for confidential documents and business receipts. At ImageToolsHub, we use Tesseract.js, a cutting-edge JavaScript library that allows the OCR engine to run entirely on your local device. This means your private files stay on your computer, ensuring absolute data security and privacy.
        </p>
        <p>
          Our OCR engine supports the English language with high accuracy and provides real-time progress tracking. Because it utilizes your computer&apos;s processing power, the more powerful your machine, the faster the extraction process. This makes it perfect for heavy-duty office work where large numbers of images need to be digitized quickly.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">How to Extract Text from Images</h2>
        <p>
          Simply upload your JPG or PNG image into the dropzone. The engine will automatically begin the "recognition" phase. Once the text is extracted, it appears in an editable textarea where you can refine it. We provide one-click buttons to either copy the text to your clipboard or download it as a standard .txt file for use in Word, Google Docs, or any other editor.
        </p>
        <p>
          For best results, we recommend using high-resolution images with high contrast. The clearer the characters are in the original source graphic, the more accurate the resulting text output will be.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">How does Image to Text OCR work?</h3>
            <p className="text-gray-600 dark:text-gray-400">The tool uses Tesseract.js, a powerful OCR engine that executes in your browser. It analyzes the shapes of the letters in your image and translates them into digital text.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Is my text data stored on your server?</h3>
            <p className="text-gray-600 dark:text-gray-400">No. All text extraction is performed entirely on your machine. Your private documents are never sent across the internet.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Can it extract text from handwriting?</h3>
            <p className="text-gray-600 dark:text-gray-400">While OCR handles printed text with high accuracy, handwriting recognition depends heavily on clarity and penmanship. Results may vary for handwritten notes.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Is the Image to Text converter free?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, our Image to Text tool is 100% free with no hidden charges, daily limits, or watermarks.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">What image formats are supported?</h3>
            <p className="text-gray-600 dark:text-gray-400">We support all common image formats including JPG, PNG, and WebP.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 p-6 sm:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-6 flex items-center">
          <ChevronRight className="text-indigo-500 mr-2" /> Explore More Digital Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/remove-background" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Background Remover
          </Link>
          <Link href="/tools/image-compressor" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Compressor
          </Link>
          <Link href="/tools/image-resizer" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Resizer
          </Link>
          <Link href="/tools/add-watermark" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Add Watermark
          </Link>
        </div>
      </section>
    </article>
  );
}
