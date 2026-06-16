import React, { useState, useEffect } from "react";
const CardUpWorkWithReview = () => {
  const [active, setActive] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="hidden w-[320px] shrink-0 flex-col gap-4 lg:flex xl:w-[360px]"
      style={{ opacity: "1", transform: "none" }}
    >
      <div
        rel="noopener noreferrer"
        className="group relative block cursor-pointer overflow-hidden rounded-3xl bg-green-500"
        tabindex="0"
        style={{ aspectRatio: "1 / 1.1", transform: " none" }}
      >
        <div className="relative z-10 flex h-full flex-col p-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Let's Build Something{" "}
            </h3>
            <h3 className="text-2xl font-semibold text-white">Amazing</h3>
          </div>
          <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1">
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
              className="lucide lucide-badge-check h-4 w-4 text-green-600"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span className="text-sm font-semibold text-slate-900">
              Available for Work
            </span>
          </div>
          <div className="mt-auto flex-1 flex items-center justify-center pt-4">
            <div className="relative w-full max-w-[200px]">
              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-medium text-white">
                    My Stats
                  </span>
                  <div className="flex gap-0.5">
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
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
                      className="lucide lucide-star h-3 w-3 fill-yellow-300 text-yellow-300"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white text-green-600">
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
                      className="lucide lucide-shield h-4 w-4"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                    <span className="text-xs font-medium">
                      React.js Specialist
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/20 text-white">
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
                      className="lucide lucide-star h-4 w-4"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="text-xs font-medium">
                      Node.js Backend Development
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 bg-white/20 text-white">
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
                      className="lucide lucide-briefcase h-4 w-4"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    <span className="text-xs font-medium">
                      Modern Web Applications
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg"
                style={{ transform: "translateY(-3.9815px)" }}
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
                  className="lucide lucide-circle-check h-5 w-5 text-green-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="text-sm text-white/80">
              Turning Ideas Into Scalable Applications
            </span>
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
              className="lucide lucide-arrow-right h-5 w-5 text-white transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className="relative mt-6 h-[300px] w-full cursor-pointer"
        style={{ perspective: "1000px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            transformOrigin: "right bottom",
            zIndex: active === 0 ? 2 : active === 1 ? 1 : 0,
            transform:
              active === 0
                ? "none"
                : active === 1
                  ? "translateY(-6px) scale(0.96) rotateZ(3deg)"
                  : "translateY(-12px) scale(0.92) rotateZ(6deg)",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-5 backdrop-blur-sm">
            <div className="mb-3 flex gap-0.5 text-white">
              LinkedIn Recommendation
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
              className="lucide lucide-quote mb-2 h-4 w-4 text-amber-400/50"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="mb-4 text-md leading-relaxed text-slate-300">
              " I highly recommend Muhammed Aslan to any organization seeking a
              committed and fast-growing full stack developer. Wishing him
              continued success in his professional journey."
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                US
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Muhammed Usama Sajjad
                </p>
                <p className="text-xs text-slate-500">
                  Senior Front Developer / Team Lead
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            transformOrigin: "right bottom",
            zIndex: active === 1 ? 2 : active === 2 ? 1 : 0,
            transform:
              active === 1
                ? "none"
                : active === 2
                  ? "translateY(-6px) scale(0.96) rotateZ(3deg)"
                  : "translateY(-12px) scale(0.92) rotateZ(6deg)",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-5 backdrop-blur-sm">
            <div className="mb-3 flex gap-0.5 text-white">
              LinkedIn Recommendation
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
              className="lucide lucide-quote mb-2 h-4 w-4 text-amber-400/50"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="mb-4 text-[12px] leading-relaxed text-slate-300">
              "Muhammad Aslan is a talented MERN Stack Developer with strong
              expertise in React.js, API integrations, and responsive UI
              development. He consistently delivers high-quality solutions,
              works well in teams, and demonstrates a strong commitment to
              learning and professional growth. I highly recommend him for any
              modern web development role. "
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                SA
              </div>
              <div>
                <p className="text-sm font-medium text-white">Saeed Ahmad</p>
                <p className="text-xs text-slate-500">Senior Full Stack Developer / Team Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            transformOrigin: "right bottom",
            zIndex: active === 2 ? 2 : active === 0 ? 1 : 0,
            transform:
              active === 2
                ? "none"
                : active === 0
                  ? "translateY(-6px) scale(0.96) rotateZ(3deg)"
                  : "translateY(-12px) scale(0.92) rotateZ(6deg)",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-5 backdrop-blur-sm">
            <div className="mb-3 flex gap-0.5 text-white">
              LinkedIn Recommendation
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
              className="lucide lucide-quote mb-2 h-4 w-4 text-amber-400/50"
            >
              <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
              <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            </svg>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              "Muhammad Aslan Ashraf is a talented Full-Stack Developer
              specializing in React.js, Node.js, Redux Toolkit, JavaScript, and
              Tailwind CSS. He is known for building scalable applications,
              solving complex problems efficiently, and contributing positively
              to team success through strong collaboration and technical
              excellence."
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                HJ
              </div>
              <div>
                <p className="text-sm font-medium text-white">Hassan Javed</p>
                <p className="text-xs text-slate-500">
                  Senior Python Developer / Team Lead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUpWorkWithReview;
