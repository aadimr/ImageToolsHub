import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PngToWebpSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "PNG to WebP Converter",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/png-to-webp",
        "description": "Convert PNG images to WebP format instantly. Our free online converter reduces file size while maintaining high quality and transparency for better web performance.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "Convert PNG to WebP",
          "Retain transparency",
          "Client-side processing"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does PNG to WebP keep the background transparent?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, WebP format supports alpha-channel transparency, so your graphics will remain transparent even after the conversion."
            }
          },
          {
            "@type": "Question",
            "name": "How much smaller will my PNG be in WebP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Converting PNG to WebP can provide up to 26% more compression compared to PNG without losing quality."
            }
          },
          {
            "@type": "Question",
            "name": "Is my data secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. All processing happens locally in your browser. Your images are never uploaded to our servers."
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
        <h2 className="text-3xl font-bold mb-6">Convert PNG to WebP Losslessly</h2>
        <p>
          PNG images are excellent for transparency but can be extremely bulky, leading to slower page loads. By converting PNG to WebP, you get the best of both worlds: smaller file sizes and retained transparency. Our free online PNG to WebP converter helps you optimize your graphics for the modern web with next-generation compression.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">The Power of WebP for Transparent Images</h2>
        <p>
          WebP is an advanced image format developed by Google that offers superior lossy and lossless compression. One of its standout features is support for transparency (alpha channel), which makes it a perfect replacement for PNG graphics. While PNGs use the DEFLATE algorithm, WebP uses a more modern approach that can reduce file sizes by up to 26% more than PNG without losing a single pixel of quality.
        </p>
        <p>
          By switching from PNG to WebP, you can significantly improve your website's performance and Google PageSpeed scores. This is especially important for websites with lots of icons, illustrations, and images with transparent backgrounds. Smaller images mean your pages load faster, which keeps users engaged and improves your SEO rankings across the board.
        </p>
        <p>
          Our converter runs entirely in your browser using modern web technologies. This means your images are never sent over the internet, providing a secure and fast experience for every user. There's no server-side lag, no risk of data leaks, and you have complete control over your files at all times.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Optimizing Workflow with WebP</h2>
        <p>
          Integrating WebP into your design and development workflow is now easier than ever. Most modern browsers have full support for WebP, and by using our client-side converter, you can transform your entire library of PNG icons and assets into a lighter format in seconds. This ensures that your site stays performant even as your visual content grows.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Convert PNG to WebP</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
          <li className="font-medium">Drag and drop your PNG image into the upload box.</li>
          <li className="font-medium">The tool will instantly convert your image to WebP format.</li>
          <li className="font-medium">Review the file size comparison and quality.</li>
          <li className="font-medium">Download your new WebP image directly to your device.</li>
        </ol>
      </section>

      <section className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 p-6 sm:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-6 flex items-center">
          <ChevronRight className="text-indigo-500 mr-2" /> More Conversion Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/jpg-to-webp" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            JPG to WebP
          </Link>
          <Link href="/tools/webp-to-jpg" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            WebP to JPG
          </Link>
          <Link href="/tools/image-compressor" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Compressor
          </Link>
          <Link href="/tools/webp-converter" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            WebP Converter
          </Link>
        </div>
      </section>
    </article>
  );
}
