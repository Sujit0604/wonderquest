import confetti from 'canvas-confetti';

/**
 * Trigger celebratory confetti with playful kids' colors
 * Respects user's prefers-reduced-motion settings.
 */
export function fireConfetti(options = {}) {
  // Check if reduced motion is requested
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const defaults = {
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#38bdf8', '#fbbf24', '#fb7185', '#34d399', '#a855f7'],
    disableForReducedMotion: true,
  };

  try {
    confetti({
      ...defaults,
      ...options,
    });
  } catch (err) {
    console.debug('Confetti triggered', err);
  }
}

/**
 * Double cannon celebration burst (for download or successful form submit)
 */
export function fireSuperCelebration() {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const end = Date.now() + 1000;
  const colors = ['#38bdf8', '#fbbf24', '#fb7185', '#34d399', '#a855f7'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}
