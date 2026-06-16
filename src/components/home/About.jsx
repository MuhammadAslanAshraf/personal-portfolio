import React from "react";

const About = () => {
  return (
    <section id="about" className="my-20">
      <div className="grid gap-8 lg:grid-cols-2" style={{ opacity: "1" }}>
        <div
          className="flex flex-col gap-6"
          style={{ opacity: "1", transform: "none" }}
        >
          <div className="inline-flex items-center rounded-full text-xs font-medium transition-all duration-300 border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-amber-300 w-fit">
            About Me
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Building digital experiences that{" "}
            <span className="gradient-text">make an impact</span>
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
  I am a Full-Stack (MERN) Developer with 1.6+ years of hands-on experience
  building scalable, high-performance web applications and digital products.
  I specialize in React, Node.js, and modern backend architecture to deliver
  fast, secure, and user-focused solutions.
          </p>
          <ul className="grid gap-4">
  <li className="flex items-start gap-3">
  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
    <span className="h-2 w-2 rounded-full bg-amber-400"></span>
  </span>
  <span className="text-slate-300">
    Built and deployed production-ready MERN applications with scalable architecture
  </span>
</li>

<li className="flex items-start gap-3">
  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
    <span className="h-2 w-2 rounded-full bg-amber-400"></span>
  </span>
  <span className="text-slate-300">
    Developed REST APIs and optimized backend performance for real-time applications
  </span>
</li>

<li className="flex items-start gap-3">
  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
    <span className="h-2 w-2 rounded-full bg-amber-400"></span>
  </span>
  <span className="text-slate-300">
    Integrated third-party services and automation workflows to improve system efficiency
  </span>
</li>

<li className="flex items-start gap-3">
  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20">
    <span className="h-2 w-2 rounded-full bg-amber-400"></span>
  </span>
  <span className="text-slate-300">
    Collaborated with teams to deliver scalable and business-driven digital products
  </span>
</li>
          </ul>
        </div>
<div style={{ opacity: "1", transform: "none" }}>
  <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.15)] h-full">

    <div className="flex flex-col gap-6">

      {/* Header */}
      <div>
        <h3 className="text-xl font-semibold text-white">
          What I Focus On
        </h3>

        <p className="mt-2 text-slate-400">
          I specialize in building scalable full-stack applications, designing
          clean system architecture, and delivering high-performance digital
          products that solve real-world problems.
        </p>
      </div>

      {/* Skills / Tags */}
      <div className="flex flex-wrap gap-2">

        <div className="inline-flex items-center rounded-full font-medium transition-all duration-300 border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
          Scalable React Architectures
        </div>

        <div className="inline-flex items-center rounded-full font-medium transition-all duration-300 border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
          Full-Stack MERN Development
        </div>

        <div className="inline-flex items-center rounded-full font-medium transition-all duration-300 border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
          High-Performance Web Apps
        </div>

        <div className="inline-flex items-center rounded-full font-medium transition-all duration-300 border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
          Backend APIs & System Design
        </div>

        <div className="inline-flex items-center rounded-full font-medium transition-all duration-300 border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
          Automation & DevOps Workflows
        </div>

        <div className="inline-flex items-center rounded-full font-medium transition-all duration-300 border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
          Team Collaboration & Leadership
        </div>

      </div>

    </div>

  </div>
</div>
      </div>
    </section>
  );
};

export default About;
