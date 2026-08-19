import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex flex-col gap-10" style={{ opacity: "1" }}>
        <div style={{ opacity: "1", transform: " none" }}>
          <div class="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-amber-300 mb-4">
            Portfolio
          </div>
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Projects &amp; Case Studies
          </h2>
          <p class="mt-4 max-w-2xl text-slate-400">
            Explore a selection of my work across Web Applications, SaaS
            Platforms, AI Chatbots, and consumer products, showcasing my
            experience in building modern, responsive, and scalable digital
            solutions.
          </p>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-slate-100 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(245,158,11,0.12)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 flex h-full flex-col">
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-semibold tracking-tight text-white">
                  TransactionFlow AI Assistant
                </h3>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    React.js
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Node.js
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Tailwind CSS
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    OpenAI APIs , Gork APIs
                  </span>
                </div>
              </div>
              <div class="mt-4 flex flex-1 flex-col gap-4">
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Challenge
                  </p>
                  <p class="text-sm text-slate-300">
                    Real estate transactions required manually preparing deal
                    information and documents, making the process time-consuming
                    and increasing the risk of missing details.
                  </p>
                </div>
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Solution
                  </p>
                  <p class="text-sm text-slate-300">
                    Built TransactionFlow AI to detect missing information,
                    generate transaction data and required PDFs, and streamline
                    sending documents to buyers and sellers via email.
                  </p>
                </div>
                <div class="mt-auto rounded-xl bg-amber-500/10 p-3">
                  <p class="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Impact
                  </p>
                  <p class="text-sm text-slate-200">
                    Reduced manual document work and streamlined the transaction
                    process, enabling faster, more accurate, and organized deal
                    management from a single platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-slate-100 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(245,158,11,0.12)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 flex h-full flex-col">
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-semibold tracking-tight text-white">
                  DocumentReview.Law
                </h3>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    SaaS Architecture
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Integration: Dropbox
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    WebSocket
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    AI ChatBot
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Document Review
                  </span>
                </div>
              </div>
              <div class="mt-4 flex flex-1 flex-col gap-4">
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Challenge
                  </p>
                  <p class="text-sm text-slate-300">
                    Legal teams struggled with large volumes of documents,
                    scattered workflows, manual review processes, and
                    inconsistent document handling across different tools.
                  </p>
                </div>
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Solution
                  </p>
                  <p class="text-sm text-slate-300">
                    Built a unified browser-based document review platform with
                    secure document management, AI-powered assistance, advanced
                    filtering, tagging, review workflows, and automated document
                    processing.
                  </p>
                </div>
                <div class="mt-auto rounded-xl bg-amber-500/10 p-3">
                  <p class="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Impact
                  </p>
                  <p class="text-sm text-slate-200">
                    Transformed a fragmented manual review process into a
                    centralized, scalable workflow, improving review efficiency,
                    consistency, auditability, and secure collaboration for
                    legal teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-slate-100 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(245,158,11,0.12)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 flex h-full flex-col">
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-semibold tracking-tight text-white">
                  ArmyTech platform
                </h3>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    React Js
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Node.js
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Express
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    MongoDB
                  </span>
                </div>
              </div>
              <div class="mt-4 flex flex-1 flex-col gap-4">
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Challenge
                  </p>
                  <p class="text-sm text-slate-300">
                    US Army veterans often struggled to translate their military
                    experience into relevant tech careers, with limited access
                    to targeted jobs, networking, and career resources.
                  </p>
                </div>
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Solution
                  </p>
                  <p class="text-sm text-slate-300">
                    Collaborated with the development team to build a dedicated
                    platform connecting veterans with tech jobs, professional
                    networking, and skill-development resources.
                  </p>
                </div>
                <div class="mt-auto rounded-xl bg-amber-500/10 p-3">
                  <p class="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Impact
                  </p>
                  <p class="text-sm text-slate-200">
                    Streamlined the transition from military service to tech
                    careers, improving access to relevant opportunities and
                    creating stronger connections between veterans and
                    technology employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ opacity: "1", transform: " none" }}>
            <div class="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-slate-100 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(245,158,11,0.12)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 flex h-full flex-col">
              <div class="flex flex-col gap-2">
                <h3 class="text-lg font-semibold tracking-tight text-white">
                  HarvestlyMarket
                </h3>
                <div class="mt-2 flex flex-wrap gap-1.5">
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                   Next.js
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Node.js
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Express.js
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    PostgreSQL
                  </span>
                  <span class="rounded bg-white/[0.06] px-2 py-0.5 text-xs text-slate-400">
                    Vercel
                  </span>
                </div>
              </div>
              <div class="mt-4 flex flex-1 flex-col gap-4">
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Challenge
                  </p>
                  <p class="text-sm text-slate-300">
                    Managing Customer, Vendor, and Admin experiences within a
                    single Next.js application required separate layouts,
                    permissions, routes, and complex role-based functionality.
                  </p>
                </div>
                <div>
                  <p class="mb-1.5 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Solution
                  </p>
                  <p class="text-sm text-slate-300">
                    Developed the complete frontend with Next.js, TypeScript,
                    React, and Tailwind CSS, implementing role-based routing,
                    reusable components, protected routes, responsive
                    dashboards, and seamless REST API integration while
                    collaborating with the backend team.
                  </p>
                </div>
                <div class="mt-auto rounded-xl bg-amber-500/10 p-3">
                  <p class="mb-1 text-xs font-medium uppercase tracking-wider text-amber-400">
                    Impact
                  </p>
                  <p class="text-sm text-slate-200">
                    Delivered a scalable, responsive, and production-ready
                    multi-role e-commerce experience, improving usability,
                    maintainability, and workflow efficiency across Customer,
                    Vendor, and Admin operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
}
