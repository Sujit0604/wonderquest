import { useState } from 'react';
import { Play, Sparkles, Star, ShieldCheck, Check } from 'lucide-react';
import { heroData } from '../../data/content';
import AppStoreBadges from '../common/AppStoreBadges';
import Button from '../common/Button';
import { PippinCharacter, LunaCharacter, SparkCharacter } from '../common/Characters';
import { fireConfetti } from '../../utils/confetti';

export default function HeroSection({ onWatchDemo }) {
  const [activeSpeech, setActiveSpeech] = useState("Hi Explorer! Tap me!");
  const [isWaving, setIsWaving] = useState(false);

  const handlePippinClick = () => {
    setIsWaving(true);
    fireConfetti({ particleCount: 30, spread: 50, origin: { y: 0.5 } });
    const phrases = [
      "Let's count stars together! ⭐",
      "Ready for adventure? 🚀",
      "Look at that rainbow! 🌈",
      "You did a great job today! 👏",
      "Yay! Let's explore Number Island! 🏝️"
    ];
    const nextPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setActiveSpeech(nextPhrase);
    setTimeout(() => setIsWaving(false), 800);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-100/70 via-sky-50/40 to-white">
      {/* Whimsical Cloud & Bubble Background Decorations */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/3 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle Floating Stars in Background */}
      <div className="hidden sm:block absolute top-24 left-10 text-amber-400 opacity-60 animate-pulse pointer-events-none">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="hidden sm:block absolute top-40 right-20 text-sky-400 opacity-50 animate-bounce pointer-events-none">
        <Star className="w-6 h-6 fill-sky-300" />
      </div>
      <div className="hidden sm:block absolute bottom-12 left-20 text-rose-400 opacity-40 pointer-events-none">
        <Sparkles className="w-7 h-7" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-amber-300/80 shadow-xs mb-6 text-xs sm:text-sm font-extrabold text-amber-800 animate-in fade-in slide-in-from-top-4 duration-500">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <span>{heroData.badge}</span>
            </div>

            {/* Main Headline (Single H1 for SEO) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
              Where Curious Minds{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                Learn,
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-sky-400/50" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Laugh</span>{' '}
              <span className="text-slate-900">&amp; Explore.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
              {heroData.subheadline}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <Button
                variant="primary"
                size="lg"
                celebrate={true}
                className="w-full sm:w-auto"
                onClick={() => {
                  const target = document.getElementById('gallery');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{heroData.primaryCtaText}</span>
              </Button>

              <button
                type="button"
                onClick={onWatchDemo}
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full font-bold text-slate-800 bg-white/90 hover:bg-white border-2 border-sky-200 hover:border-sky-400 shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400"
                aria-label="Watch demo video"
              >
                <div className="w-8 h-8 rounded-full bg-sky-500 group-hover:bg-sky-600 text-white flex items-center justify-center shadow-xs transition-colors">
                  <Play className="w-4 h-4 ml-0.5 fill-white" />
                </div>
                <span>{heroData.secondaryCtaText}</span>
              </button>
            </div>

            {/* App Store & Google Play Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 w-full sm:w-auto">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Available on:
              </span>
              <AppStoreBadges size="sm" />
            </div>

            {/* Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 pt-4 border-t border-slate-200/80 w-full justify-center lg:justify-start">
              {heroData.trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Character & Device Mockup */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-300/40 via-amber-200/30 to-pink-300/30 rounded-3xl blur-2xl transform scale-95" />

            {/* Main Interactive Mockup Frame */}
            <div className="relative w-full max-w-md bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border-4 border-white/90 ring-1 ring-slate-200/80">
              {/* Tablet/Phone Top Notch & Speaker */}
              <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                    Live Game Sandbox
                  </span>
                </div>
              </div>

              {/* Game Viewport Screen */}
              <div className="relative mt-3 rounded-2xl bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-200 p-6 sm:p-8 overflow-hidden min-h-[340px] flex flex-col items-center justify-between text-center select-none shadow-inner border border-sky-200">
                {/* Sun and Clouds inside device */}
                <div className="absolute top-4 right-6 w-12 h-12 bg-amber-300 rounded-full blur-[2px] opacity-80" />
                <div className="absolute top-10 left-4 bg-white/70 backdrop-blur-xs rounded-full px-3 py-1 text-[10px] font-bold text-slate-700 shadow-2xs">
                  ☁️ Level 3: Rainbow Island
                </div>

                {/* Character Speech Bubble */}
                <div className="relative z-20 bg-white text-slate-900 px-4 py-2.5 rounded-2xl shadow-lg border-2 border-amber-300 text-xs sm:text-sm font-extrabold max-w-[240px] transition-all transform hover:scale-105 animate-in fade-in">
                  <span>{activeSpeech}</span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
                </div>

                {/* Interactive Pippin Character */}
                <div
                  onClick={handlePippinClick}
                  className={`cursor-pointer transition-transform duration-300 ${isWaving ? 'scale-110 -rotate-6' : 'hover:scale-105'}`}
                  title="Click to interact with Pippin!"
                >
                  <PippinCharacter className="w-40 h-40 sm:w-44 sm:h-44" />
                </div>

                {/* In-Game Action Bar */}
                <div className="w-full bg-white/90 backdrop-blur-sm rounded-xl p-2.5 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
                    <span>⭐ 24 Stars</span>
                  </div>
                  <button
                    onClick={handlePippinClick}
                    className="text-xs font-bold px-3 py-1 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Tap to Say Hi!
                  </button>
                </div>
              </div>

              {/* Bottom Quick Feature Tag */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 px-2 font-medium">
                <span>Safe for Ages 3–8</span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% KidSafe Certified
                </span>
              </div>
            </div>

            {/* Floating Mini Pals in Badges */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 p-3 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3 animate-in slide-in-from-bottom duration-700">
              <LunaCharacter className="w-12 h-12" animated={false} />
              <div className="text-left pr-2">
                <p className="text-xs font-extrabold text-slate-900">Luna's Studio</p>
                <p className="text-[10px] text-rose-600 font-bold">Freeform Art Lab</p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 p-3 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 animate-in slide-in-from-top duration-700">
              <SparkCharacter className="w-11 h-11" animated={false} />
              <div className="text-left pr-1">
                <p className="text-xs font-extrabold text-slate-900">Bedtime Mode</p>
                <p className="text-[10px] text-emerald-600 font-bold">Gentle Wind-down</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
