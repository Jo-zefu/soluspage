import { caseStudies } from "../../constants";

const CaseStudies = () => {
  return (
    <section id="case" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            Our work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Case studies
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            A selection of projects we&apos;re proud of — each one a story of
            collaboration, craft, and measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map(({ id, tag, title, description, color, textColor }) => (
            <article
              key={id}
              className={`${color} rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform`}
            >
              {/* Mock phone screen */}
              <div className="px-8 pt-8 pb-0 flex justify-center">
                <div className="w-28 bg-white/20 rounded-t-2xl h-48 flex flex-col items-center justify-center gap-2 px-3">
                  <div className="w-full h-2 rounded bg-white/40" />
                  <div className="w-3/4 h-2 rounded bg-white/30" />
                  <div className="w-full h-2 rounded bg-white/40" />
                  <div className="w-1/2 h-2 rounded bg-white/30" />
                  <div className="w-full h-8 rounded-lg bg-white/20 mt-2" />
                  <div className="w-full h-8 rounded-lg bg-white/20" />
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${textColor}`}>
                <span className="text-xs font-semibold tracking-widest uppercase opacity-80">
                  {tag}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2">{title}</h3>
                <p className="text-sm opacity-80 leading-relaxed mb-4">
                  {description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  View case study →
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
