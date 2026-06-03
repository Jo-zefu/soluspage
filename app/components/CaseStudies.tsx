import { caseStudies } from "../../constants";

// Mock phone screen — three staggered phones like in the reference design
const PhoneMockup = ({ bg }: { bg: string }) => (
  <div
    className={`relative w-24 rounded-2xl border-2 border-white/60 shadow-lg overflow-hidden ${bg}`}
    style={{ height: 180 }}
  >
    {/* Notch */}
    <div className="mx-auto mt-2 w-10 h-2 rounded-full bg-black/10" />
    {/* Screen content lines */}
    <div className="px-3 mt-3 space-y-2">
      <div className="h-2 rounded bg-black/10 w-full" />
      <div className="h-2 rounded bg-black/10 w-3/4" />
      <div className="h-8 rounded-lg bg-black/10 w-full mt-3" />
      <div className="h-2 rounded bg-black/10 w-full" />
      <div className="h-2 rounded bg-black/10 w-1/2" />
      <div className="h-8 rounded-lg bg-black/10 w-full mt-2" />
      <div className="h-8 rounded-lg bg-black/10 w-full" />
    </div>
  </div>
);

const CaseStudies = () => {
  return (
    <section id="case" className="py-24 px-6 bg-white/90">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-3">
            Our work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our recent{" "}
            <span className="block">Case studies</span>
          </h2>
        </div>

        {/* Stacked cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map(({ id, tag, title, description, panelBg, screens, accentColor }) => (
            <article
              key={id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col md:flex-row"
            >
              {/* Left: colored panel with phone mockups */}
              <div
                className={`${panelBg} md:w-2/5 shrink-0 flex items-end justify-center gap-3 px-8 pt-10 pb-0 min-h-56 overflow-hidden`}
              >
                {/* Three staggered phones */}
                <div className="self-end mb-0 translate-y-4 -rotate-6 scale-90 origin-bottom">
                  <PhoneMockup bg={screens[0]} />
                </div>
                <div className="self-end mb-0 translate-y-0 scale-100 origin-bottom z-10">
                  <PhoneMockup bg={screens[1]} />
                </div>
                <div className="self-end mb-0 translate-y-4 rotate-6 scale-90 origin-bottom">
                  <PhoneMockup bg={screens[2]} />
                </div>
              </div>

              {/* Right: text content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className={`text-xs font-semibold tracking-widest uppercase mb-3 ${accentColor}`}>
                  {tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {description}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${accentColor} hover:opacity-70 transition-opacity self-end`}
                >
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
