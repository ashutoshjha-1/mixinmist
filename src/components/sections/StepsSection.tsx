
export const StepsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">How It Works</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Launch your beauty brand with a professional website in three simple steps
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
            title: "Get Your Custom Website",
            description: "Receive your personalized domain and professionally designed e-commerce website ready to sell",
          },
          {
            number: "03",
            title: "Launch & Scale",
            description: "Start selling immediately with our fully equipped dashboard and built-in marketing tools",
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
