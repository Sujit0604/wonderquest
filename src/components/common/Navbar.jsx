import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Download, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/content';
import { fireConfetti } from '../../utils/confetti';

export default function Navbar({ currentPath = '/', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for background blur and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPath === '/') {
        const sections = ['contact', 'faq', 'reviews', 'parents', 'gallery', 'features', 'about', 'hero'];
        for (const sec of sections) {
          const el = document.getElementById(sec);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setActiveSection(sec);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', href: '#about', sectionId: 'about' },
    { label: 'Features', href: '#features', sectionId: 'features' },
    { label: 'Screenshots', href: '#gallery', sectionId: 'gallery' },
    { label: 'For Parents', href: '#parents', sectionId: 'parents' },
    { label: 'Reviews', href: '#reviews', sectionId: 'reviews' },
    { label: 'FAQ', href: '#faq', sectionId: 'faq' },
    { label: 'Contact', href: '#contact', sectionId: 'contact' },
  ];

  const handleLinkClick = (href, sectionId) => {
    setMobileMenuOpen(false);
    if (currentPath !== '/') {
      onNavigate('/');
      // Delay scrolling to element after route change
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate('/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCtaClick = () => {
    fireConfetti();
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const el = document.getElementById('hero');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-sky-100'
            : 'bg-white/80 md:bg-transparent backdrop-blur-xs py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 rounded-full py-1 px-2"
              aria-label="WonderQuest Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-400 to-pink-500 p-0.5 shadow-md shadow-orange-300/40 group-hover:rotate-6 transition-transform">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-amber-500 fill-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] font-bold text-sky-600 tracking-wider uppercase -mt-1">
                  Little Explorer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-100/80 shadow-xs">
              {navLinks.map((link) => {
                const isActive = currentPath === '/' && activeSection === link.sectionId;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href, link.sectionId)}
                    className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-sky-600 bg-sky-50 shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}

              {/* Blog Link */}
              <button
                onClick={handleBlogClick}
                className={`px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  currentPath === '/blog'
                    ? 'text-rose-600 bg-rose-50 shadow-2xs'
                    : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/50'
                }`}
              >
                <span>Blog</span>
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 text-rose-700 font-extrabold uppercase">
                  CMS
                </span>
              </button>
            </nav>

            {/* Right CTAs (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handleCtaClick}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-sm text-slate-900 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 border-2 border-amber-300 shadow-md hover:shadow-lg hover:shadow-amber-400/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
              >
                <Download className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Get App Free</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-black text-xl text-slate-900">{siteConfig.name}</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links List */}
            <nav className="flex flex-col py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href, link.sectionId)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-slate-700 hover:text-sky-600 hover:bg-sky-50 text-left text-base transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              ))}

              <button
                onClick={handleBlogClick}
                className="flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-rose-600 hover:bg-rose-50 text-left text-base transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>Parent Blog</span>
                  <span className="px-2 py-0.5 rounded-full text-xs bg-rose-100 font-extrabold uppercase">
                    CMS
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </button>
            </nav>

            {/* Mobile Bottom Download Button */}
            <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleCtaClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-base text-slate-900 bg-gradient-to-r from-amber-400 to-orange-400 border border-amber-300 shadow-md"
              >
                <Download className="w-5 h-5" />
                <span>Start Free 7-Day Trial</span>
              </button>
              <p className="text-center text-xs text-slate-500 font-medium">
                100% Ad-Free • Ages 3–8 • iOS & Android
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
