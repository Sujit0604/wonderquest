import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, Sparkles, Download } from 'lucide-react';
import { PippinCharacter, LunaCharacter, BarnabyCharacter, SparkCharacter } from './Characters';
import { fireConfetti } from '../../utils/confetti';

/**
 * Built-in Interactive Demo Video Engine for WonderQuest
 * 100% self-contained, guaranteed to play in all browsers without CORS or buffering delays.
 */
export default function DemoVideoPlayer({ onDownloadClick }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const containerRef = useRef(null);
  const audioCtxRef = useRef(null);

  const duration = 40; // 40 seconds total demo runtime

  // Scenes timeline
  const scenes = [
    { start: 0, end: 8, title: "01. World Discovery", subtitle: "Welcome to WonderQuest! An enchanting, 100% ad-free universe designed for children ages 3–8." },
    { start: 8, end: 16, title: "02. Number Island", subtitle: "Count glowing fireflies and feed friendly otters. Tactile learning without stressful timers." },
    { start: 16, end: 24, title: "03. Creative Studio", subtitle: "Luna the Fox guides watercolor mixing, sticker collages, and open-ended artistic play." },
    { start: 24, end: 32, title: "04. Phonics Constellation", subtitle: "Trace starlight to discover letters and phonetic sounds alongside Barnaby the Bear." },
    { start: 32, end: 40, title: "05. Bedtime Wind-Down", subtitle: "Twilight screen timer transitions naturally into bedtime lullabies with zero tantrums." },
  ];

  const currentSceneIndex = scenes.findIndex(s => currentTime >= s.start && currentTime < s.end);
  const activeScene = scenes[currentSceneIndex >= 0 ? currentSceneIndex : scenes.length - 1];

  // Play gentle harmonic sound effect
  const playSound = (freq = 440) => {
    if (isMuted) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } catch {
      // AudioContext blocked by user agent
    }
  };

  // Video playback tick
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          const next = +(prev + 0.2).toFixed(1);

          // Trigger harmonic notes at scene milestones
          if (Math.floor(next) !== Math.floor(prev)) {
            const notes = [261.63, 329.63, 392.00, 523.25]; // C, E, G, High C
            playSound(notes[Math.floor(next) % notes.length]);
          }
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isMuted]);

  const togglePlay = () => {
    if (currentTime >= duration) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(+(ratio * duration).toFixed(1));
  };

  const jumpToScene = (startSec) => {
    setCurrentTime(startSec);
    setIsPlaying(true);
    playSound(440);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-slate-950 flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Video Header Overlay */}
      <div className="absolute top-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
            WonderQuest: Gameplay Demo
          </span>
          <span className="hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
            Montessori Mode
          </span>
        </div>

        {/* Scene Chapter Quick-Jumps */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px]">
          {scenes.map((scene, i) => (
            <button
              key={i}
              onClick={() => jumpToScene(scene.start)}
              className={`px-2 py-1 rounded-md font-bold transition-all cursor-pointer ${
                currentTime >= scene.start && currentTime < scene.end
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {scene.title.split('.')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Animated Visual Canvas */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* SCENE 1: Welcome & World Lore (0s - 8s) */}
        {currentTime < 8 && (
          <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-sky-200 to-emerald-200 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
            {/* Animated floating clouds & sun */}
            <div className="absolute top-6 left-12 w-28 h-10 bg-white/80 rounded-full blur-[1px] animate-pulse" />
            <div className="absolute top-12 right-16 w-36 h-12 bg-white/70 rounded-full blur-[1px]" />
            <div className="absolute top-6 right-8 w-16 h-16 rounded-full bg-amber-300/80 blur-xs" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/90 text-sky-800 shadow-xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Archipelago of Wonder
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 drop-shadow-xs">
                Where Young Minds Bloom
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 max-w-md mb-4 font-semibold">
                An award-winning interactive wonderland designed with pediatric educators.
              </p>
              <div className="animate-bounce">
                <PippinCharacter className="w-32 h-32 sm:w-40 sm:h-40" />
              </div>
            </div>
          </div>
        )}

        {/* SCENE 2: Number Island & Counting (8s - 16s) */}
        {currentTime >= 8 && currentTime < 16 && (
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-400 via-teal-300 to-sky-300 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-950/80 text-emerald-200 mb-3 shadow-xs">
              ⭐ Activity 1: Tactile Counting Island
            </span>
            <div className="bg-white/90 backdrop-blur-xs px-4 py-2 rounded-2xl shadow-md border-2 border-amber-300 text-xs sm:text-sm font-extrabold text-slate-900 mb-4 animate-pulse">
              "Tap 4 glowing fireflies for Pippin!"
            </div>

            {/* Bouncing Numbers */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 my-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-300 border-3 border-amber-400 shadow-lg flex items-center justify-center font-black text-amber-950 text-xl sm:text-2xl transform hover:scale-110 animate-bounce"
                  style={{ animationDelay: `${num * 120}ms` }}
                >
                  {num}
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-black shadow-xs">
                ✓ Non-Punitive Feedback
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-black shadow-xs">
                ✓ Spatial Logic
              </span>
            </div>
          </div>
        )}

        {/* SCENE 3: Luna's Rainbow Studio (16s - 24s) */}
        {currentTime >= 16 && currentTime < 24 && (
          <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-pink-100 to-amber-100 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-950/80 text-rose-200 mb-3 shadow-xs">
              🎨 Activity 2: Open Creative Art Lab
            </span>

            {/* Digital Easel Canvas Simulation */}
            <div className="relative w-64 sm:w-80 h-36 bg-white rounded-3xl border-4 border-rose-300 shadow-xl flex items-center justify-center overflow-hidden p-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-purple-500 blur-sm opacity-80 animate-spin" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-0 flex items-center justify-center text-rose-900 font-black text-sm">
                ✨ Freeform Watercolor Mixing
              </div>
              <div className="absolute bottom-1 right-2">
                <LunaCharacter className="w-20 h-20" animated={false} />
              </div>
            </div>

            {/* Color Swatches */}
            <div className="flex items-center gap-2 mt-4">
              {['#ef4444', '#f97316', '#eab308', '#10b981', '#06b6d4', '#8b5cf6'].map((c, i) => (
                <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white shadow-md transform hover:scale-125 transition-transform" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
        )}

        {/* SCENE 4: Barnaby's Phonics Lab (24s - 32s) */}
        {currentTime >= 24 && currentTime < 32 && (
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-white animate-in fade-in duration-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 mb-3 shadow-xs">
              ✨ Activity 3: Stargazer Phonics Lab
            </span>

            {/* Constellation Trace Screen */}
            <div className="relative w-64 sm:w-80 h-36 border-2 border-dashed border-indigo-400/60 rounded-3xl bg-indigo-900/30 flex items-center justify-center shadow-inner">
              <span className="text-5xl font-black text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.9)] animate-pulse">
                B
              </span>
              <Sparkles className="absolute top-3 left-6 w-6 h-6 text-sky-300 animate-spin" />
              <Sparkles className="absolute bottom-4 right-8 w-6 h-6 text-amber-300 animate-bounce" />
              <div className="absolute bottom-2 left-3">
                <BarnabyCharacter className="w-18 h-18" animated={false} />
              </div>
            </div>

            <p className="text-xs text-indigo-200 mt-3 font-semibold">
              "B is for Bear! Connect stardust lines to hear phonics pronunciation."
            </p>
          </div>
        )}

        {/* SCENE 5: Bedtime Wind-Down (32s - 40s) */}
        {currentTime >= 32 && currentTime < 40 && (
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950 via-slate-950 to-indigo-950 flex flex-col items-center justify-center p-6 text-center text-white animate-in fade-in duration-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-400/30 mb-2 shadow-xs">
              🌙 Feature 4: Meltdown-Free Screen Timer
            </span>

            <div className="w-24 h-24 rounded-full bg-emerald-400/20 border-3 border-emerald-400/50 flex items-center justify-center my-2 animate-pulse">
              <SparkCharacter className="w-20 h-20" />
            </div>

            <h3 className="text-lg sm:text-xl font-black text-amber-300 mb-1">
              "Pippin gets sleepy... Goodnight Explorer!"
            </h3>
            <p className="text-xs text-slate-300 max-w-sm font-normal">
              Instead of an abrupt alarm, twilight blankets the screen and an acoustic lullaby signals bedtime gently.
            </p>
          </div>
        )}

        {/* END SCREEN (40s+) */}
        {currentTime >= 40 && (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-white animate-in zoom-in-95 duration-500">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center mb-3 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Start Your Free 7-Day Adventure
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
              Available on iOS, iPadOS, Android, and Amazon Fire Kids. 100% Ad-Free, COPPA &amp; GDPR-K Certified.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  fireConfetti();
                  if (onDownloadClick) onDownloadClick();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-sm bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Get App on App Store &amp; Google Play</span>
              </button>
              <button
                onClick={() => {
                  setCurrentTime(0);
                  setIsPlaying(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Replay Demo</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Subtitle Caption Banner */}
      <div className="relative z-20 px-4 py-2 sm:py-2.5 bg-slate-950/85 backdrop-blur-md border-t border-slate-800 text-center text-xs sm:text-sm text-amber-300 font-semibold tracking-wide min-h-[38px] flex items-center justify-center">
        <span>{activeScene.subtitle}</span>
      </div>

      {/* Bottom Video Controls Bar */}
      <div className="relative z-20 px-4 py-3 bg-slate-950 border-t border-slate-800/80 flex flex-col gap-2">
        {/* Scrubber Progress Bar */}
        <div
          onClick={handleSeek}
          className="relative w-full h-2 bg-slate-800 hover:h-3 rounded-full cursor-pointer transition-all group overflow-hidden"
          title="Click to seek timeline"
        >
          <div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-sky-400 via-amber-400 to-rose-400 rounded-full transition-all duration-150"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        {/* Buttons Row */}
        <div className="flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-3">
            {/* Play / Pause Button */}
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>

            {/* Restart */}
            <button
              onClick={() => {
                setCurrentTime(0);
                setIsPlaying(true);
              }}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Restart from beginning"
              aria-label="Restart video"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Mute / Unmute */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              <span className="hidden sm:inline text-[11px] font-bold">{isMuted ? 'Muted' : 'Sound On'}</span>
            </button>

            {/* Time Indicator */}
            <span className="font-mono text-slate-400 text-xs">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-bold text-[11px] text-amber-400">
              {activeScene.title}
            </span>
            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
