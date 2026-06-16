import React from 'react'

const CardInfoWithRating = () => {
  return (
         <div
        className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4  px-4"
        style={{opacity: "1", transform: "none"}}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]">
          <div className="absolute -right-4 -top-4 text-6xl font-bold text-white/[0.03] transition-all group-hover:text-white/[0.06]">
            1.6+
          </div>
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
            className="lucide lucide-zap mb-3 h-5 w-5 text-amber-400"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
          <p className="text-3xl font-bold text-white">1.6+</p>
          <p className="mt-1 text-sm text-slate-500">Years Experience</p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]">
          <div className="absolute -right-4 -top-4 text-6xl font-bold text-white/[0.03] transition-all group-hover:text-white/[0.06]">
            15+
          </div>
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
            className="lucide lucide-trophy mb-3 h-5 w-5 text-amber-400"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
          <p className="text-3xl font-bold text-white">15+</p>
          <p className="mt-1 text-sm text-slate-500">Projects Built</p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]">
          <div className="absolute -right-4 -top-4 text-6xl font-bold text-white/[0.03] transition-all group-hover:text-white/[0.06]">
            56
          </div>
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
            className="lucide lucide-code-xml mb-3 h-5 w-5 text-amber-400"
          >
            <path d="m18 16 4-4-4-4"></path>
            <path d="m6 8-4 4 4 4"></path>
            <path d="m14.5 4-5 16"></path>
          </svg>
          <p className="text-3xl font-bold text-white">10+</p>
          <p className="mt-1 text-sm text-slate-500">Technologies Used</p>
        </div>
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]">
          <div className="absolute -right-4 -top-4 text-6xl font-bold text-white/[0.03] transition-all group-hover:text-white/[0.06]">
           100%
          </div>
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
            className="lucide lucide-clock mb-3 h-5 w-5 text-amber-400"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p className="text-3xl font-bold text-white">100%</p>
          <p className="mt-1 text-sm text-slate-500">Commitment to Quality</p>
        </div>
      </div>
  )
}

export default CardInfoWithRating
