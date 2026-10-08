import { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Tablet, Play, Sparkles, Star } from 'lucide-react';
import { galleryData } from '../../data/content';
import SectionHeader from '../common/SectionHeader';
import { PippinCharacter, LunaCharacter, BarnabyCharacter, SparkCharacter } from '../common/Characters';

export default function GallerySection({ onOpenVideo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deviceMode, setDeviceMode] = useState('phone'); // 'phone' | 'tablet'

  const screenshots = galleryData.screenshots;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const current = screenshots[currentIndex];

  // Render high-fidelity simulated interactive in-game graphics for each screen
  const renderGameScreenContent = (screen) => {
    switch (screen.previewType) {
      case 'counting':
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-sky-400 via-emerald-300 to-emerald-400 text-slate-900 relative overflow-hidden select-none">
            {/* Top Game Bar */}
            <div className="flex items-center justify-between z-10">
              <span className="bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black text-emerald-800 shadow-xs">
                🏝️ Number Meadow
              </span>
              <div className="flex items-center gap-1.5 bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-xs font-black shadow-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Score: 12</span>
              </div>
            </div>

            {/* In-game character & counting puzzle */}
            <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
              <div className="bg-white/95 px-4 py-2 rounded-2xl shadow-md border-2 border-amber-300 text-xs sm:text-sm font-extrabold mb-3">
                "Count 4 glowing fireflies for Barnaby!"
              </div>
              <div className="flex items-center justify-center gap-3 my-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-300 border-2 border-amber-400 shadow-md flex items-center justify-center font-black text-amber-950 text-base sm:text-lg animate-bounce" style={{ animationDelay: `${num * 150}ms` }}>
                    {num}
                  </div>
                ))}
              </div>
              <PippinCharacter className="w-24 h-24 sm:w-28 sm:h-28" />
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[11px] font-bold text-white/90 bg-slate-900/40 px-3 py-1 rounded-full">
                Tactile Drag &amp; Drop
              </span>
              <button className="px-4 py-1.5 bg-amber-400 text-slate-900 text-xs font-black rounded-xl shadow-xs hover:bg-amber-300">
                Next Island →
              </button>
            </div>
          </div>
        );

      case 'constellation':
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 text-white relative overflow-hidden select-none">
            <div className="flex items-center justify-between z-10">
              <span className="bg-indigo-900/80 px-3 py-1 rounded-full text-xs font-black text-indigo-200 border border-indigo-700">
                ✨ Star Constellation Lab
              </span>
              <span className="bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-400/40">
                Letter "B" for Bear
              </span>
            </div>

            <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
              {/* Connect the dots celestial pattern */}
              <div className="relative w-48 h-32 my-2 border border-dashed border-sky-400/40 rounded-2xl flex items-center justify-center bg-indigo-900/30">
                <span className="text-4xl font-black text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]">
                  B
                </span>
                <Sparkles className="absolute top-2 left-4 w-5 h-5 text-sky-300 animate-spin" />
                <Sparkles className="absolute bottom-3 right-6 w-5 h-5 text-amber-300 animate-pulse" />
              </div>
              <BarnabyCharacter className="w-24 h-24 sm:w-28 sm:h-28" />
              <p className="text-xs text-indigo-200 mt-2 font-medium">Trace stardust to unlock the bear constellation!</p>
            </div>

            <div className="flex items-center justify-between z-10 text-xs text-indigo-300">
              <span>Touch &amp; Trace</span>
              <span className="text-amber-300 font-bold">3 of 5 Stars ✨</span>
            </div>
          </div>
        );

      case 'art':
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-rose-100 via-amber-50 to-pink-100 text-slate-900 relative overflow-hidden select-none">
            <div className="flex items-center justify-between z-10">
              <span className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-black shadow-xs">
                🎨 Luna's Rainbow Studio
              </span>
              <span className="bg-white text-slate-800 px-3 py-1 rounded-full text-xs font-bold border border-rose-200">
                No Mess Canvas
              </span>
            </div>

            <div className="flex flex-col items-center justify-center my-auto z-10">
              <div className="w-full max-w-xs h-32 bg-white rounded-2xl border-2 border-rose-200 shadow-inner flex items-center justify-center p-3 relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-purple-500 blur-xs opacity-80" />
                <LunaCharacter className="absolute -bottom-2 -right-2 w-20 h-20" />
              </div>
              {/* Color Palette row */}
              <div className="flex items-center gap-2 mt-3">
                {['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#a855f7'].map((col) => (
                  <div key={col} className="w-6 h-6 rounded-full border-2 border-white shadow-xs" style={{ backgroundColor: col }} />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between z-10 text-xs font-bold text-rose-800">
              <span>Save to Parent Gallery</span>
              <span className="bg-white px-2 py-0.5 rounded-lg border border-rose-200">Export HD</span>
            </div>
          </div>
        );

      case 'music':
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-sky-300 via-cyan-200 to-teal-200 text-slate-900 relative overflow-hidden select-none">
            <div className="flex items-center justify-between z-10">
              <span className="bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-black">
                🎵 Musical Breeze Grove
              </span>
              <span className="bg-white/80 text-sky-800 px-3 py-1 rounded-full text-xs font-bold">
                Harmonic Scale
              </span>
            </div>

            <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
              <div className="flex items-end justify-center gap-2 my-2">
                {[60, 80, 100, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-8 sm:w-10 rounded-xl bg-gradient-to-t from-sky-600 to-cyan-400 shadow-md flex items-center justify-center text-white font-black text-xs"
                    style={{ height: `${h}px` }}
                  >
                    ♪
                  </div>
                ))}
              </div>
              <p className="text-xs font-bold text-sky-900 mt-2">Tap singing raindrops to play harmonic lullabies!</p>
            </div>

            <div className="flex items-center justify-between z-10 text-xs font-bold text-sky-800">
              <span>Real Acoustic Instruments</span>
              <span>Kalimba &amp; Cello</span>
            </div>
          </div>
        );

      case 'breathing':
      default:
        return (
          <div className="w-full h-full flex flex-col justify-between p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden select-none">
            <div className="flex items-center justify-between z-10">
              <span className="bg-purple-800/80 px-3 py-1 rounded-full text-xs font-black text-purple-200 border border-purple-700">
                🌙 Bedtime Wind-Down Tree
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/40">
                Calm Breath Mode
              </span>
            </div>

            <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
              <div className="w-28 h-28 rounded-full bg-emerald-400/20 border-4 border-emerald-400/60 flex items-center justify-center animate-pulse mb-2">
                <SparkCharacter className="w-20 h-20" />
              </div>
              <p className="text-sm font-extrabold text-purple-200">"Breathe in as the leaves glow, breathe out as they dim..."</p>
            </div>

            <div className="flex items-center justify-between z-10 text-xs text-purple-300">
              <span>Gentle Sensory Rhythm</span>
              <span className="text-emerald-400 font-bold">15 min Smart Timer Active</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={galleryData.sectionTag}
          title={galleryData.title}
          subtitle={galleryData.subtitle}
          tagVariant="purple"
        />

        {/* Device Switcher & Video Demo Trigger Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          {/* Device toggle pills */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setDeviceMode('phone')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                deviceMode === 'phone'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>iPhone View</span>
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                deviceMode === 'tablet'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-4 h-4" />
              <span>iPad Tablet View</span>
            </button>
          </div>

          {/* Gameplay Video Teaser Button */}
          <button
            onClick={onOpenVideo}
            className="group flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/80 font-extrabold text-xs sm:text-sm shadow-xs transition-all cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400"
          >
            <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
            </div>
            <span>Watch Gameplay Demo (1:30m)</span>
          </button>
        </div>

        {/* Carousel Device Mockup Display */}
        <div className="relative flex flex-col items-center">
          {/* Main Mockup Container */}
          <div
            className={`transition-all duration-300 relative bg-slate-950 rounded-[40px] p-3 sm:p-4 shadow-2xl border-4 border-slate-800 ${
              deviceMode === 'phone'
                ? 'w-full max-w-[340px] sm:max-w-[370px] aspect-[9/18]'
                : 'w-full max-w-[620px] aspect-[4/3]'
            }`}
          >
            {/* Screen Notch / Bezel */}
            <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-900 shadow-inner">
              {renderGameScreenContent(current)}
            </div>

            {/* Left / Right Carousel Controls */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 cursor-pointer z-20"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 cursor-pointer z-20"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Screenshot Caption Details */}
          <div className="mt-8 text-center max-w-md">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-purple-100 text-purple-800 mb-2 inline-block">
              {current.tag}
            </span>
            <h3 className="text-xl font-black text-slate-900 mt-1 mb-2">
              {current.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {current.caption}
            </p>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-sky-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
