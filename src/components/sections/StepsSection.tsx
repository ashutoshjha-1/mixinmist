
export const StepsSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">How It Works</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Launch your beauty brand with a professional website in three simple steps
      </p>
      
      <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
        <div className="md:w-1/2 relative">
          <img 
            src="/lovable-uploads/3688ad9c-9fdb-41f3-a6c2-d1bf0fb8a011.png" 
            alt="Premium serum bottle with dropper" 
            className="max-h-[400px] object-contain mx-auto drop-shadow-2xl hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-purple-100/40 -z-10 filter blur-3xl"></div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-6">Your Dream Products</h3>
          <p className="text-text-muted mb-6">
            We offer a comprehensive range of premium beauty and skincare products that can be fully customized with your brand. 
            From serums and creams to sprays and treatments, create a line that perfectly represents your vision.
          </p>
          <p className="text-text-muted">
            Each product is formulated with high-quality ingredients, rigorously tested, and can be branded with your unique identity.
          </p>
        </div>
      </div>
      
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
