"use client";

const CTA = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-purple-600"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Ready to build something great?
        </h2>
        <p className="text-purple-200 leading-relaxed mb-10 text-lg">
          Tell us about your project and we&apos;ll get back to you within one
          business day.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="cta-email" className="sr-only">
            Email address
          </label>
          <input
            id="cta-email"
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="px-7 py-3 rounded-full bg-white text-purple-700 font-semibold text-sm hover:bg-purple-50 transition-colors shadow-lg"
          >
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
