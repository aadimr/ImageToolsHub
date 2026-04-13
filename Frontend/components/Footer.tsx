import Link from "next/link";
import { 
  Image as ImageIcon, 
  Mail, 
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.71.084-.71 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.87.07.07 0 0 1-.008-.11c.125-.094.251-.192.372-.29a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.29a.071.071 0 0 1-.006.111 12.84 12.84 0 0 1-1.872.87.076.076 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-20">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-2 w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
                <ImageIcon size={22} />
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100">ImageToolsHub</span>
            </Link>
            <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              Join millions of creators using our free, secure, and lightning-fast image tools directly in their browser. No uploads, 100% privacy.
            </p>
            
            {/* Social icons — TODO: add real social URLs */}
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-gray-200 dark:border-gray-800 transition-all hover:scale-110">
                <TwitterIcon />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800 transition-all hover:scale-110">
                <GithubIcon />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-400 hover:text-[#5865F2] border border-gray-200 dark:border-gray-800 transition-all hover:scale-110">
                <DiscordIcon />
              </a>
            </div>
          </div>
          
          {/* Tools: Editing */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest flex items-center gap-2">
               <Zap size={14} className="text-amber-500" /> Image Editing
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><Link href="/tools/image-compressor" className="hover:text-indigo-600 transition-colors">Image Compressor</Link></li>
              <li><Link href="/tools/image-resizer" className="hover:text-indigo-600 transition-colors">Image Resizer</Link></li>
              <li><Link href="/tools/image-cropper" className="hover:text-indigo-600 transition-colors">Image Cropper</Link></li>
              <li><Link href="/tools/add-watermark" className="hover:text-indigo-600 transition-colors">Add Watermark</Link></li>
            </ul>
          </div>

          {/* Tools: AI & Converter */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest flex items-center gap-2">
               <ImageIcon size={14} className="text-blue-500" /> Conversion & AI
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li><Link href="/tools/remove-background" className="hover:text-indigo-600 transition-colors">Background Remover</Link></li>
              <li><Link href="/tools/image-to-text" className="hover:text-indigo-600 transition-colors">Image to Text (OCR)</Link></li>
              <li><Link href="/tools/format-converter" className="hover:text-indigo-600 transition-colors">Format Converter</Link></li>
              <li><Link href="/tools/image-to-pdf" className="hover:text-indigo-600 transition-colors">Image to PDF</Link></li>
              <li><Link href="/tools/webp-converter" className="hover:text-indigo-600 transition-colors">WebP Converter</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-600 transition-colors font-bold text-indigo-500">Platform Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest flex items-center gap-2">
               <Mail size={14} className="text-purple-500" /> Stay Updated
            </h4>
            <div className="space-y-4">
               <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Get the latest tool updates and image processing tips.
               </p>
               <div className="relative group">
                  <input 
                     type="email" 
                     placeholder="your@email.com" 
                     suppressHydrationWarning
                     className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-xs font-semibold focus:ring-2 focus:ring-indigo-500 outline-none transition-all group-hover:border-indigo-300 dark:group-hover:border-indigo-800"
                  />
                  <button suppressHydrationWarning className="absolute right-1 top-1 bottom-1 px-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                     <ArrowRight size={14} />
                  </button>
               </div>
            </div>
          </div>
        </div>
        
        {/* Footnotes & Legal */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <p className="text-xs font-bold text-gray-400">
               &copy; {new Date().getFullYear()} ImageToolsHub. All rights reserved.
            </p>
            <div className="hidden md:flex items-center space-x-4">
               <Link href="/privacy" className="text-xs font-bold text-gray-400 hover:text-indigo-600">Privacy Policy</Link>
               <Link href="/contact" className="text-xs font-bold text-gray-400 hover:text-indigo-600">Contact Support</Link>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/30 text-green-600 dark:text-green-400">
             <ShieldCheck size={14} />
             <span className="text-[10px] font-black uppercase tracking-widest">100% Local Processing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
