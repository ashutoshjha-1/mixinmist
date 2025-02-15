
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Blogs = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-8">Our Blog</h1>
          <p className="text-lg text-text-muted mb-12">
            Insights, updates, and stories from the world of beauty and entrepreneurship.
          </p>
          
          {/* Placeholder for blog posts - coming soon message */}
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-black mb-4">Coming Soon</h2>
            <p className="text-text-muted">
              We're working on bringing you insightful articles and stories. Stay tuned!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
