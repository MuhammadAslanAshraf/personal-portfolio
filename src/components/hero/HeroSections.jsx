import React from "react";
import CardUpWorkWithReview from "./CardUpWorkWithReview";
import CardInfoWithRating from "./CardInfoWithRating";
import CardUpworkWithResponsive from "./CardUpworkWithResponsive";
import RateingCard from "./RateingCard";

const HeroSections = () => {
  return (
    <section classNameName="relative flex min-h-[85vh] flex-col justify-center ">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16 px-4 pt-20">
        <div
          className="relative z-10 flex flex-1 flex-col gap-8"
          style={{ opacity: "1" }}
        >
          <div
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            <div className="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border-0 bg-amber-500/20 px-3 py-1.5 text-white w-fit">
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
                className="lucide lucide-sparkles mr-2 h-3 w-3"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                <path d="M20 3v4"></path>
                <path d="M22 5h-4"></path>
                <path d="M4 17v2"></path>
                <path d="M5 18H3"></path>
              </svg>
              Available for new opportunities
            </div>
          </div>
          <div
            className="flex flex-col gap-6"
            style={{ opacity: "1", transform: "none" }}
          >
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
              <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-[length:200%] bg-[position:0%_0%] bg-clip-text text-transparent">
                Muhammad Aslan
              </span>
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-xl text-slate-400 sm:text-2xl md:text-3xl">
                I build modern{" "}
                <span className="flex-wrap whitespace-pre-wrap relative inline-flex overflow-hidden">
                  <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-[length:200%] bg-[position:0%_0%] bg-clip-text text-transparent">
                    web applications
                  </span>
                </span>
              </p>
              <div className="flex items-center gap-3 text-base text-slate-500 sm:text-lg">
                <span className="h-px w-8 bg-gradient-to-r from-amber-500 to-transparent"></span>
                <span className="flex-wrap whitespace-pre-wrap relative inline-flex overflow-hidden text-amber-400/80">
                  <span className="sr-only">Technical Consultant</span>
                  <span
                    className="flex flex-wrap whitespace-pre-wrap relative"
                    aria-hidden="true"
                  >
                    <span className="inline-flex">
                      <span
                        className="inline-block"
                        style={{ opacity: "1", transform: "none" }}
                      >
                        Full Stack
                      </span>
                      <span className="whitespace-pre"> </span>
                    </span>
                    <span className="inline-flex">
                      <span
                        className="inline-block"
                        style={{ opacity: "1", transform: "none" }}
                      >
                        JavaScript Developer
                      </span>
                    </span>
                  </span>
                </span>
                <span className="h-px w-8 bg-gradient-to-l from-amber-500/50 to-transparent"></span>
              </div>
            </div>
          </div>
          <p
            className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl"
            style={{ opacity: "1", transform: "none" }}
          >
            I am a MERN Stack Developer with experience building responsive,
            scalable, and user-friendly web applications using MongoDB,
            Express.js, React.js, and Node.js. I enjoy solving real-world
            problems and creating modern digital solutions.
          </p>
          <div
            className="flex flex-wrap items-center gap-4"
            style={{ opacity: "1", transform: "none" }}
          >
            <a
              href="https://www.linkedin.com/in/muhammad-aslan-ashraf-8883032ba"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50 bg-amber-500 text-white shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] active:scale-[0.98] h-12 px-8 text-base"
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
              Connect on LinkedIn
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
                className="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50 border border-white/[0.12] bg-white/[0.04] text-white backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.98] h-12 px-8 text-base"
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
                className="lucide lucide-code-xml h-4 w-4"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
              View My Work
            </a>
          </div>
          <div
            className="flex items-center gap-4"
            style={{ opacity: "1", transform: "none" }}
          >
            <a
              href=""
              className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400 transition-all hover:border-green-500/50 hover:bg-green-500/20"
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
              2+ Year Development Experience
            </a>
            <span className="flex items-center gap-2 text-sm text-slate-500">
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
                className="lucide lucide-map-pin h-4 w-4"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Lahore, Pakistan
            </span>
          </div>
        </div>

        <CardUpWorkWithReview />
      </div>
      {/* card rateing */}
      <CardInfoWithRating />
      <CardUpworkWithResponsive />
      <RateingCard />
    </section>
  );
};

export default HeroSections;
