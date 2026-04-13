import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ImageToPDFSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Convert Image to PDF",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/image-to-pdf",
        "description": "Export unlimited JPG and PNG pictures to high-quality PDF files for free in seconds. Fully secure and private client-side converter.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "Transforms JPG and PNG correctly",
          "Automatically sizes to PDF A4 limits",
          "Client-side processing only"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the Image to PDF converter free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it operates totally free, saving you from costly cloud processing subscriptions."
            }
          },
          {
            "@type": "Question",
            "name": "Can it convert multiple pages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Currently, it injects your focal image securely onto a single A4 PDF sheet for rapid precision distribution."
            }
          },
          {
            "@type": "Question",
            "name": "Are my images uploaded to any cloud?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No images touch the cloud. Your browser builds the PDF file completely offline securing top-tier privacy constraints."
            }
          },
          {
            "@type": "Question",
            "name": "Will the image scale change?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The PDF engine intelligently configures a relative landscape or portrait aspect frame to hold your image cleanly."
            }
          },
          {
            "@type": "Question",
            "name": "What is the upload size limit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The tool can effortlessly convert images that are functionally 10 Megabytes underneath."
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
        <h2 className="text-3xl font-bold mb-6">Convert Images to PDF format</h2>
        <p>
          Transforming visual media like JPEG and PNG photos into a ubiquitous PDF standard is wildly useful for professional presentations, academic submissions, and standardized portfolio storage. The PDF standard encapsulates graphic data perfectly to ensure images look identically sized across all display devices.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Why Convert to PDF?</h2>
        <p>
          When you assemble documentation or require rigid print accuracy, PDF format offers immense reliability over solitary image distributions. It guarantees structural integrity.
        </p>
        <p>
          Our converter bypasses legacy cloud generators by rendering the PDF file entirely using your native browser javascript processing. This mitigates risky file transfers, preventing your sensitive documents from landing on third-party servers.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to use this tool</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Upload your image:</strong> Use our dropzone to load your JPEG, PNG, or WebP.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Inspect the preview:</strong> Affirm that the targeted image is correct inside the UI viewer.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Click Generate:</strong> Rapidly package the raw graphic data into a standard PDF page footprint.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Download the PDF:</strong> Retrieve the final encapsulated `.pdf` file successfully.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Is the Image to PDF converter free?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, it operates totally free, saving you from costly cloud processing subscriptions.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Can it convert multiple pages?</h3>
            <p className="text-gray-600 dark:text-gray-400">Currently, it injects your focal image securely onto a single A4 PDF sheet for rapid precision distribution.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Are my images uploaded to any cloud?</h3>
            <p className="text-gray-600 dark:text-gray-400">No images touch the cloud. Your browser builds the PDF file completely offline securing top-tier privacy constraints.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Will the image scale change?</h3>
            <p className="text-gray-600 dark:text-gray-400">The PDF engine intelligently configures a relative landscape or portrait aspect frame to hold your image cleanly.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">What is the upload size limit?</h3>
            <p className="text-gray-600 dark:text-gray-400">The tool can effortlessly convert images that are functionally 10 Megabytes underneath.</p>
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
          <Link href="/tools/image-resizer" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Resizer
          </Link>
          <Link href="/tools/webp-converter" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            WebP Converter
          </Link>
          <Link href="/tools/format-converter" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Format Converter
          </Link>
        </div>
      </section>
    </article>
  );
}
