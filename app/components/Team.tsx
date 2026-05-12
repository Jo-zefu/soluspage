import { teamMembers } from "../../constants";

const Team = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase mb-4">
            The team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Meet the people behind the work
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            A diverse group of designers, engineers, and strategists united by a
            shared passion for building great products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(({ id, name, role, avatar, color }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-full ${color} mx-auto mb-4 flex items-center justify-center text-lg font-bold text-gray-700`}
              >
                {avatar}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-sm text-gray-500">{role}</p>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="#"
                  aria-label={`${name} LinkedIn`}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center text-gray-500 hover:text-purple-600 transition-colors text-xs font-bold"
                >
                  in
                </a>
                <a
                  href="#"
                  aria-label={`${name} Twitter`}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-100 flex items-center justify-center text-gray-500 hover:text-purple-600 transition-colors text-xs font-bold"
                >
                  𝕏
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
