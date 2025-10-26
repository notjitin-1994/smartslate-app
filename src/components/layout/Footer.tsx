import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0d1b2a] px-4 py-12">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center hover:opacity-90">
              <Link to="/" aria-label="Smartslate home" style={{ textDecoration: 'none' }}>
                <img
                  src="/images/logos/logo.png"
                  alt="Smartslate Logo"
                  width={160}
                  height={40}
                  loading="lazy"
                  style={{ height: 'auto' }}
                />
              </Link>
            </div>
            <p className="my-4 text-base text-white/70">
              Revolutionizing the way the world learns through innovative educational technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="mb-4 text-base font-semibold text-white">Product</h6>
            <Link
              to="/features"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Pricing
            </Link>
          </div>

          {/* Company */}
          <div>
            <h6 className="mb-4 text-base font-semibold text-white">Company</h6>
            <Link
              to="/difference"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Contact
            </Link>
            <Link
              to="/partner"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Partners
            </Link>
          </div>

          {/* Legal */}
          <div>
            <h6 className="mb-4 text-base font-semibold text-white">Legal</h6>
            <Link
              to="/legal/privacy"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Privacy Policy
            </Link>
            <Link
              to="/legal/terms"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="mb-2 block cursor-pointer text-sm text-white/70 no-underline transition-colors duration-200 hover:text-[rgb(var(--primary))] hover:no-underline"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/70">
            © {currentYear} Smartslate. All rights reserved.
          </p>
          <p className="text-sm text-white/70">
            Made with ❤️ for better education
          </p>
        </div>
      </div>
    </footer>
  );
}
