import { Metadata } from 'next';
import { AdsPlaceholder } from "@/components/ui/AdsPlaceholder";
import { SearchableToolGrid } from "@/components/SearchableToolGrid";
import Script from 'next/script';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { CheckCircle2, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: "Free Online Image Tools – Compress, Convert, Resize & Edit Images",
  description: "ImageToolsHub offers free online tools to compress, resize, convert, and edit images instantly. All tools run directly in your browser with no uploads required.",
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are ImageToolsHub tools free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all tools on ImageToolsHub are completely free to use with no hidden subscriptions or limits."
        }
      },
      {
        "@type": "Question",
        "name": "Are my images uploaded to a server?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All image processing happens locally in your browser to ensure full privacy and zero latency."
        }
      },
      {
        "@type": "Question",
        "name": "What image formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tools support all modern web formats including JPG, PNG, and WebP."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to install software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No installation is required. All tools work directly in your browser using modern WebAssembly and Canvas APIs."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a file size limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our engine efficiently processes images up to 10MB while maintaining high performance."
        }
      }
    ]
  };

  return (
    <div className="relative overflow-hidden">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-purple-500/5 blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-indigo-600/5 blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* High-Impact Hero Section */}
        <section className="text-center mb-32 space-y-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out">
          <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-5 py-2 dark:border-indigo-900/30 dark:bg-indigo-900/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              V2.0 Engine Now Live
            </span>
          </div>
          
          <h1 className="text-6xl font-black tracking-tight text-gray-900 dark:text-gray-100 sm:text-8xl lg:text-9xl">
            Every Image <span className="relative inline-block">
              Tool
              <div className="absolute -bottom-2 left-0 h-4 w-full bg-indigo-600/10 -rotate-1 dark:bg-indigo-400/10" />
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent italic">
              You&apos;ll Ever Need.
            </span>
          </h1>
          
          <p className="mx-auto mt-10 max-w-2xl text-lg font-medium leading-relaxed text-gray-500 dark:text-gray-400 sm:text-2xl">
            A complete suite of professional image processing tools right in your browser. 
            <span className="block font-black text-gray-900 dark:text-gray-100 mt-2">No uploads. No limits. 100% Privacy.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-800 hidden sm:block" />
            <div className="flex items-center gap-3 text-sm font-black text-gray-400 uppercase tracking-widest">
               <div className="h-2 w-2 rounded-full bg-emerald-500" />
               Processed in Seconds
            </div>
          </div>
        </section>

        <AdsPlaceholder location="Top Homepage Ad" />

        {/* Main Tools Discovery Section */}
        <section className="mt-32">
          <SearchableToolGrid />
        </section>

        <AdsPlaceholder location="Between Sections Ad" />

        {/* Feature Deep-Dive Section */}
        <section className="mt-48 relative">
          <div className="absolute inset-0 bg-indigo-50/50 dark:bg-indigo-950/20 -mx-4 sm:-mx-6 lg:-mx-8 rounded-[4rem] -z-10 border border-indigo-100/50 dark:border-indigo-900/30" />
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 max-w-6xl mx-auto p-12 sm:p-20">
            {[
              {
                title: "Lightning Fast",
                desc: "Processing happens entirely in your browser using modern WebWorkers and Canvas technologies. Zero server lag.",
                icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                color: "text-amber-500",
                bg: "bg-amber-50 dark:bg-amber-900/20"
              },
              {
                title: "100% Private",
                desc: "Your images never leave your local device. Zero uploads = zero risk. We have no access to your personal property.",
                icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                color: "text-emerald-500",
                bg: "bg-emerald-50 dark:bg-emerald-900/20"
              },
              {
                title: "High Precision",
                desc: "Smart lossless algorithms process files while maintaining perfect visual quality, color accuracy, and transparency.",
                icon: <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                color: "text-purple-500",
                bg: "bg-purple-50 dark:bg-purple-900/20"
              }
            ].map((feature, i) => (
              <div 
                key={feature.title} 
                className="text-center space-y-6 group animate-in zoom-in-95 duration-1000 fill-mode-backwards"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className={cn("inline-flex h-20 w-20 items-center justify-center rounded-3xl transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500 shadow-xl shadow-indigo-500/5", feature.bg, feature.color)}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 tracking-tight">{feature.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400 px-4">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed SEO Content Section */}
        <section className="mt-48 max-w-5xl mx-auto py-24 border-t border-gray-100 dark:border-gray-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8 animate-in slide-in-from-left-8 duration-700">
               <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/30 text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                 The ImageToolsHub Protocol
               </div>
               <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-gray-100">Why Modern Creators Choose our Platform</h2>
               <p className="text-xl font-medium text-gray-500 dark:text-gray-400 leading-relaxed italic">
                 "Because data privacy isn&apos;t a feature — it&apos;s a fundamental human right."
               </p>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                 Unlike traditional online tools that require you to upload your sensitive photos to remote servers, ImageToolsHub processes 100% of your data client-side. This means zero-risk privacy and lightning-fast speeds that don&apos;t depend on your upload bandwidth.
               </p>
               <div className="pt-6">
                 <Link href="/about" className="inline-flex items-center gap-2 text-indigo-600 font-black hover:gap-4 transition-all">
                   System Architecture Deep-Dive <svg width={20} height={20} className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </Link>
               </div>
            </div>
            <div className="relative group animate-in slide-in-from-right-8 duration-700">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-1 transition-transform duration-500" />
               <div className="relative bg-white dark:bg-gray-950 p-10 rounded-[3rem] border border-gray-200 dark:border-gray-800 shadow-2xl space-y-6">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h4 className="text-xl font-black text-gray-900 dark:text-gray-100 uppercase tracking-tight">Enterprise-Grade Security</h4>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                    We utilize hardware-accelerated processing via your GPU where possible, ensuring high-resolution exports without compromising on your local performance.
                  </p>
                  <ul className="space-y-3">
                     {['No Server Logs', 'No Upload Bandwidth Used', 'Offline Functionality Support'].map(item => (
                       <li key={item} className="flex items-center gap-3 text-xs font-black text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={16} className="text-emerald-500" /> {item}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>
        </section>

        {/* Homepage FAQ Section */}
        <section className="mt-48 max-w-5xl mx-auto pb-40">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Professional Support Hub</h2>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">Everything you need to know about the platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { q: "Free to use?", a: "Yes, all tools are 100% free with no subscriptions or hidden limits." },
               { q: "Images uploaded?", a: "No. Your data stays in your browser. We never see your images." },
               { q: "Format support?", a: "Full support for JPG, PNG, and WebP across all processing tools." },
               { q: "Installation needed?", a: "None. Works natively in any modern web browser via WebAssembly." },
               { q: "Size limits?", a: "Highly optimized for images up to 10MB to ensure smooth local performance." },
               { q: "Batch process?", a: "Yes, our Image to PDF and other tools support rapid batch workflows." }
             ].map((faq, i) => (
               <div 
                key={faq.q} 
                className="group bg-white/50 dark:bg-gray-950/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95 fill-mode-backwards"
                style={{ animationDelay: `${i * 100}ms` }}
               >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">{faq.q}</h4>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                    </div>
                    <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-6 flex items-center justify-between">
                       <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Verified Answer</span>
                       <CheckCircle2 size={16} className="text-emerald-500" />
                    </div>
                  </div>
               </div>
             ))}
          </div>
          
          <div className="mt-20 text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
             <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95">
               <MessageSquare size={20} />
               <span>STILL HAVE QUESTIONS? CONTACT US</span>
             </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
