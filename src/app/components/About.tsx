import { useTranslations } from "next-intl";
const About = () => {
  const t = useTranslations('About')

const featurePoints = [
  t('features.point1'),
  t('features.point2'),
  t('features.point3'),
];
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <div className="order-2 md:order-1">
          <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-purple-100 to-teal-100 aspect-[4/3] flex items-center justify-center shadow-xl">
            <div className="absolute top-4 left-4 w-16 h-16 rounded-xl bg-purple-400 opacity-60" />
            <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-teal-300 opacity-50" />
            <div className="relative z-10 text-center px-8">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg mx-auto mb-4 flex items-center justify-center text-3xl">
                🚀
              </div>
              <p className="text-gray-700 font-semibold text-sm">
                {t('imageCaption')}
              </p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            {t("aboutus")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            {t("title")}
          </h2>
          {
            t.rich('p', {
              p1: (child) => <p className="text-gray-500 leading-relaxed mb-6">{child}</p>,
              p2: (child) => <p className="text-gray-500 leading-relaxed mb-8">{child}</p>
            })
          }
          {/* <p className="text-gray-500 leading-relaxed mb-6">
            Solus is a full-service digital agency founded on the belief that
            great products come from great collaboration. We embed ourselves in
            your team, learn your domain, and deliver work that moves the
            needle.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            From early-stage startups to established enterprises, we bring the
            same level of craft and strategic thinking to every engagement.
          </p> */}
          <ul className="space-y-3">
            {featurePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
