"use client"
import Image from "next/image";
import { useStats } from "../../constants";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations('Hero');
  const stats = useStats();
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-6 bg-linear-to-br from-purple-50 via-white to-teal-50"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            {t("title")}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {t.rich('slogan', {
              word1: (child) => (
                <span className="bg-linear-to-b from-[#DE4396] from-60% to-[#0D1C9F] bg-clip-text text-transparent">
                  {child}
                </span>
              ),
              word2: (child) => (
                <span className="bg-linear-to-tr from-[#406AFF] to-[#F7666F] bg-clip-text text-transparent">
                  {child}
                </span>
              ),
              'br-desk': () => <br className="hidden md:block" />
            })}
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
            {t("p")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-7 py-3 rounded-full bg-purple-600 text-white font-semibold text-sm hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200"
            >
              {t("ourservices")}
            </a>
            <a
              href="#case"
              className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm hover:border-purple-400 hover:text-purple-600 transition-colors"
            >
              {t("viewCaseStudies")}
              
            </a>
          </div>

          {/* Stats */}
          {/* <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-extrabold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div> */}
        </div>

        {/* Illustration */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/heroImage.avif"
              alt="Team collaboration illustration"
              width={360}
              height={360}
              className="w-full h-auto object-contain"
              priority
            />
            {/* Decorative blobs */}
            {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100 to-teal-100 rotate-3" />
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl p-8 flex items-center justify-center h-full">
              <Image
                src="/heroImage.avif"
                alt="Team collaboration illustration"
                width={360}
                height={360}
                className="w-full h-auto scale-110"
                priority
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
