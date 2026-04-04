"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { 
  Send, 
  Mail, 
  User, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
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

const TwitterIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="currentColor" 
    className={cn("transition-colors", className)}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
  </svg>
);

const CONTACT_METHODS = [
  {
    title: "Email Support",
    value: "support@imagetoolshub.com",
    desc: "For general inquiries and security questions.",
    icon: <Mail className="text-indigo-600 dark:text-indigo-400" size={24} />,
    href: "mailto:support@imagetoolshub.com"
  },
  // TODO: add real GitHub Discussions URL
  // {
  //   title: "Community Hub",
  //   value: "GitHub Discussions",
  //   desc: "Feature requests and bug reporting in the open.",
  //   icon: <GithubIcon className="text-gray-900 dark:text-gray-100" size={24} />,
  //   href: "https://github.com"
  // },
  // TODO: add real Twitter/X URL
  // {
  //   title: "Fast Response",
  //   value: "@ImageToolsHub",
  //   desc: "Follow us for quick updates and major news.",
  //   icon: <TwitterIcon className="text-sky-500" size={24} />,
  //   href: "https://twitter.com"
  // }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.currentTarget,
        'YOUR_PUBLIC_KEY'
      );
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please configure EmailJS keys.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-white dark:bg-gray-950 pt-20 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 dark:border-indigo-900/30 dark:bg-indigo-900/20">
            <MessageSquare size={14} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
              We're here to help
            </span>
          </div>
          <h1 className="text-5xl font-black tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl lg:text-8xl">
            Get in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-gray-500 dark:text-gray-400 sm:text-xl">
            Have a question, feature request, or found a bug? Our team is always ready to hear from our users.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="w-full pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_METHODS.map((method) => (
              <a 
                key={method.title} 
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-900/40 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/60 transition-colors">
                  {method.icon}
                </div>
                <h3 className="mb-2 text-lg font-black tracking-tight text-gray-900 dark:text-gray-100">
                  {method.title}
                </h3>
                <p className="mb-2 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  {method.value}
                </p>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {method.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="relative w-full pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] border border-gray-200 bg-white/70 shadow-2xl dark:border-gray-800 dark:bg-gray-950/70 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Form Content */}
              <div className="col-span-1 p-8 md:col-span-3 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="user_name" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                        Your Full Name
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-indigo-600 transition-colors">
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          required
                          className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-sm font-bold placeholder:font-medium focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Constant"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="user_email" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                        Your Email
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-indigo-600 transition-colors">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          name="user_email"
                          id="user_email"
                          required
                          className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-sm font-bold placeholder:font-medium focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="hello@domain.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                      How can we help?
                    </label>
                    <div className="relative group">
                      <div className="absolute top-4 left-4 flex items-center pointer-events-none group-focus-within:text-indigo-600 transition-colors">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="block w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 text-sm font-bold placeholder:font-medium focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about the tool you need or an issue you found..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-5 text-lg font-black text-white shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Sidebar Info */}
              <div className="hidden md:flex col-span-2 bg-indigo-600/5 dark:bg-indigo-900/10 border-l border-gray-200 dark:border-gray-800 p-12 flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-black tracking-tight text-gray-900 dark:text-gray-100">Global Processing</h4>
                    <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                      We operate across timezones, focusing on a globally distributed creator community.
                    </p>
                  </div>
                  <div className="space-y-6">
                     {[
                       { icon: <ShieldCheck size={20} className="text-emerald-500" />, text: "Priority Encryption" },
                       { icon: <CheckCircle2 size={20} className="text-indigo-500" />, text: "Direct Developer Contact" },
                       { icon: <CheckCircle2 size={20} className="text-purple-500" />, text: "Feature Map Integration" }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                            {item.icon}
                          </div>
                          <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{item.text}</span>
                       </div>
                     ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Response Window</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Expected: 12-24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
