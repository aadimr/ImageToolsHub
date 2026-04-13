"use client";

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { 
  Send, 
  Mail, 
  User, 
  MessageSquare, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
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
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/3 rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/20" />
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 xl:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Huge Type & Details */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/50 px-4 py-2 dark:border-indigo-500/20 dark:bg-indigo-500/10 backdrop-blur-md">
                <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
                  We're here to help
                </span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 dark:text-white leading-[1.1]">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 italic">Together.</span>
              </h1>
              <p className="max-w-md text-lg sm:text-xl font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                Found a bug? Have a feature request? Want to say hi? Reach out and our core team will get back to you.
              </p>
            </div>

            {/* Direct Contact info integrated into Left side */}
            <div className="space-y-6 p-8 rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl shadow-indigo-500/5">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400">Direct Contact</h3>
              
              <a href="mailto:support@imagetoolshub.com" className="group flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Email Support</h4>
                  <p className="text-sm font-medium text-gray-500">support@imagetoolshub.com</p>
                </div>
              </a>

              {/* TODO: add real GitHub Discussions URL */}
              {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300 transition-colors group-hover:bg-gray-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-gray-900">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Community Hub</h4>
                  <p className="text-sm font-medium text-gray-500">GitHub Discussions</p>
                </div>
              </a> */}

              {/* TODO: add real Twitter/X URL */}
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-500 dark:bg-sky-500/10 transition-colors group-hover:bg-sky-500 group-hover:text-white">
                  <TwitterIcon size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-sky-500 transition-colors">Fast Response</h4>
                  <p className="text-sm font-medium text-gray-500">@ImageToolsHub</p>
                </div>
              </a> */}
            </div>
            
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-medium text-sm">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-gray-50 dark:border-gray-950 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300">
                   <ShieldCheck size={18} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-gray-50 dark:border-gray-950 bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-300">
                   <CheckCircle2 size={18} />
                </div>
              </div>
              <span>Expected response: <strong className="text-gray-900 dark:text-white">12-24 hours</strong></span>
            </div>
          </div>

          {/* Right Column: The Premium Form */}
          <div className="lg:col-span-7 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl relative overflow-hidden h-full flex flex-col justify-center">
              
              <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                <Send size={120} className="text-indigo-300 rotate-12" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10 w-full max-w-xl mx-auto">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-[11px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 ml-2">
                    Your Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="block w-full pl-14 pr-6 py-5 rounded-2xl border-0 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white text-base font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 shadow-sm transition-all outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-[11px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 ml-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="block w-full pl-14 pr-6 py-5 rounded-2xl border-0 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white text-base font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 shadow-sm transition-all outline-none"
                      placeholder="jane@amazing.app"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[11px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 ml-2">
                    How can we help?
                  </label>
                  <div className="relative group">
                    <div className="absolute top-5 left-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-indigo-600 transition-colors">
                      <MessageSquare size={20} />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="block w-full pl-14 pr-6 py-5 rounded-2xl border-0 ring-1 ring-inset ring-gray-200 dark:ring-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white text-base font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-indigo-500 shadow-sm transition-all outline-none resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-6 text-base font-black text-white tracking-wide shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-600/30 active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>SEND SECURE MESSAGE</span>
                      <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
