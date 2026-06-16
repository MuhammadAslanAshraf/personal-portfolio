import React from "react";

const SuccessStories = () => {
  const stats = [
  {
    title: "Projects Completed",
    value: "20+",
  },
  {
    title: "Happy Clients",
    value: "15+",
  },
  {
    title: "Technologies",
    value: "10+",
  },
  {
    title: "Experience",
    value: "1+ Year",
  },
];

  return (
<section id="testimonials">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-white">
      Professional Highlights
    </h2>
    <p className="mt-4 text-slate-400">
      Delivering quality web applications with modern technologies.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((item, index) => (
      <div
        key={index}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
      >
        <h3 className="text-3xl font-bold text-amber-400">
          {item.value}
        </h3>
        <p className="mt-2 text-slate-400">
          {item.title}
        </p>
      </div>
    ))}
  </div>
</section>
  );
};

export default SuccessStories;
