import React from "react";

const SkillsAll = () => {
  return (
    <section id="skills">
      <div className="flex flex-col gap-10" style={{ opacity: "1" }}>
        <div class="text-center" style={{ opacity: "1", transform: " none" }}>
          <div class="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-amber-300 mb-4">
            Technical Skills
          </div>
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Technology Stack
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-slate-400">
            A comprehensive toolkit for building modern web and mobile
            applications
          </p>
        </div>
        {/* Skill  */}
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-code-xml h-5 w-5 text-amber-400"
                      >
                        <path d="m18 16 4-4-4-4"></path>
                        <path d="m6 8-4 4 4 4"></path>
                        <path d="m14.5 4-5 16"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">Frontend</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      React.js
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Next.js
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      TypeScript
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Redux
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-smartphone h-5 w-5 text-amber-400"
                      >
                        <rect
                          width="14"
                          height="20"
                          x="5"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">Mobile</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      React Native
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Flutter
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      BLoC
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Riverpod
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Expo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-server h-5 w-5 text-amber-400"
                      >
                        <rect
                          width="20"
                          height="8"
                          x="2"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <rect
                          width="20"
                          height="8"
                          x="2"
                          y="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="6" x2="6.01" y1="6" y2="6"></line>
                        <line x1="6" x2="6.01" y1="18" y2="18"></line>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">Backend</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Python (Django)
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Node.js
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Express
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Adonis
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      FastAPI
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-database h-5 w-5 text-amber-400"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                        <path d="M3 12A9 3 0 0 0 21 12"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">Databases</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      PostgreSQL
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      MongoDB
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Firebase
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Redis
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Supabase
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-cloud h-5 w-5 text-amber-400"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">DevOps</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      AWS
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Docker
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Kubernetes
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Vercel
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      DigitalOcean
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-test-tube h-5 w-5 text-amber-400"
                      >
                        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"></path>
                        <path d="M8.5 2h7"></path>
                        <path d="M14.5 16h-5"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">Testing</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Jest
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Mocha
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Cypress
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Puppeteer
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Detox
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-git-branch h-5 w-5 text-amber-400"
                      >
                        <line x1="6" x2="6" y1="3" y2="15"></line>
                        <circle cx="18" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M18 9a9 9 0 0 1-9 9"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">Workflow</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Git
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      CI/CD
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Agile
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Scrum
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      GraphQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] p-6 h-full">
              <div class="relative z-10">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center gap-3">
                    <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
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
                        class="lucide lucide-palette h-5 w-5 text-amber-400"
                      >
                        <circle
                          cx="13.5"
                          cy="6.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="17.5"
                          cy="10.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="8.5"
                          cy="7.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <circle
                          cx="6.5"
                          cy="12.5"
                          r=".5"
                          fill="currentColor"
                        ></circle>
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                      </svg>
                    </div>
                    <h3 class="font-semibold text-white">Design</h3>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Figma
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Material UI
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Shadcn/ui
                    </span>
                    <span class="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      Framer Motion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAll;
