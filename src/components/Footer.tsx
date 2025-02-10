
export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-8 md:py-8 pb-32 md:pb-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm font-bold text-text-muted">
            © 2025 Mixinmist. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-bold text-text-muted hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm font-bold text-text-muted hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm font-bold text-text-muted hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
