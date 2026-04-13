import Link from "next/link";
import { ReactNode } from "react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}

export function ToolCard({ title, description, icon, href }: ToolCardProps) {
  return (
    <Link 
      href={href} 
      className="group flex flex-col items-start p-7 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-indigo-500/5 blur-2xl group-hover:bg-indigo-500/10 transition-colors duration-500" />
      
      <div className="relative z-10 h-14 w-14 flex items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm border border-indigo-100/30 dark:border-indigo-800/20">
        {icon}
      </div>
      <h3 className="relative z-10 text-xl font-black tracking-tight text-gray-900 dark:text-gray-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      
      <div className="mt-6 flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
        <span>Launch Tool</span>
        <svg width={12} height={12} className="ml-2 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </Link>
  );
}
