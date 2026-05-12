import { services } from "../../constants";

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            What we do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Services built for scale
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            We offer end-to-end digital services — from strategy and design
            through to engineering and growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl mb-5 group-hover:bg-purple-100 transition-colors">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
