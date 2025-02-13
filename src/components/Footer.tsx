
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-neutral-50 shadow-inner">
      <div className="container mx-auto px-4 py-8 pb-40 md:py-8 md:pb-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <p className="text-sm font-bold text-text-muted">
              © 2025 Mixinmist. All rights reserved.
            </p>
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
      </div>
    </footer>
  );
};
