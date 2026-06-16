import React, { useState } from "react";
import Cal from "@calcom/embed-react";

const Aslan = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Only Button */}
      <button
        onClick={() => setOpen(true)}
        className="group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:from-amber-500 hover:to-amber-400 active:scale-[0.98] h-9 px-4 text-xs"
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
          className="lucide lucide-external-link h-4 w-4"
        >
          <path d="M15 3h6v6"></path>
          <path d="M10 14 21 3"></path>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
        Hire Me (Interview Call)
      </button>

      {/* Popup Modal */}
      {open && (
        <div className="fixed z-50 left-70 top-20 flex items-center justify-center bg-black/60">
          <div className="relative w-[95%] md:w-[900px] h-[700px] overflow-hidden bg-black border text-white rounded-2xl shadow-2xl flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl font-bold z-50"
              aria-label="Close popup"
            >
              ✕
            </button>

            {/* Branded Header with Logo */}
            <div className="flex items-center gap-4 p-6 ">
              {/* Logo */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                AS
              </div>
              {/* Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-200">
                  Let’s Work Together
                </h3>

                <p className="text-gray-200 max-w-full">
                  I’m available for freelance projects, full-time opportunities,
                  and technical interviews. If you’re looking for a MERN Stack /
                  Full-Stack Developer who can build scalable and
                  high-performance web applications, feel free to schedule a
                  call. Let’s discuss your requirements and turn your ideas into
                  reality.
                </p>
              </div>
            </div>

            {/* Calendar */}
            <div className="flex-1 overflow-scroll">
              <Cal
                calLink="muhammad-aslan-ashraf-l7omvt/30min"
                style={{ width: "100%", height: "100%" }}
                config={{ layout: "month_view" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aslan;
