import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-slate-950/50 backdrop-blur-xl mt-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
            <span className="text-xs font-bold text-white">MS</span>
          </div>
          <span className="text-sm text-slate-500">
            © 2026 Muhammad Aslan Ashraf. All rights reserved.
          </span>
        </div>
        <a
          href="https://www.linkedin.com/in/muhammad-aslan-ashraf-8883032ba"
          className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-green-400"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-badge-check h-4 w-4"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          Connect On LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
