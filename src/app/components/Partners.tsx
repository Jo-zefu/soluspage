import { partnerLogos } from "../../constants";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations('Partners');
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-10">
          {t('toolsAndPartners')}
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 items-center justify-items-center">
          {partnerLogos.map((name) => (
            <div
              key={name}
              className="w-full flex items-center justify-center py-3 px-2 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors"
            >
              <span className="text-xs font-bold text-gray-400 hover:text-purple-500 transition-colors text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
