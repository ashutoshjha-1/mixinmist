
import { Globe, Gauge, Palette, Layout, Layers, Settings, Star, Package } from "lucide-react";

export const PlatformSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">Complete Digital Solution</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Everything you need to run your beauty brand online, from website to operations
      </p>
      
      <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
        <div className="flex-1 relative">
          <img 
            src="/lovable-uploads/aed770b4-505d-4ea1-beb4-2a11e765ca4c.png" 
            alt="Day cream spray bottle" 
            className="max-h-[400px] object-contain mx-auto drop-shadow-2xl hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-purple-100/30 -z-10 filter blur-3xl"></div>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-6">Your Brand, Your Vision</h3>
          <p className="text-text-muted mb-8">
            From conception to launch, we provide all the tools needed to bring your beauty brand vision to life. 
            Our platform handles everything from production to fulfillment, allowing you to focus on building your brand.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-4 w-4 text-primary" />
              </div>
              <span>Premium products with your branding</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Package className="h-4 w-4 text-primary" />
              </div>
              <span>Fulfillment and shipping handled for you</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Gauge className="h-4 w-4 text-primary" />
              </div>
              <span>Comprehensive dashboard to track performance</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="glass-card rounded-3xl p-8 hover-lift">
          <div className="mb-6 flex items-center justify-center">
            <Globe className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-text">Custom Domain Website</h3>
          <ul className="space-y-4 text-text-muted">
            <li className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <span>Professionally designed templates</span>
            </li>
            <li className="flex items-center gap-2">
              <Layout className="h-5 w-5 text-primary" />
              <span>Fully customizable layouts</span>
            </li>
            <li className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              <span>Mobile-responsive design</span>
            </li>
          </ul>
        </div>

        <div className="glass-card rounded-3xl p-8 hover-lift">
          <div className="mb-6 flex items-center justify-center">
            <Gauge className="h-12 w-12 text-primary" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-text">Complete Dashboard</h3>
          <ul className="space-y-4 text-text-muted">
            <li className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <span>Order management system</span>
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <span>Analytics and reporting</span>
            </li>
            <li className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              <span>Inventory tracking</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
