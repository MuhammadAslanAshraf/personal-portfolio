import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Name",
      value: "Muhammad Aslan Ashraf",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: "Email",
      value: "muhammadaslanashraf4013@gmail.com",
      href: "mailto:muhammadaslanashraf4013@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      title: "WhatsApp",
      value: "+92 346 4013879",
      href: "https://wa.me/923464013879",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M20.52 3.48A11.77 11.77 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.42-8.42ZM12.04 21.75h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.73.98 1-3.64-.23-.37a9.82 9.82 0 1 1 8.35 4.61Zm5.4-7.36c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+92 346 4013879",
      href: "tel:+923464013879",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
        </svg>
      ),
    },
    {
      title: "Address",
      value: "Lahore, Punjab, Pakistan",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-5 w-5"
        >
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden  px-6 py-20 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative mx-auto ">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Have a project, opportunity, or idea in mind? Feel free to reach
            out. I’m always open to discussing new projects and professional
            opportunities.
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="grid gap-4 md:grid-cols-2">
            {contactInfo.map((item, index) => {
              const content = (
                <div className="group flex min-h-[90px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/[0.04]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-all duration-300 group-hover:bg-amber-500/20">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                      {item.title}
                    </p>

                    <p className="break-words text-sm font-medium text-slate-200 md:text-base">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.title === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    item.title === "WhatsApp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="mb-5 text-sm text-slate-400">
              Ready to discuss your next project?
            </p>

            <a
              href="https://wa.me/923464013879?text=Hi%20Muhammad%20Aslan%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20opportunity%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-300 hover:from-amber-500 hover:to-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] active:scale-[0.98]"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;