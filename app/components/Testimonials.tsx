import { testimonials } from "../../constants";

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what the people we&apos;ve worked
            with have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ id, quote, name, role, avatar, color }) => (
            <blockquote
              key={id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              {/* Quote mark */}
              <span className="text-5xl text-purple-200 font-serif leading-none mb-4" aria-hidden="true">
                &ldquo;
              </span>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                {quote}
              </p>
              <footer className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-xs font-bold text-gray-700 flex-shrink-0`}
                >
                  {avatar}
                </div>
                <div>
                  <cite className="not-italic font-bold text-gray-900 text-sm">
                    {name}
                  </cite>
                  <p className="text-xs text-gray-500">{role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
