"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/utils/cn";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={cn(
          "group flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl transition-all duration-500 hover:scale-110 hover:border-indigo-500 hover:shadow-indigo-500/20 active:scale-95",
          isVisible 
            ? "translate-y-0 opacity-100 scale-100" 
            : "translate-y-10 opacity-0 scale-50 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp 
          size={24} 
          className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:-translate-y-1 transition-all duration-300" 
        />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}
