"use client";

import { useState, useRef } from "react";
import { services } from "../../constants";

const Services = () => {
  const [active, setActive] = useState(0);
  const total = services.length;
  const trackRef = useRef<HTMLDivElement>(null);

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  // Visible window: active-1, active, active+1 (wrapping)
  const getVisible = () => {
    return [-2, -1, 0, 1, 2].map((offset) => {
      const index = (active + offset + total) % total;
      return { ...services[index], offset };
    });
  };

  return (
    <section id="services" className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            What we do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Services we offer
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            We offer end-to-end digital services — from strategy and design
            through to engineering and growth.
          </p>
        </div>

        {/* Carousel track */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex items-center justify-center gap-6 px-4"
            style={{ minHeight: 320 }}
          >
            {getVisible().map(({ id, icon, title, description, offset }) => {
              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isFar = Math.abs(offset) === 2;

              return (
                <div
                  key={`${id}-${offset}`}
                  onClick={() => {
                    if (offset !== 0) setActive((active + offset + total) % total);
                  }}
                  className={[
                    "rounded-2xl border transition-all duration-300 shrink-0 cursor-pointer select-none",
                    isActive
                      ? "bg-white border-purple-400 shadow-xl z-10 scale-100 opacity-100 w-72 p-8"
                      : isAdjacent
                      ? "bg-white border-gray-100 shadow-sm z-0 scale-95 opacity-80 w-64 p-7"
                      : "bg-white border-gray-100 shadow-sm z-0 scale-90 opacity-40 w-56 p-6 hidden sm:flex",
                    "flex flex-col",
                  ].join(" ")}
                >
                  {/* Icon */}
                  <div
                    className={[
                      "rounded-full flex items-center justify-center mb-5 text-xl transition-colors",
                      isActive
                        ? "w-14 h-14 bg-purple-50 border-2 border-purple-200 text-purple-600"
                        : "w-12 h-12 bg-gray-50 border border-gray-200 text-gray-400",
                    ].join(" ")}
                  >
                    {icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={[
                      "font-bold mb-3 leading-snug",
                      isActive
                        ? "text-lg text-purple-600"
                        : "text-base text-gray-900",
                    ].join(" ")}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p
                    className={[
                      "text-sm leading-relaxed",
                      isActive
                        ? "text-gray-600"
                        : isAdjacent
                        ? "text-gray-400"
                        : "text-gray-300 line-clamp-3",
                    ].join(" ")}
                  >
                    {description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous service"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-colors z-20"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next service"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:border-purple-400 hover:text-purple-600 transition-colors z-20"
          >
            ›
          </button>
        </div>

        {/* Bottom bar: dots + counter */}
        <div className="w-full mt-10 flex items-center justify-center gap-8 relative">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to service ${i + 1}`}
                className={[
                  "rounded-full transition-all duration-300",
                  i === active
                    ? "w-6 h-2.5 bg-purple-600"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-purple-300",
                ].join(" ")}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute right-4 flex items-center gap-3 text-sm font-semibold text-gray-400">
            <span className="text-gray-900">
              {String(active + 1).padStart(2, "0")}
            </span>
            <div className="w-16 h-px bg-gray-200 relative">
              <div
                className="absolute left-0 top-0 h-px bg-purple-600 transition-all duration-300"
                style={{ width: `${((active + 1) / total) * 100}%` }}
              />
            </div>
            <span>{String(total).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
