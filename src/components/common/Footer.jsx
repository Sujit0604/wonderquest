import { useState } from 'react';
import { Sparkles, Mail, CheckCircle, ArrowRight, Share2 } from 'lucide-react';
import { siteConfig, footerData } from '../../data/content';
import AppStoreBadges from './AppStoreBadges';
import { fireConfetti } from '../../utils/confetti';

export default function Footer({ onOpenLegal, onNavigate }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    fireConfetti();
  };

  const handleNavLinkClick = (href) => {
    if (href === '/blog') {
      onNavigate('/blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('#')) {
      onNavigate('/');
      setTimeout(() => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900 p-8 sm:p-12 mb-16 border border-sky-700/40 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Free Weekly Parent Pack
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                Get Free Printable Activity Sheets Every Friday
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Join 85,000+ parents who receive our weekend coloring sheets, bedtime story starters, and pediatric screen-time tips. Zero spam, ever.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-4 flex items-center gap-3 text-emerald-200">
                  <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">You are on the list!</p>
                    <p className="text-xs text-emerald-300">Check your inbox for this week's free printable puzzle pack.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your parent email"
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 text-white placeholder-slate-400 text-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-sky-400 backdrop-blur-md"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-2xl font-black text-sm bg-amber-400 hover:bg-amber-300 text-slate-900 border border-amber-300 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <AppStoreBadges size="sm" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavLinkClick(link.href)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Legal */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Safety & Trust
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerData.legalLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onOpenLegal(link.id)}
                    className="text-slate-400 hover:text-sky-400 transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {footerData.badges.map((badge) => (
                <span key={badge} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-sky-300 border border-slate-700">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Socials & Connect */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Follow along for parenting advice, teacher interviews, and behind-the-scenes animations.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Community"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{footerData.copyright}</p>
          <p className="max-w-md text-center md:text-right text-[11px] text-slate-600">
            {footerData.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
