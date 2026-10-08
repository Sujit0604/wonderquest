import { fireConfetti } from '../../utils/confetti';

/**
 * Official-styled App Store and Google Play download buttons
 */
export default function AppStoreBadges({ className = '', size = 'md' }) {
  const handleBadgeClick = () => {
    fireConfetti();
  };

  const isSmall = size === 'sm';

  return (
    <div className={`flex flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
      {/* Apple App Store */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleBadgeClick('App Store')}
        className={`group relative inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl border-2 border-slate-700/60 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 ${
          isSmall ? 'px-4 py-2 text-xs' : 'px-5 py-3 text-sm'
        }`}
        aria-label="Download WonderQuest on Apple App Store"
      >
        {/* Apple SVG Logo */}
        <svg className={isSmall ? "w-6 h-6 shrink-0 fill-current" : "w-7 h-7 shrink-0 fill-current"} viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.99 1.72-.86 2.72 1 .08 2-.51 2.57-1.22z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] sm:text-xs text-slate-300 font-medium">Download on the</span>
          <span className="text-sm sm:text-base font-extrabold tracking-wide">App Store</span>
        </div>
      </a>

      {/* Google Play Store */}
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleBadgeClick('Google Play')}
        className={`group relative inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl border-2 border-slate-700/60 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 ${
          isSmall ? 'px-4 py-2 text-xs' : 'px-5 py-3 text-sm'
        }`}
        aria-label="Get WonderQuest on Google Play"
      >
        {/* Google Play Tri-color SVG Logo */}
        <svg className={isSmall ? "w-6 h-6 shrink-0" : "w-7 h-7 shrink-0"} viewBox="0 0 24 24" fill="none">
          <path d="M3.6 1.8L14.2 12.4L3.6 23C3.2 22.5 3 21.8 3 21V3C3 2.2 3.2 1.5 3.6 1.8Z" fill="#2196F3"/>
          <path d="M17.7 8.9L14.2 12.4L17.7 15.9L20.8 14.1C21.6 13.6 22 13 22 12.4C22 11.8 21.6 11.2 20.8 10.7L17.7 8.9Z" fill="#FFC107"/>
          <path d="M14.2 12.4L3.6 1.8C4 1.4 4.7 1.3 5.4 1.7L17.7 8.9L14.2 12.4Z" fill="#4CAF50"/>
          <path d="M14.2 12.4L17.7 15.9L5.4 23.1C4.7 23.5 4 23.4 3.6 23L14.2 12.4Z" fill="#F44336"/>
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] sm:text-xs text-slate-300 font-medium">GET IT ON</span>
          <span className="text-sm sm:text-base font-extrabold tracking-wide">Google Play</span>
        </div>
      </a>
    </div>
  );
}
