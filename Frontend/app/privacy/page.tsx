import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  Cookie,
  RefreshCw,
  Mail,
  Server,
  Globe,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ImageToolsHub",
  description:
    "ImageToolsHub processes all images 100% locally in your browser. No uploads, no tracking, no data collection. Read our full privacy policy.",
  openGraph: {
    title: "Privacy Policy | ImageToolsHub",
    description: "Your images never leave your device. Read how ImageToolsHub protects your privacy.",
    url: "https://imagetoolshub.com/privacy",
  },
};

const SECTIONS = [
  {
    id: "data-collection",
    icon: <Server size={22} className="text-indigo-500" />,
    number: "01",
    title: "Data Collection & Processing",
    color: "bg-indigo-500/10 border-indigo-500/20",
    content: [
      {
        heading: "Zero Server Uploads",
        text: "ImageToolsHub processes all images entirely within your web browser using WebAssembly and Web Workers. Your files are never transmitted to our servers — not even temporarily. Your data stays on your device from start to finish.",
      },
      {
        heading: "No Personal Data Collection",
        text: "We do not ask for, collect, or store any personally identifiable information (PII) — including name, email address, or payment details. You can use every tool on this platform without creating an account.",
      },
    ],
  },
  {
    id: "local-processing",
    icon: <Lock size={22} className="text-emerald-500" />,
    number: "02",
    title: "How Local Processing Works",
    color: "bg-emerald-500/10 border-emerald-500/20",
    content: [
      {
        heading: "In-Browser Engine",
        text: "When you use any tool — compression, conversion, background removal, or resizing — the processing happens using your device's CPU and RAM. The tool code runs in a sandboxed browser environment that has no access to external servers.",
      },
      {
        heading: "Temporary Memory Only",
        text: "Your images exist only in the browser's temporary memory (RAM) during processing. Once you close the tab or navigate away, all image data is automatically cleared. We have no mechanism — technical or legal — to access this data.",
      },
    ],
  },
  {
    id: "analytics",
    icon: <Eye size={22} className="text-blue-500" />,
    number: "03",
    title: "Analytics & Tracking",
    color: "bg-blue-500/10 border-blue-500/20",
    content: [
      {
        heading: "No Third-Party Tracking",
        text: "We do not embed any third-party tracking scripts such as Google Analytics, Facebook Pixel, or similar services. Your browsing behavior on ImageToolsHub is not monitored, profiled, or sold.",
      },
      {
        heading: "Basic Performance Monitoring",
        text: "We may use privacy-respecting, self-hosted analytics to understand aggregate page traffic (e.g., total visitors per page). This data is fully anonymized and never linked to individual users.",
      },
    ],
  },
  {
    id: "cookies",
    icon: <Cookie size={22} className="text-amber-500" />,
    number: "04",
    title: "Cookies",
    color: "bg-amber-500/10 border-amber-500/20",
    content: [
      {
        heading: "Functional Cookies Only",
        text: "We use a minimal number of essential cookies — specifically for dark/light mode preferences and session state. These cookies do not track your identity, browsing history, or behavior across sites.",
      },
      {
        heading: "No Advertising Cookies",
        text: "We do not use any advertising or retargeting cookies. We do not participate in cookie-based advertising networks.",
      },
    ],
  },
  {
    id: "third-parties",
    icon: <Globe size={22} className="text-purple-500" />,
    number: "05",
    title: "Third-Party Services",
    color: "bg-purple-500/10 border-purple-500/20",
    content: [
      {
        heading: "Content Delivery",
        text: "We use a CDN (Content Delivery Network) to serve static assets like JavaScript, CSS, and fonts. This CDN may log your IP address in aggregate access logs for performance purposes. These logs are not shared, sold, or used for profiling.",
      },
      {
        heading: "No Image Processing APIs",
        text: "We do not pass your images to any third-party processing APIs or AI cloud services. All AI features (e.g., background removal) run client-side using locally loaded model weights.",
      },
    ],
  },
  {
    id: "policy-changes",
    icon: <RefreshCw size={22} className="text-rose-500" />,
    number: "06",
    title: "Changes to This Policy",
    color: "bg-rose-500/10 border-rose-500/20",
    content: [
      {
        heading: "Policy Updates",
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The 'Last Updated' date at the top of this page will be revised accordingly. We encourage you to review this page periodically.",
      },
      {
        heading: "No Retroactive Changes",
        text: "Since we do not collect personal data or contact information, we cannot notify users of policy changes via email. Any changes will only apply to activity occurring after the policy update date.",
      },
    ],
  },
  {
    id: "contact",
    icon: <Mail size={22} className="text-cyan-500" />,
    number: "07",
    title: "Contact Us",
    color: "bg-cyan-500/10 border-cyan-500/20",
    content: [
      {
        heading: "Questions or Concerns",
        text: "If you have any questions, concerns, or requests related to this Privacy Policy or our data practices, please reach out to us via our Contact page. We are committed to responding within 48 hours.",
      },
    ],
  },
];

const KEY_COMMITMENTS = [
  "All image processing happens locally in your browser",
  "No images are ever uploaded to our servers",
  "No personal accounts or sign-ups required",
  "No third-party advertising or tracking pixels",
  "No cookies beyond essential preferences",
  "All AI models run client-side — no cloud APIs",
];

export default function PrivacyPage() {
  const lastUpdated = "April 4, 2026";

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[50%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">

        {/* Hero */}
        <header className="mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] mb-6">
            <ShieldCheck size={16} />
            <span>Privacy First, Always</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-gray-100 leading-none italic mb-6">
            Your Privacy.<br />
            <span className="text-indigo-600">Our Promise.</span>
          </h1>
          <p className="text-xl font-medium text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
            ImageToolsHub is built on a simple principle: your images never leave your device.
            Everything happens inside your browser — always.
          </p>
          <p className="mt-6 text-sm font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>
        </header>

        {/* Key Commitments Card */}
        <div className="mb-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-2xl shadow-indigo-500/20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-sm">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight">Our Core Privacy Commitments</h2>
              <p className="text-indigo-200 text-sm font-medium">What we guarantee to every user</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KEY_COMMITMENTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-indigo-100 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {SECTIONS.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="group p-8 sm:p-10 rounded-[2rem] bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-backwards"
              style={{ animationDelay: `${300 + i * 80}ms` }}
            >
              <div className="flex items-start gap-6">
                {/* Number + Icon */}
                <div className="flex flex-col items-center gap-3 shrink-0 pt-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 dark:text-gray-700">
                    {section.number}
                  </span>
                  <div className={`p-3 rounded-2xl border ${section.color}`}>
                    {section.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-gray-100">
                    {section.title}
                  </h2>
                  <div className="space-y-5">
                    {section.content.map((block) => (
                      <div key={block.heading} className="space-y-2">
                        <h3 className="text-sm font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                          {block.heading}
                        </h3>
                        <p className="text-base font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                          {block.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  {section.id === "contact" && (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-black text-sm hover:bg-indigo-700 transition-colors mt-2"
                    >
                      Go to Contact Page →
                    </Link>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-12 rounded-[2.5rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 mx-auto">
            <ShieldCheck size={28} />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900 dark:text-gray-100">
            Browse with Confidence
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-md mx-auto leading-relaxed">
            Every tool on ImageToolsHub is designed with privacy as the default, not an afterthought.
            Try any tool — your data stays yours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/"
              className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              Explore All Tools
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300 rounded-2xl font-black border border-gray-200 dark:border-gray-800 hover:border-indigo-500 transition-all hover:scale-105 active:scale-95"
            >
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
