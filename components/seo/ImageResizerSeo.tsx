import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ImageResizerSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Image Resizer",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/image-resizer",
        "description": "Easily resize images to exact dimensions without losing quality. Safe, private, and process directly within your browser.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "Pixel exact dimension scaling",
          "Aspect ratio locking",
          "Lossless local Javascript resizing"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the Image Resizer free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely, it is continuously free with absolutely zero watermarks or limits."
            }
          },
          {
            "@type": "Question",
            "name": "Does this stretch my image?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By default, the Maintain Aspect Ratio lock is on. This prevents unwanted stretching. You can disable it if you need an exact box constraint regardless of distortion."
            }
          },
          {
            "@type": "Question",
            "name": "Are my images kept private?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, your images never leave your browser for processing. They remain entirely private on your device."
            }
          },
          {
            "@type": "Question",
            "name": "Will resizing up improve quality?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, scaling an image beyond its native dimensions will result in pixelation. It usually works best to resize downwards."
            }
          },
          {
            "@type": "Question",
            "name": "Can I batch resize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Currently, the tool requires one image at a time to ensure complete precision per file."
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
        <h2 className="text-3xl font-bold mb-6">What is Image Resizing?</h2>
        <p>
          Image resizing is the action of altering the dimensional resolution (width and height) of an image. Whether you need a perfectly sized photograph for an Instagram post, a scaled-down graphic for a website header, or fulfilling a strict upload requirement on a portal, our tool lets you scale graphics instantly without losing native clarity.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Benefits of Optimal Image Sizing</h2>
        <p>
          Using incorrectly sized images leads to major performance issues on websites as browsers are forced to scale images via CSS dynamically. By natively resizing to your exact required pixel dimensions, you reduce the physical bandwidth footprint. It also prevents layout shifts in modern web applications.
        </p>
        <p>
          Unlike server-side tools that require you to upload your personal photos, this tool uses standard HTML Canvas functions. This means your images are scaled utilizing your own device&apos;s processing power, guaranteeing absolute data safety and privacy.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Resize an Image</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Upload your file:</strong> Drag your image precisely into our browser dropzone.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Input dimensions:</strong> Enter the exact width and height in pixels you want. Leave the ratio lock on if you want flawless scaling without stretching.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Apply Resize:</strong> Click the resize button to instantly render your new resolution.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Download the result:</strong> Save your newly scaled image instantly to your local machine.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Is the Image Resizer free?</h3>
            <p className="text-gray-600 dark:text-gray-400">Absolutely, it is continuously free with absolutely zero watermarks or limits.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Does this stretch my image?</h3>
            <p className="text-gray-600 dark:text-gray-400">By default, the &quot;Maintain Aspect Ratio&quot; lock is on. This prevents unwanted stretching. You can disable it if you need an exact box constraint regardless of distortion.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Are my images kept private?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, your images never leave your browser for processing. They remain entirely private on your device.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Will resizing up improve quality?</h3>
            <p className="text-gray-600 dark:text-gray-400">No, scaling an image beyond its native dimensions will result in pixelation. It usually works best to resize downwards.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Can I batch resize?</h3>
            <p className="text-gray-600 dark:text-gray-400">Currently, the tool requires one image at a time to ensure complete precision per file.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 p-6 sm:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-6 flex items-center">
          <ChevronRight className="text-indigo-500 mr-2" /> Explore More Image Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/image-compressor" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Compressor
          </Link>
          <Link href="/tools/image-cropper" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Cropper
          </Link>
          <Link href="/tools/jpg-to-png" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            JPG to PNG
          </Link>
          <Link href="/tools/png-to-jpg" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            PNG to JPG
          </Link>
        </div>
      </section>
    </article>
  );
}
