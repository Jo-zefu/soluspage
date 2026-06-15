"use client";

import { useState } from "react";
import { useTestimonials } from "../../constants";
import { useTranslations } from "next-intl";

const StarRating = ({ active }: { active: boolean }) => (
  <div className="flex gap-0.5 justify-center mt-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-3.5 h-3.5 ${active ? "text-yellow-400" : "text-yellow-300"}`}
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const t = useTranslations('Testimonials');
  const testimonials = useTestimonials();
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const current = testimonials[active];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-10 h-1 bg-purple-600 mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            {t('whyCustomersLove')}
            <br />
            <span className="font-extrabold">{t('workingWithUs')}</span>
          </h2>
        </div>

        {/* Quote area */}
        <div className="relative flex items-start justify-center min-h-40 mb-12 px-10">
          {/* Opening quote mark */}
          <span
            className="absolute left-0 top-0 text-6xl text-purple-500 font-serif leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          {/* Quote text */}
          <p
            key={active}
            className="text-center text-gray-600 text-lg leading-relaxed max-w-xl animate-fade-in"
          >
            {current.quote}
          </p>

          {/* Closing quote mark */}
          <span
            className="absolute right-0 bottom-0 text-6xl text-purple-500 font-serif leading-none select-none"
            aria-hidden="true"
          >
            &rdquo;
          </span>
        </div>

        {/* Avatar row + arrows */}
        <div className="relative flex items-center justify-center gap-6">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 w-10 h-10 rounded-full border border-purple-300 text-purple-600 flex items-center justify-center hover:bg-purple-50 transition-colors shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Avatars */}
          <div className="flex items-end justify-center gap-4">
            {testimonials.map(({ id, name, role, color }, i) => {
              const isActive = i === active;
              return (
                <button
                  key={id}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial from ${name}`}
                  className="flex flex-col items-center transition-all duration-300 focus:outline-none"
                >
                  {/* Avatar circle */}
                  <div
                    className={[
                      "rounded-full flex items-center justify-center font-bold transition-all duration-300",
                      isActive
                        ? `w-16 h-16 text-base ${color} ring-4 ring-purple-300 ring-offset-2 shadow-lg`
                        : `w-11 h-11 text-xs ${color} opacity-60 hover:opacity-80`,
                    ].join(" ")}
                  >
                    {testimonials[i].avatar}
                  </div>

                  {/* Star rating */}
                  <StarRating active={isActive} />

                  {/* Name + role — only for active */}
                  <div
                    className={`mt-2 text-center transition-all duration-300 overflow-hidden ${
                      isActive ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                      {name}
                    </p>
                    <p className="text-xs text-gray-500 whitespace-nowrap">{role}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 w-10 h-10 rounded-full border border-purple-300 text-purple-600 flex items-center justify-center hover:bg-purple-50 transition-colors shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
