
export const StepsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">How It Works</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Launch your beauty brand in three simple steps
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            number: "01",
            title: "Curate Products",
            description: "Browse our extensive catalog of premium beauty & wellness products and select your perfect line",
          },
          {
            number: "02",
            title: "Brand It",
            description: "Add your unique branding, customize packaging, and make it truly yours",
          },
          {
            number: "03",
            title: "Launch & Sell",
            description: "Connect with your preferred e-commerce platform and start selling immediately",
          },
        ].map((step) => (
          <div key={step.number} className="group relative p-6 text-center hover-lift glass-card rounded-2xl">
            <span className="mb-4 block text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
              {step.number}
            </span>
            <h3 className="mb-2 text-xl font-semibold text-text">{step.title}</h3>
            <p className="text-text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
