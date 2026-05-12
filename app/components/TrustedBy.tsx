const logos = [
  "Airbnb",
  "HubSpot",
  "Google",
  "Microsoft",
  "Stripe",
  "Notion",
  "Figma",
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((name) => (
            <span
              key={name}
              className="text-lg font-bold text-gray-300 hover:text-gray-500 transition-colors select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
