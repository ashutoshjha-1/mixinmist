
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-neutral-50 shadow-inner">
      <div className="container mx-auto px-4 py-8 pb-40 md:py-8 md:pb-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-text-muted">
              © 2025 Mixinmist. All rights reserved.
            </p>
            <Link 
              to="/blogs" 
              className="text-sm font-medium text-text-muted hover:text-black transition-colors"
            >
              Blog
            </Link>
            <a 
              href="https://instagram.com/mixinmist" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          
          {/* Product Hunt Badge */}
          <a 
            href="https://www.producthunt.com/products/mixinmist?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-mixinmist" 
            target="_blank"
            className="order-first md:order-none"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=982507&theme=dark" 
              alt="Mixinmist - Launch your beauty brand in 5 minutes | Product Hunt" 
              style={{ width: '250px', height: '54px' }} 
              width="250" 
              height="54" 
            />
          </a>
          
          <p className="text-sm text-text-muted mb-24 md:mb-0">
            Made with ❤️ in India
          </p>
        </div>

        {/* Parent Company Info */}
        <div className="mt-4 text-center border-t border-gray-200 pt-4">
          <p className="text-sm text-text-muted">
            Mixinmist is a product of Ayurvedology Healthtech Private Limited
          </p>
        </div>

        {/* Facebook Disclaimer */}
        <div className="mt-8 text-center border-t border-gray-200 pt-4">
          <p className="text-xs text-text-muted max-w-2xl mx-auto">
            Disclaimer: Mixinmist is not endorsed by, directly affiliated with, maintained, authorized, or sponsored by Meta (formerly Facebook) or any of its subsidiaries or affiliates. All product and company names are the registered trademarks of their original owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
