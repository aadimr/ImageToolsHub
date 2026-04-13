import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ImageCompressorSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Online Image Compressor",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/image-compressor",
        "description": "Compress JPG, PNG, and WebP images online without losing quality. Our free image compressor works directly in your browser with no uploads and complete privacy.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "Client-side image processing",
          "Maximum privacy algorithms",
          "JPG, PNG, and WebP compatibility"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is this image compressor free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our image compressor is 100% free to use with no hidden fees, daily limits, or watermarks."
            }
          },
          {
            "@type": "Question",
            "name": "Are my images uploaded to a server?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. All processing happens entirely right inside your web browser. Nothing is ever uploaded to external servers, protecting your data privacy natively."
            }
          },
          {
            "@type": "Question",
            "name": "What formats are supported?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We fully support JPG, JPEG, PNG, and WebP format compression."
            }
          },
          {
            "@type": "Question",
            "name": "Will image quality be reduced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While file sizes are drastically shrunk, our engine implements smart lossy and lossless algorithms specifically tuned to retain excellent visual fidelity. To the naked eye, the quality difference is virtually undetectable."
            }
          },
          {
            "@type": "Question",
            "name": "What is the maximum file size?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can upload images up to 10MB per file for processing."
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
        <h2 className="text-3xl font-bold mb-6">What is Image Compression?</h2>
        <p>
          Image compression is the process of reducing the file size of a digital image without significantly degrading its visual quality. It works by minimizing redundant data and optimizing how colors and patterns are stored within the file. For modern web environments, balancing quality and size is crucial. By shrinking vast files down to optimized Kilobytes, image compression allows photos, illustrations, and graphics to load instantaneously across all devices.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Benefits of Image Compression</h2>
        <p>
          Smaller images drastically improve website performance. Search engines like Google prioritize page speed as a primary ranking factor, meaning optimized images lead to better SEO and higher search rankings. Users experience faster load times, consuming less mobile data and reducing bounce rates. Furthermore, smaller files save on server hosting costs and bandwidth.
        </p>
        <p>
          Our browser-based client-side compression brings unique advantages. With completely local processing, your images never traverse the internet to be processed on external servers. This guarantees 100% privacy and security. The operation is typically much faster, unbounded by server load or queue times.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Supported Image Formats</h2>
        <p>
          Our compression engine natively supports the most widely used web formats:
        </p>
        <ul>
          <li><strong>JPG / JPEG:</strong> Ideal for complex photographs with millions of colors. Compression algorithms handle JPEG structure flawlessly.</li>
          <li><strong>PNG:</strong> Essential for graphics, logos, and images requiring transparent backgrounds.</li>
          <li><strong>WebP:</strong> The modern standard developed by Google, providing superior lossless and lossy compression.</li>
        </ul>
      </section>

      <section className="mb-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Compress an Image</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Upload your image:</strong> Drag and drop your file into the tool above or click the area to select an image from your device.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Adjust compression settings:</strong> Select your desired compression level (Low, Medium, High). The tool will instantly prepare the optimal configuration.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Click compress:</strong> Press the process button and the local engine will instantly reduce your file size.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Download the optimized image:</strong> Evaluate the preview, observe the percentage size reduction, and hit download to save it to your device.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Is this image compressor free?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, our image compressor is 100% free to use with no hidden fees, daily limits, or watermarks.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Are my images uploaded to a server?</h3>
            <p className="text-gray-600 dark:text-gray-400">No. All processing happens entirely right inside your web browser. Nothing is ever uploaded to external servers, protecting your data privacy natively.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">What formats are supported?</h3>
            <p className="text-gray-600 dark:text-gray-400">We fully support JPG, JPEG, PNG, and WebP format compression.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Will image quality be reduced?</h3>
            <p className="text-gray-600 dark:text-gray-400">While file sizes are drastically shrunk, our engine implements smart lossy and lossless algorithms specifically tuned to retain excellent visual fidelity. To the naked eye, the quality difference is virtually undetectable.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">What is the maximum file size?</h3>
            <p className="text-gray-600 dark:text-gray-400">You can upload images up to 10MB per file for processing.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 p-6 sm:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-6 flex items-center">
          <ChevronRight className="text-indigo-500 mr-2" /> Explore More Image Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/image-resizer" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Resizer
          </Link>
          <Link href="/tools/image-to-pdf" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image to PDF
          </Link>
          <Link href="/tools/webp-converter" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            WebP Converter
          </Link>
          <Link href="/tools/png-to-jpg" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            PNG to JPG
          </Link>
        </div>
      </section>
    </article>
  );
}
