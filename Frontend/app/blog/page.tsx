import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import { BLOG_POSTS } from "@/utils/blogData";

export const metadata: Metadata = {
  title: "Blog – Image Processing Insights & Tutorials | ImageToolsHub",
  description:
    "Deep dives into browser-based image processing, privacy standards, WebP optimization, AI tools, and the future of fast, secure image formatting.",
  openGraph: {
    title: "Blog – Image Processing Insights & Tutorials | ImageToolsHub",
    description:
      "Deep dives into browser-based image processing, privacy standards, WebP optimization, AI tools, and the future of fast, secure image formatting.",
    url: "https://imagetoolshub.com/blog",
    siteName: "ImageToolsHub",
    images: [
      {
        url: BLOG_POSTS.find((p) => p.featured)?.image ?? "",
        width: 1200,
        alt: "ImageToolsHub Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Image Processing Insights | ImageToolsHub",
    description: "Tutorials, privacy guides, and deep tech dives on browser-based image tools.",
  },
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured);
  const otherPosts = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <div className="relative overflow-hidden min-h-screen pb-32">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="mb-24 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px]">
            <BookOpen size={16} />
            <span>The Image Masterclass</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-gray-100 italic">
            Insights &amp; <span className="text-indigo-600">Impact.</span>
          </h1>
          <p className="max-w-2xl text-xl font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
            Deep dives into browser-based image processing, privacy standards, and the future of fast formatting.
          </p>
        </header>

        {/* Featured Post Card — Cinematic Full-Bleed */}
        {featuredPost && (
          <section className="mb-32 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-backwards">
            <Link
              href={`/blog/${featuredPost.id}`}
              className="group relative flex flex-col justify-end overflow-hidden rounded-[3rem] shadow-2xl shadow-black/20 hover:shadow-indigo-500/20 transition-all duration-700"
              style={{ minHeight: "620px" }}
            >
              {/* Full-bleed background image */}
              <div className="absolute inset-0">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                {/* Multi-layer dark gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-gray-950/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/50 via-transparent to-transparent" />
              </div>

              {/* Top badges row */}
              <div className="absolute top-8 left-8 z-10 flex items-center gap-3">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-white/10 text-white border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  Featured
                </span>
                <span className={cn(
                  "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/20 text-white",
                  featuredPost.bg
                )}>
                  {featuredPost.category}
                </span>
              </div>

              {/* Read time — top right */}
              <div className="absolute top-8 right-8 z-10">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-white/10 text-white border border-white/20">
                  <Clock size={11} />
                  {featuredPost.readTime}
                </span>
              </div>

              {/* Article content — over image */}
              <div className="relative z-10 p-10 sm:p-14 lg:p-20 space-y-6">
                {/* Animated accent line */}
                <div className="h-1 w-16 rounded-full bg-indigo-500 group-hover:w-28 transition-all duration-700" />

                <div className="max-w-3xl space-y-5">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight group-hover:text-indigo-100 transition-colors duration-500">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg font-medium text-white/65 leading-relaxed max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-black text-sm transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:gap-5 shadow-xl">
                    READ FULL ARTICLE <ArrowRight size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                    {featuredPost.date}
                  </span>
                </div>
              </div>

              {/* Hover shimmer overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none bg-gradient-to-br from-indigo-600/8 via-transparent to-purple-600/8" />
            </Link>
          </section>
        )}

        {/* Categories / Filter Bar */}
        <div className="mb-16 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-backwards">
          {["All Posts", "Tutorials", "Privacy", "Tech", "Guides", "Product Updates"].map((cat, i) => (
            <button
              key={cat}
              className={cn(
                "px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest border transition-all hover:scale-105 active:scale-95",
                i === 0
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-600/20"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 text-gray-500 hover:border-indigo-500 hover:text-indigo-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-backwards">
          {otherPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex flex-col bg-white dark:bg-gray-950 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-indigo-500/[0.02] hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-3 overflow-hidden cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={cn(
                      "px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-white",
                      post.bg
                    )}
                  >
                    {post.category}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Meta Row: date + reading time */}
                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <span>{post.date}</span>
                    <span className="text-gray-300 dark:text-gray-700">•</span>
                    <Clock size={10} className="shrink-0" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-900">
                  <span className="text-xs font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                    CONTINUE READING{" "}
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl",
                      post.bg,
                      post.color
                    )}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Tool Discovery CTA */}
        <section className="mt-32 relative overflow-hidden rounded-[3.5rem] animate-in fade-in zoom-in-95 duration-1000">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 p-12 sm:p-20">
            {/* Header */}
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/70 text-[10px] font-black uppercase tracking-widest backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Free &amp; Private — No Uploads Required
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Ready to put it into <span className="text-indigo-400 italic">practice?</span>
              </h2>
              <p className="text-white/60 text-lg font-medium max-w-xl mx-auto leading-relaxed">
                Every insight from these articles can be applied instantly — right here in your browser.
              </p>
            </div>

            {/* Tool Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { name: "Image Compressor", desc: "Shrink file size without quality loss", href: "/tools/image-compressor", emoji: "⚡", accent: "from-indigo-500 to-indigo-700" },
                { name: "WebP Converter", desc: "Switch to next-gen format instantly", href: "/tools/webp-converter", emoji: "🔄", accent: "from-blue-500 to-blue-700" },
                { name: "Background Remover", desc: "AI-powered, runs in your browser", href: "/tools/remove-background", emoji: "✂️", accent: "from-purple-500 to-purple-700" },
                { name: "Image Resizer", desc: "Resize to exact dimensions in seconds", href: "/tools/image-resizer", emoji: "📐", accent: "from-emerald-500 to-emerald-700" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group relative overflow-hidden p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${tool.accent}`} />
                  <div className="relative space-y-4">
                    <span className="text-3xl">{tool.emoji}</span>
                    <div>
                      <h3 className="font-black text-white text-sm tracking-tight group-hover:text-indigo-300 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-white/50 text-xs font-medium leading-relaxed mt-1">{tool.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-indigo-400 group-hover:gap-2 transition-all">
                      Try Free <ChevronRight size={10} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-2xl font-black text-sm hover:bg-indigo-50 hover:gap-5 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
              >
                EXPLORE ALL 14+ TOOLS <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
