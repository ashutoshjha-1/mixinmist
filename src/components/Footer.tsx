
export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-8 md:py-8 pb-32 md:pb-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <p className="text-sm font-bold text-text-muted">
            © 2025 Mixinmist. All rights reserved.
          </p>
          
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
          
          <p className="text-sm text-text-muted">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};
