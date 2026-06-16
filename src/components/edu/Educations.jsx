import React from "react";

export default function Educations() {
  return (
    <section  id="education" className="grid gap-6 md:grid-cols-2 my-20">
      <div style={{ opacity: "1", transform: " none" }}>
        <div class="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-slate-100 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(245,158,11,0.12)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 h-full">
          <div class="flex flex-col gap-2">
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
              <svg
                class="h-5 w-5 text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold tracking-tight text-white">
              Education
            </h3>
            <p class="text-sm text-slate-400">Academic background</p>
          </div>
          <div class="mt-4">
            <p class="text-lg font-semibold text-white">
              BS Computer Science (BSSE)
            </p>
            <p class="mt-1 text-slate-400">
              Government College University, Faisalabad — 2024
            </p>
          </div>
        </div>
      </div>
  <div style={{ opacity: "1", transform: "none" }}>
  <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-slate-100 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(245,158,11,0.12)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 h-full">

    <div className="flex flex-col gap-2">

      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20">
        {/* icon same */}
        <svg
          className="h-5 w-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-white">
        Continuous Growth
      </h3>

      <p className="text-sm text-slate-400">
        Constantly improving my skills in modern web technologies, system design,
        and scalable software engineering practices.
      </p>
    </div>

    <div className="mt-4">
      <div className="flex flex-col gap-3">

        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3">
          <span className="text-slate-300">
            Advanced React Native, Next.js & System Architecture
          </span>
          <div className="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border border-slate-500/30 bg-transparent px-3 py-1.5 text-slate-300 hover:border-slate-400/50">
            In Progress
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3">
          <span className="text-slate-300">
            Cloud Infrastructure & DevOps (AWS / CI-CD)
          </span>
          <div className="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border border-slate-500/30 bg-transparent px-3 py-1.5 text-slate-300 hover:border-slate-400/50">
            Active
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-white/[0.03] p-3">
          <span className="text-slate-300">
            AI Integration in Full-Stack Applications
          </span>
          <div className="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border border-slate-500/30 bg-transparent px-3 py-1.5 text-slate-300 hover:border-slate-400/50">
            Learning
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
    </section>
  );
}
