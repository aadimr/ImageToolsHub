import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function BackgroundRemoverSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Background Remover Online",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/remove-background",
        "description": "Remove the background from images online for free. Our AI background remover works directly in your browser with no uploads required.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "AI background removal",
          "Client-side processing",
          "High-resolution PNG export",
          "Zero image uploading"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this background remover free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our background remover is completely free to use."
            }
          },
          {
            "@type": "Question",
            "name": "Are my images uploaded to a server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. All processing happens locally in your browser, ensuring full privacy."
            }
          },
          {
            "@type": "Question",
            "name": "What image formats are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JPG, PNG, and WebP formats are supported."
            }
          },
          {
            "@type": "Question",
            "name": "How long does background removal take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Usually only a few seconds depending on image size."
            }
          },
          {
            "@type": "Question",
            "name": "Will the image quality change?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the tool keeps the original image quality while removing the background."
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
        <h2 className="text-3xl font-bold mb-6">Free AI-Powered Background Remover</h2>
        <p>
          Need to remove a background from an image instantly? Our free online background remover tool utilizes advanced AI models that execute directly in your web browser. Whether you&apos;re preparing product photos for an e-commerce store, creating professional social media profile pictures, or designing marketing materials, our utility provides clean, studio-quality cutouts in seconds.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Why Use Browser-Based AI Removal?</h2>
        <p>
          Traditional background removal tools often require you to upload your sensitive photos to a remote cloud server. This not only consumes bandwidth but also poses a significant privacy risk. At ImageToolsHub, we prioritize your data security. By executing the AI inference locally on your own hardware, your original images never leave your device. This ensures 100% privacy and eliminates server-side latency.
        </p>
        <p>
          Our AI model is trained to recognize a wide variety of subjects, from people and pets to plants and commercial products. It intelligently identifies the edges of the primary subject and separates them from the background with high precision, handling complex textures like hair and fine fur better than manual cropping tools.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">How to Remove Background Instantly</h2>
        <p>
          Using our tool is incredibly simple. Just drag and drop your image into the workspace. The AI engine will automatically begin analyzing the pixel data. Once the processing is complete—usually in just a few seconds—you can use our interactive comparison slider to see the original versus the result. When you&apos;re satisfied, simply click the download button to save your transparent PNG.
        </p>
        <p>
          Smaller file sizes and fast processing make this the ideal tool for high-volume workflows. Because the logic runs locally, you can process dozens of images without hitting any artificial "daily credits" or wait lists common on other SaaS platforms.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Is this background remover free?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, our background remover is completely free to use.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Are my images uploaded to a server?</h3>
            <p className="text-gray-600 dark:text-gray-400">No. All processing happens locally in your browser, ensuring full privacy.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">What image formats are supported?</h3>
            <p className="text-gray-600 dark:text-gray-400">JPG, PNG, and WebP formats are supported.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">How long does background removal take?</h3>
            <p className="text-gray-600 dark:text-gray-400">Usually only a few seconds depending on image size.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Will the image quality change?</h3>
            <p className="text-gray-600 dark:text-gray-400">No, the tool keeps the original image quality while removing the background.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 p-6 sm:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-6 flex items-center">
          <ChevronRight className="text-indigo-500 mr-2" /> More Image Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/image-compressor" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Compressor
          </Link>
          <Link href="/tools/image-to-text" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image to Text
          </Link>
          <Link href="/tools/image-cropper" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Cropper
          </Link>
          <Link href="/tools/add-watermark" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Add Watermark
          </Link>
        </div>
      </section>
    </article>
  );
}
