"use client";

import React, { useState } from 'react';
import { TOOLS } from '@/utils/toolsData';
import { ToolCard } from './ui/ToolCard';
import { Search, Sparkles, Zap, ArrowRightLeft, Scissors } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

export function SearchableToolGrid() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = TOOLS.filter(tool => 
    tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { id: 'Compression', title: 'Editing & Optimization', icon: <Zap className="text-amber-500" size={20} /> },
    { id: 'Conversion', title: 'Universal Converters', icon: <ArrowRightLeft className="text-blue-500" size={20} /> },
    { id: 'Editing', title: 'Power Editing', icon: <Scissors className="text-purple-500" size={20} /> },
    { id: 'AI', title: 'AI Innovations', icon: <Sparkles className="text-indigo-500" size={20} /> },
  ] as const;

  const popularConversions = [
     { name: "JPG to WebP", href: "/tools/jpg-to-webp" },
     { name: "PNG to WebP", href: "/tools/png-to-webp" },
     { name: "WebP to JPG", href: "/tools/webp-to-jpg" },
     { name: "PNG to JPG", href: "/tools/png-to-jpg" },
     { name: "JPG to PNG", href: "/tools/jpg-to-png" },
  ];

  return (
    <div className="space-y-20">
      {/* Search Bar Section */}
      <div className="max-w-3xl mx-auto -mt-10 mb-16 relative">
         <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400">
            <Search size={22} />
         </div>
         <input
            type="text"
            placeholder="Search 14+ professional image tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-16 pr-8 py-6 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-xl shadow-2xl shadow-indigo-500/5 focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500/50 outline-none transition-all placeholder:text-gray-400 text-lg font-bold text-gray-900 dark:text-gray-100"
         />
         <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 bg-gray-100 dark:bg-gray-900 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-800">
              {filteredTools.length} Tools Available
            </span>
         </div>
      </div>

      {searchQuery ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
           <h2 className="text-2xl font-black tracking-tight flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600">
                <Search size={20} />
              </div>
              Results for &quot;{searchQuery}&quot;
           </h2>
           {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredTools.map((tool) => (
                    <ToolCard key={tool.id} {...tool} />
                ))}
              </div>
           ) : (
              <div className="py-24 text-center bg-gray-50/50 dark:bg-gray-900/50 rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-800">
                 <p className="text-gray-500 font-black tracking-tight text-xl mb-2">No tools found</p>
                 <p className="text-sm text-gray-400 font-medium">Try searching for keywords like &quot;compress&quot; or &quot;WebP&quot;</p>
              </div>
           )}
        </div>
      ) : (
        <div className="space-y-24">
          {categories.map((cat, idx) => {
             const catTools = TOOLS.filter(t => t.category === cat.id);
             if (catTools.length === 0) return null;
             return (
                <section 
                  key={cat.id} 
                  className={cn(
                    "space-y-8 animate-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-backwards",
                    idx === 0 ? "delay-0" : idx === 1 ? "delay-150" : idx === 2 ? "delay-300" : "delay-500"
                  )}
                >
                   <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-white dark:bg-gray-900 shadow-xl shadow-indigo-500/5 border border-gray-100 dark:border-gray-800 transition-transform hover:scale-110 duration-500">
                          {cat.icon}
                      </div>
                      <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-gray-100">{cat.title}</h2>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-200 dark:from-gray-800 to-transparent ml-4 hidden md:block" />
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {catTools.map((tool) => (
                          <ToolCard key={tool.id} {...tool} />
                      ))}
                   </div>
                </section>
             )
          })}
        </div>
      )}

      {/* Popular Conversions Segment */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-10 sm:p-16 rounded-[3.5rem] shadow-2xl shadow-indigo-600/20 animate-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-backwards mt-32">
          <div className="absolute top-0 right-0 h-64 w-64 -translate-y-12 translate-x-12 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 translate-y-12 -translate-x-12 rounded-full bg-indigo-900/20 blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12 text-white">
             <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-md">
                   <ArrowRightLeft size={14} className="text-white" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em]">Quick Swaps</span>
                </div>
                <h2 className="text-4xl font-black tracking-tight leading-tight">Fastest Browser-Based Image Conversions</h2>
                <p className="text-indigo-50 font-medium leading-relaxed opacity-90">Universal swappers for the most common digital workflows. Zero uploads, zero latency.</p>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {popularConversions.map((conv) => (
                   <Link 
                      key={conv.name} 
                      href={conv.href}
                      className="group flex flex-col items-center justify-center p-5 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 text-sm font-black text-white hover:bg-white/20 transition-all active:scale-95 text-center gap-3"
                   >
                       <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/20 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                         <ArrowRightLeft size={16} />
                       </div>
                       {conv.name}
                   </Link>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
}
