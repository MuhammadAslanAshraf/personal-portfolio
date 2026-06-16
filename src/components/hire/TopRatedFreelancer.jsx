import React from "react";
import Aslan from "../skills/aslan";

const TopRatedFreelancer = () => {
  return (
    <section id="hire">
      <div
        className="relative overflow-hidden rounded-3xl border border-green-500/20"
        style={{ opacity: "1", transform: "none" }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-amber-500/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-600/15 via-transparent to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-8 text-center sm:gap-8 sm:p-12 md:p-16">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full text-xs font-medium border-0 bg-amber-500/20 px-3 py-1.5 text-white w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-3 w-3"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Top Rated MERN Freelancer
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Let’s build something{" "}
            <span className="gradient-text">impactful together</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg">
            I’m a Full-Stack (MERN) Developer with hands-on experience building
            scalable web applications, APIs, and modern UI systems. Available
            for Company Wrok / freelance work, full-time roles, and technical interviews.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">

            <div className="text-center">
              <p className="text-2xl font-bold text-green-400 sm:text-3xl">1.6+</p>
              <p className="text-xs text-slate-500 sm:text-sm">Years Experience</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-amber-400 sm:text-3xl">15+</p>
              <p className="text-xs text-slate-500 sm:text-sm">Projects Delivered</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">MERN</p>
              <p className="text-xs text-slate-500 sm:text-sm">Stack Expert</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-white sm:text-3xl">100%</p>
              <p className="text-xs text-slate-500 sm:text-sm">Commitment</p>
            </div>

          </div>

          {/* CTA Button */}
      <Aslan/>

        </div>
      </div>
    </section>
  );
};

export default TopRatedFreelancer;