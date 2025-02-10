
import { Globe, Gauge, Palette, Layout, Layers, Settings, Star, Package } from "lucide-react";

export const PlatformSection = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-4 text-center text-4xl font-bold text-text">Complete Digital Solution</h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
        Everything you need to run your beauty brand online, from website to operations
      </p>
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
