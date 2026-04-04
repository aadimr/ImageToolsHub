import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function JpgToWebpSeo() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "JPG to WebP Converter",
        "applicationCategory": "UtilitiesApplication, MultimediaApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires JavaScript",
        "url": "https://imagetoolshub.com/tools/jpg-to-webp",
        "description": "Convert JPG images to WebP format instantly. Our free online converter reduces file size while maintaining high quality for better web performance.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "isAccessibleForFree": true,
        "featureList": [
          "Convert JPG to WebP",
          "Client-side processing",
          "Fast and secure"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I convert JPG to WebP?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply upload your JPG image, and our tool will instantly convert it to WebP format directly in your browser."
            }
          },
          {
            "@type": "Question",
            "name": "Is WebP better than JPG?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, WebP typically provides better compression than JPG, resulting in smaller file sizes with similar visual quality, making it ideal for websites."
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
        <h2 className="text-3xl font-bold mb-6">Convert JPG to WebP with Ease</h2>
        <p>
          Converting your legacy JPG images to the modern WebP format is one of the most effective ways to boost your website performance. Our free online JPG to WebP converter makes this process seamless and secure, running entirely within your browser to ensure your data never leaves your device.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">Why Use WebP instead of JPG?</h2>
        <p>
          WebP is a next-generation image format developed by Google that offers superior lossy and lossless compression. When you convert JPG to WebP, you can expect significant file size reductions—often up to 30% or more—without a noticeable drop in visual quality. This is crucial for modern web development where every kilobyte counts toward your Core Web Vitals and overall Google PageSpeed scores.
        </p>
        <p>
          Beyond just file size, WebP supports features that JPG does not, such as transparency and animation. While this specific tool focuses on the JPG to WebP transition, the underlying technology allows for a much more versatile web experience. By serving WebP images, you reduce bandwidth consumption for your users, which is especially beneficial for those on mobile data or slow internet connections.
        </p>
        <p>
          Our converter processes everything client-side using advanced JavaScript. This means your images are handled locally on your own hardware, providing the ultimate level of privacy and security. There are no server-side logs, no permanent storage of your sensitive files, and no risk of data breaches during transmission.
        </p>

        <h2 className="text-3xl font-bold mt-10 mb-6">The Technical Advantage of WebP Compression</h2>
        <p>
          WebP uses a more advanced predictive coding method than the standard DCT (Discrete Cosine Transform) used in JPEG. It looks at neighboring blocks of pixels to predict the values in a block and then only encodes the difference (residual). This mathematical efficiency is what allows WebP to achieve much higher compression ratios while maintaining the sharp edges and color accuracy that modern displays demand.
        </p>
      </section>

      <section className="mb-12 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Convert JPG to WebP</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
          <li className="font-medium">Upload your JPG image to the designated area.</li>
          <li className="font-medium">The conversion to WebP happens automatically in real-time.</li>
          <li className="font-medium">Review the results and check the file size reduction.</li>
          <li className="font-medium">Download your new WebP image instantly.</li>
        </ol>
      </section>

      <section className="mb-12 bg-indigo-50 dark:bg-indigo-900/10 p-6 sm:p-8 rounded-2xl border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-indigo-100 mb-6 flex items-center">
          <ChevronRight className="text-indigo-500 mr-2" /> More Conversion Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/png-to-webp" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            PNG to WebP
          </Link>
          <Link href="/tools/webp-to-jpg" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            WebP to JPG
          </Link>
          <Link href="/tools/image-compressor" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Image Compressor
          </Link>
          <Link href="/tools/format-converter" className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-800 font-medium text-indigo-700 dark:text-indigo-400">
            Universal Converter
          </Link>
        </div>
      </section>
    </article>
  );
}
