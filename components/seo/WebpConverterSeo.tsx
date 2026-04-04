import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function WebpConverterSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Convert to WebP Online",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/webp-converter",
        "description": "Compress files globally mapping them natively into Google's optimized WebP format online seamlessly. Completely free local converter.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "Convert JPG or PNG to WebP natively",
          "Boost Lighthouse and SEO parameters",
          "Unparalleled encoding speed completely offline"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is the WebP conversion free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! The tool utilizes free, local architecture. You are totally free to convert countless images forever."
            }
          },
          {
            "@type": "Question",
            "name": "What browsers support WebP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebP commands universal support across all major modern desktop and mobile browsers including Safari, Chrome, Edge, and Firefox."
            }
          },
          {
            "@type": "Question",
            "name": "Does this compromise my privacy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, none at all. Converting files right via the Javascript DOM intrinsically leaves external servers completely ignorant to your data cache."
            }
          },
          {
            "@type": "Question",
            "name": "Will image quality look bad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WebP shines exactly at mitigating quality reduction effectively, granting huge size cuts whilst preserving original picture visuality immaculately."
            }
          },
          {
            "@type": "Question",
            "name": "Max allowed conversion limit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Files up to a hard cap of 10 Megabytes will funnel safely through our processing loop parameters."
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
        <h2 className="text-3xl font-bold mb-6">What is the WebP Format?</h2>
        <p>
          WebP is a modern image format developed by Google that provides superior lossless and lossy compression for images on the web. Using WebP, webmasters and digital developers can create smaller, richer images that make the web exponentially faster compared to older, legacy formats like JPEG and PNG.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Benefits of our WebP Converter</h2>
        <p>
          Transforming old bulky JPEGs or massive PNGs into WebP files can shrink file sizes upwards of 25%-35% naturally, significantly augmenting Google Lighthouse and SEO metrics. Next-generation image formats are expected standard practices for performant development.
        </p>
        <p>
          Our WebP generator circumvents sluggish server latency by injecting the conversion process straight through your local HTML5 Canvas elements. This guarantees unparalleled encoding speeds whilst completely sealing away your data behind native browser privacies.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Convert to WebP</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Upload your image:</strong> Add your desired JPEG or PNG graphic from your folders straight to the converter.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Review format target:</strong> Make sure WebP is actively designated within the tool UI dropdown.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Initiate Conversion:</strong> Engage the process trigger to map standard pixels into the WebP framework seamlessly.
          </li>
          <li className="font-medium">
             <strong className="text-gray-900 dark:text-gray-100">Download the optimized file:</strong> Save the shiny new `.webp` format file back natively onto your hard-drive.
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Is the WebP conversion free?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes! The tool utilizes free, local architecture. You are totally free to convert countless images forever.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">What browsers support WebP?</h3>
            <p className="text-gray-600 dark:text-gray-400">WebP commands universal support across all major modern desktop and mobile browsers including Safari, Chrome, Edge, and Firefox.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Does this compromise my privacy?</h3>
            <p className="text-gray-600 dark:text-gray-400">No, none at all. Converting files right via the Javascript DOM intrinsically leaves external servers completely ignorant to your data cache.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Will image quality look bad?</h3>
            <p className="text-gray-600 dark:text-gray-400">WebP shines exactly at mitigating quality reduction effectively, granting huge size cuts whilst preserving original picture visuality immaculately.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">Max allowed conversion limit?</h3>
            <p className="text-gray-600 dark:text-gray-400">Files up to a hard cap of 10 Megabytes will funnel safely through our processing loop parameters.</p>
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
          <Link href="/tools/jpg-to-png" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            JPG to PNG
          </Link>
          <Link href="/tools/png-to-jpg" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            PNG to JPG
          </Link>
          <Link href="/tools/image-resizer" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Resizer
          </Link>
        </div>
      </section>
    </article>
  );
}
