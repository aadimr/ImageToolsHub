import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/utils/blogData";
import { ArrowLeft, Clock, Share2, Calendar, ChevronRight, Sparkles, List, Wrench } from "lucide-react";
import { cn } from "@/utils/cn";

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: String(post.id) }));
}

// ─── Dynamic SEO metadata (items 1 & 6) ──────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === Number(id));
  if (!post) return { title: "Post Not Found | ImageToolsHub" };

  const url = `https://imagetoolshub.com/blog/${post.id}`;

  return {
    title: `${post.title} | ImageToolsHub`,
    description: post.metaDescription,
    openGraph: {
      title: `${post.title} | ImageToolsHub`,
      description: post.metaDescription,
      url,
      siteName: "ImageToolsHub",
      images: [{ url: post.image, width: 1200, alt: post.title }],
      type: "article",
      publishedTime: post.datePublished,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ImageToolsHub`,
      description: post.metaDescription,
      images: [post.image],
    },
    alternates: { canonical: url },
  };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.id === Number(id));
  if (!post) notFound();

  // Related articles: same category first, then any others (excl. current)
  const relatedPosts = [
    ...BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category),
    ...BLOG_POSTS.filter((p) => p.id !== post.id && p.category !== post.category),
  ].slice(0, 3);

  // JSON-LD structured data (item 8)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.datePublished,
    author: { "@type": "Organization", name: "ImageToolsHub Team" },
    publisher: {
      "@type": "Organization",
      name: "ImageToolsHub",
      logo: { "@type": "ImageObject", url: "https://imagetoolshub.com/favicon.ico" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://imagetoolshub.com/blog/${post.id}` },
  };

  return (
    <div className="relative overflow-hidden min-h-screen pb-32 bg-white dark:bg-gray-950">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* ── Cover Hero ─────────────────────────────────────────────────────── */}
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto max-w-5xl w-full px-6 pb-16 space-y-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-black uppercase tracking-widest mb-4 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Insights
              </Link>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-widest">
                <div className={cn("px-4 py-2 rounded-full backdrop-blur-md border border-white/20 text-white", post.bg)}>
                  {post.category}
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar size={13} />
                  <span>{post.date}</span>
                </div>
                {/* Reading time (item 2) */}
                <div className="flex items-center gap-2 text-white/70">
                  <Clock size={13} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight max-w-4xl">
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* ── Content + Sidebar ──────────────────────────────────────────────── */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16 items-start">

            {/* Article body */}
            <article>
              {/* Table of Contents (item 5) — mobile only, shown above article */}
              {post.toc.length > 0 && (
                <div className="lg:hidden mb-10 p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-4">
                    <List size={16} className="text-indigo-600" />
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500">Contents</span>
                  </div>
                  <ol className="space-y-2">
                    {post.toc.map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-center gap-3 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors group"
                        >
                          <span className="text-[10px] font-black text-indigo-400 w-5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                          <span className="group-hover:translate-x-0.5 transition-transform">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Article content */}
              <div
                className={cn(
                  "prose prose-lg prose-indigo dark:prose-invert max-w-none",
                  "prose-headings:font-black prose-headings:tracking-tight",
                  "prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed prose-p:font-medium",
                  "prose-a:text-indigo-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline",
                  "prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-50 dark:prose-blockquote:bg-indigo-950/30 prose-blockquote:rounded-2xl prose-blockquote:px-6 prose-blockquote:py-4",
                  "prose-strong:text-gray-900 dark:prose-strong:text-gray-100",
                  "prose-li:marker:text-indigo-500"
                )}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Related Tools CTA (item 3) */}
              {post.relatedTools.length > 0 && (
                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-indigo-600 text-white">
                      <Wrench size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-gray-100">
                        Try Related Tools
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        Free, browser-based — no uploads required
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {post.relatedTools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="group flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-400 hover:shadow-md transition-all duration-300"
                      >
                        <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                          <Wrench size={16} className="text-indigo-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <span className="block text-sm font-black text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
                            {tool.name}
                          </span>
                          <span className="block text-xs text-gray-500 font-medium leading-relaxed mt-0.5">
                            {tool.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Author + Share */}
              <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-900 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
                    IT
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-gray-100">ImageToolsHub Team</h4>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Platform Core</p>
                  </div>
                </div>
                <button
                  className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-indigo-600 transition-all hover:scale-110"
                  aria-label="Share this article"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </article>

            {/* ── Sidebar ──────────────────────────────────────────────────── */}
            <aside className="hidden lg:flex flex-col gap-10 sticky top-28">

              {/* Table of Contents (item 5) */}
              {post.toc.length > 0 && (
                <div className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 animate-in slide-in-from-right-8 duration-700 delay-300 fill-mode-backwards">
                  <div className="flex items-center gap-2 mb-5">
                    <List size={16} className="text-indigo-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Contents</span>
                  </div>
                  <ol className="space-y-3">
                    {post.toc.map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="flex items-start gap-3 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                        >
                          <span className="text-[10px] font-black text-indigo-400 mt-0.5 w-4 shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="group-hover:translate-x-0.5 transition-transform leading-snug">{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Related Articles (item 4) — sidebar */}
              <div className="space-y-5 animate-in slide-in-from-right-8 duration-700 delay-500 fill-mode-backwards">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Related Articles</h4>
                <div className="space-y-5">
                  {BLOG_POSTS.filter((p) => p.id !== post.id)
                    .slice(0, 2)
                    .map((related) => (
                      <Link key={related.id} href={`/blog/${related.id}`} className="group block space-y-2">
                        <div className="relative aspect-video rounded-2xl overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={cn("absolute top-2 left-2 px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-white", related.bg)}>
                            {related.category}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-gray-400">
                          <Clock size={9} />
                          <span>{related.readTime}</span>
                        </div>
                        <h5 className="text-sm font-black tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                          {related.title}
                        </h5>
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 flex items-center gap-1">
                          Read <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Tool CTA widget */}
              <div className="p-6 rounded-3xl bg-indigo-600 text-white space-y-4 shadow-xl shadow-indigo-600/20 animate-in slide-in-from-right-8 duration-700 delay-700 fill-mode-backwards">
                <Sparkles size={22} />
                <h4 className="font-black text-base leading-tight">
                  Ready to optimize your images locally?
                </h4>
                <p className="text-xs text-indigo-100 font-medium leading-relaxed">
                  Zero uploads, zero lag, zero cost. The most secure image suite in the browser.
                </p>
                <Link
                  href="/"
                  className="block w-full py-3 bg-white text-indigo-600 rounded-xl font-black text-xs text-center hover:bg-gray-100 transition-colors"
                >
                  EXPLORE 14+ TOOLS
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Related Articles — Bottom Grid (item 4) ─────────────────────── */}
        {relatedPosts.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 mt-24 pt-16 border-t border-gray-100 dark:border-gray-900">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-gray-100">
                Related Articles
              </h2>
              <Link
                href="/blog"
                className="text-indigo-600 font-black text-sm flex items-center gap-2 hover:gap-4 transition-all"
              >
                VIEW ALL <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.id}`}
                  className="group flex flex-col bg-white dark:bg-gray-950 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={cn("absolute top-3 left-3 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-white", related.bg)}>
                      {related.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                      <Clock size={10} />
                      <span>{related.readTime}</span>
                      <span className="text-gray-300">•</span>
                      <span>{related.date}</span>
                    </div>
                    <h3 className="text-lg font-black tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
                      {related.excerpt}
                    </p>
                    <span className="text-xs font-black text-indigo-600 flex items-center gap-1 pt-1">
                      READ MORE <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
