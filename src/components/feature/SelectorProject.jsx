import React from "react";

const SelectorProject = () => {
  return (
    <div className="my-20" style={{ opacity: "1", transform: "none" }}>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <div className="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-amber-300 mb-4">
            Featured Projects
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Selected Work
          </h2>
          <p className="mt-2 text-slate-400">
            Swipe or drag to explore projects
          </p>
        </div>
        <a
          href="#projects"
          className="hidden items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white sm:flex"
        >
          View all projects
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
            className="lucide lucide-arrow-up-right h-4 w-4"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </a>
      </div>
      {/* card navigations  */}
      <div className="relative w-full">
        <div className="relative h-[480px] w-full rounded-3xl">
          <div
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            draggable="false"
            style={{
              opacity: 1,
              transform: "none",
              userSelect: "none",
              touchAction: "pan-y",
              zIndex: 1,
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-3xl border-2 border-dashed border-white/15 bg-transparent">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between p-8 sm:p-10 lg:p-12">
                <div
                  className="flex-1 max-w-lg"
                  style={{
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      alt="Racqy logo"
                      className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-contain"
                      src="/project-images/racqy/racqy-logo.png"
                    />
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                      Racqy
                    </h3>
                  </div>
                  <p className="text-xl sm:text-2xl text-white/80 mb-6">
                    Social Engagement Platform
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                      React Native
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                      AWS
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 px-5 py-3">
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
                      className="lucide lucide-sparkles h-5 w-5 text-yellow-400"
                    >
                      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                      <path d="M20 3v4"></path>
                      <path d="M22 5h-4"></path>
                      <path d="M4 17v2"></path>
                      <path d="M5 18H3"></path>
                    </svg>
                    <span className="text-base font-medium text-white">
                      Community discovery at scale
                    </span>
                  </div>
                </div>
                <div
                  className="mt-8 lg:mt-0"
                  style={{
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  <div className="relative">
                    <div className="relative w-[280px] h-[200px] sm:w-[340px] sm:h-[240px] rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
                      <div className="flex items-center gap-2 h-9 border-b border-white/10 bg-white/5 px-4">
                        <div className="flex gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-white/30"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-white/30"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-white/30"></div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="h-5 bg-white/10 rounded-md flex items-center px-3">
                            <div className="h-2 w-2 rounded-full bg-white/30 mr-2"></div>
                            <div className="h-2 flex-1 bg-white/10 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 top-9 cursor-zoom-in group">
                        <img
                          alt="Project screenshot"
                          className="h-full w-full object-cover object-top"
                          src="/project-images/racqy/image (38).png"
                          style={{ opacity: "1" }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{ opacity: " 0", transform: "scale(0.8)" }}
                          >
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                          <button className="h-1.5 rounded-full transition-all w-1.5 bg-white/40"></button>
                          <button className="h-1.5 rounded-full transition-all w-4 bg-white"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-8 right-8 z-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-white/90">05</span>
              <div className="flex flex-col">
                <span className="text-xs text-white/40 uppercase tracking-wider">
                  of
                </span>
                <span className="text-sm font-medium text-white/60">06</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl border border-white/20 transition-all hover:bg-white/20 hover:scale-105"
                aria-label="Previous project"
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
                  className="lucide lucide-chevron-left h-5 w-5"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </button>
              <button
                className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl border border-white/20 transition-all hover:bg-white/20 hover:scale-105"
                aria-label="Next project"
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
                  className="lucide lucide-chevron-right h-5 w-5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
				{/* header  */}
			 <div className="mt-6 flex items-center gap-1.5 justify-center">
      <button
        className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
        style={{
  width: "0.75rem"
}}
        aria-label="Go to Chorus Sleep"
      >
        <div className="absolute inset-0 rounded-full transition-colors duration-300 bg-white/20 group-hover:bg-white/40"></div>
      </button>
      <button
        className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
        style={{
  width: "0.75rem"
}}
        aria-label="Go to WalletChat"
      >
        <div className="absolute inset-0 rounded-full transition-colors duration-300 bg-white/20 group-hover:bg-white/40"></div>
      </button>
      <button
        className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
        style={{
  width: "0.75rem"
}}
        aria-label="Go to Rixley"
      >
        <div className="absolute inset-0 rounded-full transition-colors duration-300 bg-white/20 group-hover:bg-white/40"></div>
      </button>
      <button
        className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
        style={{
  width: "0.75rem"
}}
        aria-label="Go to Layla"
      >
        <div className="absolute inset-0 rounded-full transition-colors duration-300 bg-white/20 group-hover:bg-white/40"></div>
      </button>
      <button
        className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
        style={{
  width: "0.75rem"
}}
        aria-label="Go to Racqy"
      >
        <div className="absolute inset-0 rounded-full transition-colors duration-300 bg-white/20 group-hover:bg-white/40"></div>
      </button>
      <button
        className="group relative h-1 overflow-hidden rounded-full transition-all duration-500"
        style={{width: "3rem"}}
        aria-label="Go to Snozzberry"
      >
        <div className="absolute inset-0 rounded-full transition-colors duration-300 bg-white"></div>
        <div
          className="absolute inset-0 rounded-full bg-white/40"
          style={{transform: "translateX(-28.64%)"}}
        ></div>
      </button>
    </div>
		
{/* main  */}



		
      </div>
    </div>
  );
};

export default SelectorProject;
