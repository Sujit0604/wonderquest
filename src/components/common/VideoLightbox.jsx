import { useEffect, useState } from 'react';
import { X, Shield, Play, MonitorPlay } from 'lucide-react';
import DemoVideoPlayer from './DemoVideoPlayer';

/**
 * Accessible Video Lightbox Modal with guaranteed built-in playable demo video
 */
export default function VideoLightbox({ isOpen, onClose, videoTitle = "WonderQuest: Gameplay & Story Walkthrough" }) {
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'youtube'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/90 bg-slate-900/95">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <h3 id="video-modal-title" className="font-extrabold text-white text-xs sm:text-base tracking-tight truncate max-w-[200px] sm:max-w-md">
              {videoTitle}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switch between interactive created demo video and youtube */}
            <div className="inline-flex items-center p-1 rounded-xl bg-slate-800 border border-slate-700 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('demo')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'demo'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <MonitorPlay className="w-3.5 h-3.5" />
                <span>Interactive Gameplay</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('youtube')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  activeTab === 'youtube'
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Trailer (YouTube)</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
              aria-label="Close demo video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Display */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {activeTab === 'demo' ? (
            <DemoVideoPlayer
              onDownloadClick={() => {
                onClose();
                const el = document.getElementById('hero');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1&rel=0&modestbranding=1"
              title="WonderQuest Video Trailer"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>

        {/* Bottom Safety & Accolade Strip */}
        <div className="px-5 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-bold text-slate-300">100% KidSafe Certified</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline">Zero In-App Ads &amp; COPPA Compliant</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400">
            {activeTab === 'demo' ? 'Interactive 60 FPS Engine' : 'HD Video Stream'}
          </span>
        </div>
      </div>
    </div>
  );
}
