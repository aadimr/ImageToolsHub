"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Zap, 
  UserX, 
  Heart, 
  Cpu, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";
import { cn } from "@/utils/cn";

const GithubIconCustom = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
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

const VALUES = [
  {
    title: "100% Privacy First",
    desc: "Your images never leave your computer. We use browser-side processing, meaning zero data is ever uploaded to our servers. Your privacy is not just a policy, it's our architecture.",
    icon: <ShieldCheck className="text-emerald-500" size={28} />,
    color: "emerald"
  },
  {
    title: "Lightning Fast Speed",
    desc: "No waiting for uploads or server processing queues. By leveraging your hardware's local power, our tools respond instantly, even with high-resolution batch jobs.",
    icon: <Zap className="text-amber-500" size={28} />,
    color: "amber"
  },
  {
    title: "Zero Barrier Entry",
    desc: "No sign-ups, no subscriptions, and definitely no 'freemium' watermarks. We believe professional-grade image tools should be accessible to everyone, everywhere.",
    icon: <UserX className="text-indigo-500" size={28} />,
    color: "indigo"
  }
];

const STACK = [
  { name: "Next.js", desc: "For lightning-fast, SEO-optimized routing and server-side excellence." },
  { name: "TypeScript", desc: "Ensuring deep reliability and type-safety across every pixel operation." },
  { name: "Tailwind CSS", desc: "A sleek, modern design system for a fluid experience on any device." },
  { name: "Browser Canvas API", desc: "The core engine that performs complex image math directly in your browser." }
];

export default function About() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-gray-950 pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
          <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 dark:border-indigo-900/30 dark:bg-indigo-900/20">
            <Heart size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              Made with passion for creators
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl lg:text-8xl">
            Empowering Your <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Creative Workflow</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-gray-500 dark:text-gray-400 sm:text-xl">
            ImageToolsHub is more than just a suite of tools. It's a sanctuary for privacy-conscious creators who demand professional quality without the overhead of heavy software or security risks.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full bg-gray-50/50 py-24 dark:bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-base font-black uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              The Architecture of Trust
            </h2>
            <p className="mt-4 text-3xl font-black tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              Why we're different from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {VALUES.map((value) => (
              <div 
                key={value.title} 
                className="group relative flex flex-col rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className={cn(
                  "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 group-hover:scale-110 transition-transform duration-300"
                )}>
                  {value.icon}
                </div>
                <h3 className="mb-4 text-xl font-black tracking-tight text-gray-900 dark:text-gray-100">
                  {value.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission / Technology Section */}
      <section className="w-full py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-purple-600 dark:text-purple-400">
                  Pure Local Magic
                </h2>
                <p className="text-4xl font-black tracking-tight text-gray-900 dark:text-gray-100">
                  The Power of Browser-Side Processing
                </p>
              </div>
              <p className="text-lg font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                Most image tools upload your files to a server, process them, and then send them back. We think that's outdated, slow, and insecure. ImageToolsHub leverages the modern Browser Canvas API to do everything right on your machine.
              </p>
              <div className="space-y-4">
                {STACK.map((tech) => (
                  <div key={tech.name} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <CheckCircle2 size={14} />
                    </div>
                    <div>
                      <span className="block text-base font-bold text-gray-900 dark:text-gray-100">{tech.name}</span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{tech.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="relative rounded-3xl border border-gray-200 bg-gray-50/50 p-8 dark:border-gray-800 dark:bg-gray-900/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-xl bg-indigo-600 p-2.5 text-white">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black tracking-tight text-gray-900 dark:text-gray-100">Smart Engine v2.0</h4>
                    <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Optimized for Performance</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-1000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                      <p className="text-[10px] font-black uppercase text-gray-400">Batch Export</p>
                      <p className="text-xl font-black text-indigo-600">Enabled</p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                      <p className="text-[10px] font-black uppercase text-gray-400">AI Upscaling</p>
                      <p className="text-xl font-black text-purple-600">Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="mb-24 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-indigo-600 py-16 px-8 sm:px-16 text-center text-white" id="github-cta">
          <div className="absolute inset-0 z-0">
             <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              Transparent & Open Source
            </h2>
            <p className="mt-6 text-lg font-bold text-indigo-100/90">
              We believe in building in public. Join our community on GitHub to track development, report bugs, or request the features you need.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-black text-indigo-600 transition-all hover:scale-105 active:scale-95"
              >
                <GithubIconCustom size={24} />
                <span>Visit Star Hub</span>
              </a>
              <Link
                href="/contact"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-black transition-all hover:bg-white/20 active:scale-95"
              >
                <span>Get Help</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
