"use client";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations('CTA');
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-purple-600"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          {t('readyToBuild')}
        </h2>
        <p className="text-purple-200 leading-relaxed mb-10 text-lg">
          {t('tellUsAbout')}
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
            placeholder={t('enterYourEmail')}
            required
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-purple-300 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="px-7 py-3 rounded-full bg-white text-purple-700 font-semibold text-sm hover:bg-purple-50 transition-colors shadow-lg"
          >
            {t('getInTouch')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
