import { howItWorks } from "../../constants";

const HowItWorks = () => {
  return (
    <section id="how" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            Our process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            A clear, collaborative process that keeps you informed and in
            control at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {howItWorks.map(({ step, title, description }, index) => (
            <div
              key={step}
              className="flex gap-6 p-8 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all bg-white group"
            >
              {/* Step number */}
              <div className="flex-shrink-0">
                <span className="text-4xl font-extrabold text-purple-100 group-hover:text-purple-200 transition-colors leading-none">
                  {step}
                </span>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
              {/* Connector line for desktop */}
              {index < howItWorks.length - 1 && (
                <div className="hidden" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
