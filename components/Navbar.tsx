"use client";

import Link from "next/link";
import { 
  Image as ImageIcon, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Sparkles, 
  ArrowRightLeft, 
  Scissors,
  MessageSquare,
  LayoutGrid,
  BookOpen
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

const GithubIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={cn("transition-colors", className)}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.71.084-.71 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

const TOOL_CATEGORIES = [
  {
    title: "Editing & Optimization",
    icon: <Scissors size={16} className="text-purple-500" />,
    tools: [
      { name: "Compressor", href: "/tools/image-compressor", desc: "Reduce file size" },
      { name: "Resizer", href: "/tools/image-resizer", desc: "Change dimensions" },
      { name: "Cropper", href: "/tools/image-cropper", desc: "Trim images" },
      { name: "Watermark", href: "/tools/add-watermark", desc: "Protect work" },
    ]
  },
  {
    title: "AI & Converters",
    icon: <Sparkles size={16} className="text-indigo-500" />,
    tools: [
      { name: "Background Remover", href: "/tools/remove-background", desc: "AI Powered" },
      { name: "Image to Text", href: "/tools/image-to-text", desc: "OCR Extraction" },
      { name: "Format Converter", href: "/tools/format-converter", desc: "Universal" },
      { name: "Image to PDF", href: "/tools/image-to-pdf", desc: "Batch export" },
      { name: "WebP Converter", href: "/tools/webp-converter", desc: "Next-gen" },
    ]
  },
  {
    title: "Quick Format Swaps",
    icon: <ArrowRightLeft size={16} className="text-blue-500" />,
    tools: [
      { name: "JPG to PNG", href: "/tools/jpg-to-png", desc: "Add transparency" },
      { name: "PNG to JPG", href: "/tools/png-to-jpg", desc: "Smaller size" },
      { name: "JPG to WebP", href: "/tools/jpg-to-webp", desc: "Web performance" },
      { name: "PNG to WebP", href: "/tools/png-to-webp", desc: "Modern lossless" },
      { name: "WebP to JPG", href: "/tools/webp-to-jpg", desc: "Compatibility" },
    ]
  }
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center space-x-3 transition-transform hover:scale-[1.02] active:scale-95">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
            <ImageIcon size={26} className="group-hover:rotate-6 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight leading-none text-gray-900 dark:text-gray-100">
              ImageToolsHub
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 mt-1">
              Smart & Secure
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {/* Tools Dropdown */}
          <div className="relative" ref={toolsRef}>
            <button
              onClick={() => setIsToolsOpen(!isToolsOpen)}
              className={cn(
                "flex items-center space-x-1 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200",
                isToolsOpen 
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400" 
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200"
              )}
            >
              <LayoutGrid size={18} className="mr-2" />
              <span>All Tools</span>
              <ChevronDown size={14} className={cn("ml-1 transition-transform duration-300", isToolsOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            {isToolsOpen && (
              <div className="absolute top-full right-0 mt-3 w-[800px] rounded-3xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-2xl shadow-indigo-500/10 p-8 grid grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-200">
                {TOOL_CATEGORIES.map((category) => (
                  <div key={category.title} className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                      {category.icon}
                      {category.title}
                    </h3>
                    <div className="flex flex-col space-y-1">
                      {category.tools.map((tool) => (
                        <Link 
                          key={tool.name} 
                          href={tool.href}
                          onClick={() => setIsToolsOpen(false)}
                          className="group p-3 rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-all duration-200"
                        >
                          <div className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {tool.name}
                          </div>
                          <div className="text-[11px] text-gray-500 dark:text-gray-400 ml-0 group-hover:translate-x-1 transition-transform">
                            {tool.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200 transition-all">
            About
          </Link>
          <Link href="/blog" className="px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200 transition-all">
            Blog
          </Link>
          <Link href="/contact" className="px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200 transition-all">
            Contact
          </Link>
          
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-800 mx-2" />

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 rounded-xl transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* GitHub CTA — TODO: add real repo URL */}
          {/* <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 ml-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-2xl shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-95"
          >
            <GithubIcon size={18} />
            <span>Star Hub</span>
          </a> */}
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center lg:hidden space-x-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 text-gray-500 dark:text-gray-400 rounded-xl transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 rounded-xl transition-all active:scale-90"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 space-y-8 animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 gap-8">
            {TOOL_CATEGORIES.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.tools.map((tool) => (
                    <Link 
                      key={tool.name} 
                      href={tool.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 text-sm font-bold"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-900">
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center space-x-3 p-4 rounded-2xl text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
            >
              <LayoutGrid size={20} className="text-gray-400" />
              <span>Full About Us</span>
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center space-x-3 p-4 rounded-2xl text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
            >
              <BookOpen size={20} className="text-gray-400" />
              <span>Articles & Blog</span>
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center space-x-3 p-4 rounded-2xl text-base font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
            >
              <MessageSquare size={20} className="text-gray-400" />
              <span>Contact Support</span>
            </Link>
          </div>

          {/* GitHub mobile button — TODO: add real repo URL */}
          {/* <div className="pt-4">
            <a 
              href="https://github.com" 
              className="flex items-center justify-center space-x-2 w-full p-4 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-600/20"
            >
              <GithubIcon size={22} />
              <span>GITHUB REPOSITORY</span>
            </a>
          </div> */}
        </div>
      )}
    </nav>
  );
}

